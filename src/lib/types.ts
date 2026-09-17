export type DocumentType = 'PASSPORT' | 'NATIONAL_ID' | 'DRIVING_LICENSE' | 'RESIDENCE_PERMIT';

export type VerificationStatus =
  | 'IDLE'
  | 'CONSENT'
  | 'CAMERA_CHECK'
  | 'DOC_SELECT'
  | 'DOC_SCAN'
  | 'BIOMETRIC_OVAL'
  | 'ACTION_CHALLENGE'
  | 'RISK_ANALYSIS'
  | 'VIDEO_KYC_WAITING'
  | 'VIDEO_KYC_CALL'
  | 'APPROVED'
  | 'REJECTED'
  | 'MANUAL_REVIEW';

export type RiskLevel = 'LOW' | 'MEDIUM' | 'HIGH';

export interface ActionChallenge {
  id: string;
  type: 'TURN_LEFT' | 'TURN_RIGHT' | 'LOOK_UP' | 'LOOK_DOWN' | 'BLINK' | 'SMILE' | 'TILT_ID' | 'SHOW_ID_BACK';
  label: string;
  instruction: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'PASSED' | 'FAILED';
  durationSeconds: number;
}

export interface ExtractedDocumentData {
  documentType: DocumentType;
  country: string;
  countryCode: string;
  fullName: string;
  givenNames: string;
  surname: string;
  documentNumber: string;
  dateOfBirth: string;
  expiryDate: string;
  issueDate: string;
  nationality: string;
  gender: 'M' | 'F' | 'X';
  mrzRaw?: string;
  mrzValid: boolean;
  barcodeValid?: boolean;
  chipAuthentication?: 'OK' | 'FAILED' | 'NOT_SUPPORTED';
  securityFeatures: {
    guillochePattern: boolean;
    hologramCheck: boolean;
    tamperDetected: boolean;
    uvOrIRValid: boolean;
  };
}

export interface BiometricTelemetry {
  faceDetected: boolean;
  faceMatchScore: number; // 0.00 to 1.00
  livenessScore: number; // 0.00 to 1.00
  livenessMode: 'PASSIVE' | 'ACTIVE' | 'BLINK';
  presentationAttackDetected: boolean;
  attackType?: 'PRINT_ATTACK' | 'SCREEN_REPLAY' | 'DEEPFAKE' | 'VIDEO_INJECTION' | 'NONE';
  lightingQuality: 'GOOD' | 'POOR' | 'EXCESSIVE_GLARE';
  headPose: {
    pitch: number;
    yaw: number;
    roll: number;
  };
}

export interface RiskEvaluation {
  riskScore: number; // 0 to 100
  riskLevel: RiskLevel;
  recommendation: 'PASS' | 'MANUAL_REVIEW' | 'REJECT' | 'VIDEO_KYC';
  signals: {
    documentAuthenticity: number; // 0-100
    biometricMatch: number; // 0-100
    livenessIntegrity: number; // 0-100
    deviceIntegrity: number; // 0-100 (checks for virtual cam, dev tools)
    networkRisk: number; // 0-100 (checks VPN, Tor, datacenter IP)
    amlPepMatch: boolean;
    behavioralAnomalies: number;
  };
  reasons: string[];
}

export interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: 'SYSTEM' | 'USER' | 'AGENT' | 'API';
  actorName?: string;
  action: string;
  detail: string;
  riskImpact?: string;
}

export interface VerificationCase {
  id: string; // e.g. VR-829182
  customerReference: string;
  applicantName: string;
  country: string;
  documentType: DocumentType;
  documentNumber: string;
  createdAt: string;
  status: VerificationStatus;
  riskLevel: RiskLevel;
  riskScore: number;
  faceMatchScore: number;
  livenessScore: number;
  assignedAgent?: string;
  waitTimeSeconds?: number;
  documentData?: ExtractedDocumentData;
  biometrics?: BiometricTelemetry;
  riskEvaluation?: RiskEvaluation;
  actionsCompleted?: string[];
  auditLogs: AuditLogEntry[];
  evidencePackageUrl?: string;
}

export interface WorkflowNode {
  id: string;
  name: string;
  type: 'TRIGGER' | 'DOC_OCR' | 'MRZ_CHECK' | 'NFC_CHIP' | 'PASSIVE_LIVENESS' | 'ACTION_CHALLENGE' | 'FACE_MATCH' | 'RISK_ENGINE' | 'AML_SCREENING' | 'VIDEO_KYC' | 'DECISION';
  category: 'CAPTURE' | 'BIOMETRICS' | 'RISK' | 'HUMAN_REVIEW' | 'OUTPUT';
  status: 'ACTIVE' | 'DISABLED';
  config: Record<string, string | number | boolean>;
}

export interface WorkflowDefinition {
  id: string;
  name: string;
  description: string;
  isDefault: boolean;
  lastModified: string;
  nodes: WorkflowNode[];
}
