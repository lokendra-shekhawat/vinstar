import { ActionChallenge, ExtractedDocumentData, RiskEvaluation, BiometricTelemetry } from './types';

const ALL_ACTION_TYPES: Array<{
  type: ActionChallenge['type'];
  label: string;
  instruction: string;
  durationSeconds: number;
}> = [
  {
    type: 'TURN_LEFT',
    label: 'Turn Head Left',
    instruction: 'Slowly turn your head to the LEFT until you hear a chime',
    durationSeconds: 3,
  },
  {
    type: 'TURN_RIGHT',
    label: 'Turn Head Right',
    instruction: 'Slowly turn your head to the RIGHT toward the marker',
    durationSeconds: 3,
  },
  {
    type: 'BLINK',
    label: 'Blink Twice',
    instruction: 'Look directly at the camera and blink your eyes TWICE',
    durationSeconds: 2,
  },
  {
    type: 'SMILE',
    label: 'Smile Naturally',
    instruction: 'Give a gentle natural smile to confirm live facial expression',
    durationSeconds: 2,
  },
  {
    type: 'LOOK_UP',
    label: 'Tilt Chin Up',
    instruction: 'Slightly raise your chin to evaluate 3D facial depth',
    durationSeconds: 3,
  },
  {
    type: 'TILT_ID',
    label: 'Tilt Document',
    instruction: 'Hold your ID in front of camera and tilt 45° to reflect hologram',
    durationSeconds: 4,
  },
];

export function generateActionChallenges(count: number = 3): ActionChallenge[] {
  // Fisher-Yates shuffle
  const shuffled = [...ALL_ACTION_TYPES].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map((item, index) => ({
    id: `action_${index + 1}_${Date.now()}`,
    type: item.type,
    label: item.label,
    instruction: item.instruction,
    status: index === 0 ? 'IN_PROGRESS' : 'PENDING',
    durationSeconds: item.durationSeconds,
  }));
}

export function evaluateRiskScore(params: {
  doc: ExtractedDocumentData;
  biometrics: BiometricTelemetry;
  deviceRiskScore?: number;
  networkRiskScore?: number;
}): RiskEvaluation {
  const { doc, biometrics, deviceRiskScore = 15, networkRiskScore = 10 } = params;

  let risk = 0;
  const reasons: string[] = [];

  // Document checks
  const docAuthenticity = doc.securityFeatures.tamperDetected
    ? 15
    : doc.mrzValid && doc.securityFeatures.guillochePattern
    ? 100
    : 75;

  if (doc.securityFeatures.tamperDetected) {
    risk += 50;
    reasons.push('Document tampering or anomaly detected in security pattern zone');
  }

  if (!doc.mrzValid && doc.documentType === 'PASSPORT') {
    risk += 35;
    reasons.push('MRZ ICAO 9303 checksum validation failed');
  }

  // Biometrics & Liveness
  const bioMatch = Math.round(biometrics.faceMatchScore * 100);
  const livenessScore = Math.round(biometrics.livenessScore * 100);

  if (biometrics.presentationAttackDetected) {
    risk += 60;
    reasons.push(`Presentation attack detected: ${biometrics.attackType || 'SPOOF_ATTACK'}`);
  }

  if (biometrics.faceMatchScore < 0.75) {
    risk += 40;
    reasons.push('Biometric similarity between ID photograph and live selfie is below safety threshold');
  } else if (biometrics.faceMatchScore < 0.88) {
    risk += 15;
    reasons.push('Biometric similarity is borderline; visual inspection recommended');
  }

  if (biometrics.livenessScore < 0.85) {
    risk += 30;
    reasons.push('Low confidence in genuine human liveness');
  }

  // Device & Network checks
  if (deviceRiskScore > 50) {
    risk += 20;
    reasons.push('Suspicious browser fingerprint / simulated camera device');
  }

  if (networkRiskScore > 60) {
    risk += 25;
    reasons.push('Connection originated from known commercial VPN / proxy');
  }

  const finalRiskScore = Math.min(100, Math.max(5, risk));
  const riskLevel = finalRiskScore >= 70 ? 'HIGH' : finalRiskScore >= 35 ? 'MEDIUM' : 'LOW';

  let recommendation: RiskEvaluation['recommendation'] = 'PASS';
  if (finalRiskScore >= 85 || doc.securityFeatures.tamperDetected || biometrics.presentationAttackDetected) {
    recommendation = 'REJECT';
  } else if (finalRiskScore >= 50) {
    recommendation = 'VIDEO_KYC';
  } else if (finalRiskScore >= 35) {
    recommendation = 'MANUAL_REVIEW';
  }

  return {
    riskScore: finalRiskScore,
    riskLevel,
    recommendation,
    signals: {
      documentAuthenticity: docAuthenticity,
      biometricMatch: bioMatch,
      livenessIntegrity: livenessScore,
      deviceIntegrity: Math.max(0, 100 - deviceRiskScore),
      networkRisk: networkRiskScore,
      amlPepMatch: false,
      behavioralAnomalies: Math.min(100, Math.round(risk * 0.6)),
    },
    reasons: reasons.length > 0 ? reasons : ['All biometric, forensic, and behavioral signals verified successfully.'],
  };
}

export function generateVerificationId(): string {
  const num = Math.floor(100000 + Math.random() * 900000);
  return `VR-${num}`;
}

export function generateVerificationHash(id: string): string {
  return `0x${Array.from(id + Date.now().toString())
    .map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 32)}`;
}

/**
 * Native Web Audio API Chime Synthesizer
 * Zero external MP3/WAV dependencies, instant acoustic feedback.
 */
export function playChime(type: 'success' | 'action' | 'alert') {
  if (typeof window === 'undefined') return;
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } else if (type === 'action') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime); // A4
      osc.frequency.setValueAtTime(587.33, ctx.currentTime + 0.08); // D5
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start();
      osc.stop(ctx.currentTime + 0.35);
    } else {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(260, ctx.currentTime);
      osc.frequency.setValueAtTime(190, ctx.currentTime + 0.12);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
      osc.start();
      osc.stop(ctx.currentTime + 0.4);
    }
  } catch {
    // Graceful silent fallback if browser audio context blocked
  }
}

/**
 * Natural Browser Speech Synthesis for Live Agent Attestation
 */
export function speakAgentVoice(text: string) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  } catch {
    // Fallback if speech synthesis is disabled
  }
}
