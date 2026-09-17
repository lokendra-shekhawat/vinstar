'use client';

import React, { useState } from 'react';
import {
  GitFork,
  CheckCircle2,
  AlertTriangle,
  Video,
  FileCheck2,
  ScanFace,
  ShieldAlert,
  Zap,
  Sliders,
  ArrowRight,
  Database,
  Lock,
  Cpu,
  RefreshCw,
} from 'lucide-react';

type FlowScenario = 'LOW_RISK' | 'MEDIUM_RISK' | 'HIGH_RISK';

interface NodeDetail {
  id: string;
  name: string;
  type: string;
  policy: string;
  latency: string;
  autoAction: string;
  params: { label: string; value: string }[];
}

export default function InteractiveWorkflowOrchestrator() {
  const [selectedScenario, setSelectedScenario] = useState<FlowScenario>('LOW_RISK');
  const [selectedNode, setSelectedNode] = useState<string>('risk_engine');

  const nodeDetails: Record<string, NodeDetail> = {
    doc_ingest: {
      id: 'doc_ingest',
      name: 'Document Forensic OCR & Chip',
      type: 'Forensic Intake Layer',
      policy: 'Verify ICAO 9303 Checksums, BAP/EAC chip signature, and 365nm UV luminescence.',
      latency: '480 ms',
      autoAction: 'Extracts full MRZ, checks NFC cryptogram, extracts 600 DPI biometric portrait.',
      params: [
        { label: 'Template Database', value: '14,200+ Global Passports & IDs' },
        { label: 'BAP/PACE Decryption', value: 'Mandatory on e-Passports' },
        { label: 'Ghost Portrait Ratio', value: 'Min. 98.5% Cross-Match' },
      ],
    },
    biometric_face: {
      id: 'biometric_face',
      name: 'ISO 30107-3 Liveness & 1:1 Match',
      type: 'Biometric Security Layer',
      policy: 'Passive 3D depth analysis + Cosine Similarity comparison against document portrait.',
      latency: '340 ms',
      autoAction: 'Computes 468 landmark facial mesh; rejects 2D screens, 3D silicone masks, and print attacks.',
      params: [
        { label: 'Cosine Distance Threshold', value: '< 0.12 (99.8% Confidence)' },
        { label: 'BPAR Error Tolerance', value: '0.00% (iBeta Level 2 Audited)' },
        { label: 'Virtual Camera Blocker', value: 'Active WebRTC Kernel Hook' },
      ],
    },
    risk_engine: {
      id: 'risk_engine',
      name: 'Multi-Vector Autonomous Decisioning',
      type: 'Rule & AML Engine',
      policy: 'Synthesizes biometric score, PEP & Sanctions watchlist, device telemetry, and IP reputation.',
      latency: '180 ms',
      autoAction: 'Dynamically routes session into Instant Pass, Action Challenge, or Live Human Video KYC.',
      params: [
        { label: 'OFAC & Dow Jones AML', value: 'Live 500+ Sanctions Lists' },
        { label: 'Device Fingerprint', value: 'Browser Canvas + SIM IMSI' },
        { label: 'Synthetic Identity Classifier', value: 'Deep Neural Network v4' },
      ],
    },
    instant_pass: {
      id: 'instant_pass',
      name: 'Automated Instant Approval',
      type: 'Autonomous Resolution',
      policy: 'Risk score < 15. All cryptographic checksums valid. 0 watch-list hits.',
      latency: '1,120 ms Total',
      autoAction: 'Fires signed webhook (HMAC-SHA256) to client core banking backend.',
      params: [
        { label: 'Conversion Rate', value: '96.8% First-Time Pass' },
        { label: 'Manual Review Cost', value: '$0.00' },
        { label: 'SLA Guarantee', value: 'Sub-2.0s Final Verdict' },
      ],
    },
    action_challenge: {
      id: 'action_challenge',
      name: 'Dynamic Action Challenge Step-Up',
      type: 'Interactive Anti-Spoofing',
      policy: 'Risk score 15 – 70 or new device detected. Real-time active micro-movement challenge.',
      latency: '+ 3.5 s',
      autoAction: 'Generates randomized crypto nonce: applicant must turn left 30°, smile, or tilt ID at 45°.',
      params: [
        { label: 'Challenge Nonce Entropy', value: '256-bit Randomized' },
        { label: 'Replay Attack Defense', value: 'Zero Pre-recorded Video Risk' },
        { label: 'Action Timeout', value: '12 seconds' },
      ],
    },
    video_kyc: {
      id: 'video_kyc',
      name: 'Encrypted Human Video KYC Escalation',
      type: 'High-Assurance Live Agent',
      policy: 'Risk score > 70 or BaFin / FINMA regulated high-value transaction requirement.',
      latency: 'Sub-60s Agent Connect',
      autoAction: 'Launches WebRTC E2E video call with certified compliance officer + geo-stamped audit recording.',
      params: [
        { label: 'Encryption Standard', value: 'WebRTC DTLS-SRTP 256-bit' },
        { label: 'Optical Hologram Tilt', value: 'Live Agent Guided' },
        { label: 'Audit Trail Storage', value: '10-Year WORM Immutable Vault' },
      ],
    },
  };

  const activeNodeInfo = nodeDetails[selectedNode] || nodeDetails['risk_engine'];

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur-2xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-20" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header & Scenario Selector */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              ORCHESTRATION PIPELINE
            </span>
            <span className="text-xs text-slate-400 font-mono">
              Persona / Sumsub Workflow Architecture
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            Dynamic Verification Workflow Orchestrator
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Design no-code adaptive verification pipelines. Route legitimate users instantly in under 2 seconds while automatically escalating high-risk anomalies into dynamic challenges or live Video KYC.
          </p>
        </div>

        {/* Scenario Pill Buttons */}
        <div className="flex items-center p-1 rounded-xl bg-slate-950/80 border border-white/10 space-x-1 shrink-0">
          <button
            onClick={() => {
              setSelectedScenario('LOW_RISK');
              setSelectedNode('instant_pass');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedScenario === 'LOW_RISK'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Low Risk (Auto-Pass)
          </button>
          <button
            onClick={() => {
              setSelectedScenario('MEDIUM_RISK');
              setSelectedNode('action_challenge');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedScenario === 'MEDIUM_RISK'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Med Risk (Action Step-Up)
          </button>
          <button
            onClick={() => {
              setSelectedScenario('HIGH_RISK');
              setSelectedNode('video_kyc');
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              selectedScenario === 'HIGH_RISK'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            High Risk (Video KYC)
          </button>
        </div>
      </div>

      {/* Main Orchestrator Body: Flowchart on Left, Node Telemetry on Right */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6 items-start">
        {/* Left: Interactive Node Pipeline Canvas (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-xl border border-white/10 bg-slate-950/70 p-5 space-y-4 relative overflow-hidden">
            {/* Stage 1: Document Intake */}
            <div
              onClick={() => setSelectedNode('doc_ingest')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedNode === 'doc_ingest'
                  ? 'border-cyan-400 bg-cyan-950/30 shadow-lg shadow-cyan-950/50'
                  : 'border-white/10 bg-slate-900/60 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-400">STAGE 01 • INTAKE</div>
                  <div className="text-sm font-semibold text-slate-100">Document Forensic OCR & NFC Chip</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                480ms
              </span>
            </div>

            {/* Connecting line */}
            <div className="h-4 w-0.5 bg-gradient-to-b from-cyan-500 to-indigo-500 mx-auto" />

            {/* Stage 2: Biometric Liveness */}
            <div
              onClick={() => setSelectedNode('biometric_face')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedNode === 'biometric_face'
                  ? 'border-indigo-400 bg-indigo-950/30 shadow-lg shadow-indigo-950/50'
                  : 'border-white/10 bg-slate-900/60 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <ScanFace className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-indigo-400">STAGE 02 • BIOMETRICS</div>
                  <div className="text-sm font-semibold text-slate-100">ISO 30107-3 Liveness & 1:1 Match</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                340ms
              </span>
            </div>

            {/* Connecting line */}
            <div className="h-4 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500 mx-auto" />

            {/* Stage 3: Risk Engine Decisioning */}
            <div
              onClick={() => setSelectedNode('risk_engine')}
              className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                selectedNode === 'risk_engine'
                  ? 'border-purple-400 bg-purple-950/30 shadow-lg shadow-purple-950/50'
                  : 'border-white/10 bg-slate-900/60 hover:border-white/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <GitFork className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-mono text-purple-400">STAGE 03 • DECISION HUB</div>
                  <div className="text-sm font-semibold text-slate-100">Multi-Vector Autonomous Risk Engine</div>
                </div>
              </div>
              <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">
                180ms
              </span>
            </div>

            {/* Branching tree representation */}
            <div className="pt-2 border-t border-white/5 space-y-2">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider text-center">
                ↓ CONDITIONAL ESCALATION BRANCHING ↓
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                {/* Branch 1: Auto-Approve */}
                <div
                  onClick={() => {
                    setSelectedScenario('LOW_RISK');
                    setSelectedNode('instant_pass');
                  }}
                  className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                    selectedScenario === 'LOW_RISK' || selectedNode === 'instant_pass'
                      ? 'border-emerald-400 bg-emerald-950/40 shadow-md shadow-emerald-950/50'
                      : 'border-white/5 bg-slate-900/40 opacity-50 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-emerald-400 text-xs font-mono mb-1">
                    <span>SCORE &lt; 15</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-200 leading-tight">
                    Instant Auto-Pass
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">&lt; 2.0s SLA</div>
                </div>

                {/* Branch 2: Action Challenge */}
                <div
                  onClick={() => {
                    setSelectedScenario('MEDIUM_RISK');
                    setSelectedNode('action_challenge');
                  }}
                  className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                    selectedScenario === 'MEDIUM_RISK' || selectedNode === 'action_challenge'
                      ? 'border-amber-400 bg-amber-950/40 shadow-md shadow-amber-950/50'
                      : 'border-white/5 bg-slate-900/40 opacity-50 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-amber-400 text-xs font-mono mb-1">
                    <span>SCORE 15-70</span>
                    <AlertTriangle className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-200 leading-tight">
                    Action Step-Up
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">Random Nonce</div>
                </div>

                {/* Branch 3: Video KYC */}
                <div
                  onClick={() => {
                    setSelectedScenario('HIGH_RISK');
                    setSelectedNode('video_kyc');
                  }}
                  className={`p-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                    selectedScenario === 'HIGH_RISK' || selectedNode === 'video_kyc'
                      ? 'border-indigo-400 bg-indigo-950/40 shadow-md shadow-indigo-950/50'
                      : 'border-white/5 bg-slate-900/40 opacity-50 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between text-indigo-400 text-xs font-mono mb-1">
                    <span>SCORE &gt; 70</span>
                    <Video className="w-3.5 h-3.5" />
                  </div>
                  <div className="text-xs font-semibold text-slate-200 leading-tight">
                    Live Video KYC
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-1">BaFin Officer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 font-mono px-1">
            <span>TIP: Click any node to inspect execution telemetry</span>
            <span>REST Webhook Trigger: HMAC-SHA256</span>
          </div>
        </div>

        {/* Right: Dynamic Rule & Policy Inspector Panel (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-white/10 bg-slate-900/70 p-5 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div>
                <span className="text-[10px] font-mono uppercase text-indigo-400">
                  {activeNodeInfo.type}
                </span>
                <h4 className="text-base font-bold text-white tracking-tight">
                  {activeNodeInfo.name}
                </h4>
              </div>
              <div className="px-2 py-1 rounded bg-slate-950 border border-white/10 text-right font-mono text-xs">
                <span className="text-slate-400 text-[10px] block">LATENCY</span>
                <span className="text-emerald-400 font-semibold">{activeNodeInfo.latency}</span>
              </div>
            </div>

            {/* Policy statement */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Execution Policy
              </label>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-white/5 font-mono">
                {activeNodeInfo.policy}
              </p>
            </div>

            {/* Autonomous Action */}
            <div className="space-y-1">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Automated System Action
              </label>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-lg border border-white/5 font-mono">
                {activeNodeInfo.autoAction}
              </p>
            </div>

            {/* Live Parameters */}
            <div className="space-y-2 pt-2 border-t border-white/5">
              <label className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                Configuration Parameters
              </label>
              <div className="space-y-2 font-mono text-xs">
                {activeNodeInfo.params.map((p, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2 rounded bg-slate-950/80 border border-white/5"
                  >
                    <span className="text-slate-400 text-[11px]">{p.label}</span>
                    <span className="text-indigo-300 font-semibold text-[11px]">{p.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Webhook Payload Simulated Box */}
            <div className="p-3 rounded-lg bg-slate-950/90 border border-white/5 space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center justify-between text-slate-500 text-[10px]">
                <span>WEBHOOK EVENT DISPATCH</span>
                <span className="text-emerald-400">200 OK</span>
              </div>
              <div className="text-cyan-400 truncate">
                event: <span className="text-slate-200">&quot;verification.step_completed&quot;</span>
              </div>
              <div className="text-slate-400 text-[10px]">
                signature: sha256=9b72a184c...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
