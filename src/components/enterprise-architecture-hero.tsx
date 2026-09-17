'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  ScanFace,
  FileCheck2,
  Video,
  Activity,
  Layers,
  ArrowRight,
  Radio,
  Lock,
  Cpu,
  Sparkles,
} from 'lucide-react';

export default function EnterpriseArchitectureHero() {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'FORENSIC_DOC' | 'BIOMETRICS' | 'VIDEO_SESSION'>('FORENSIC_DOC');

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 rounded-2xl border border-white/10 bg-[#0B0F19]/80 backdrop-blur-2xl shadow-2xl overflow-hidden relative">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Telemetry Header Bar */}
      <div className="px-5 py-3.5 bg-slate-950/90 border-b border-white/5 flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-slate-400">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/30 border border-rose-500/50" />
            <div className="w-3 h-3 rounded-full bg-amber-500/30 border border-amber-500/50" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/30 border border-emerald-500/50" />
          </div>
          <span className="text-slate-300 font-semibold tracking-wider">VINSTAR CORE ENGINE v4.8</span>
          <span className="text-slate-600">|</span>
          <span className="text-emerald-400 flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
            GATEWAY 99.99% UPTIME
          </span>
        </div>

        {/* Telemetry Switcher Tabs */}
        <div className="flex items-center space-x-1 bg-slate-900/80 p-1 rounded-lg border border-white/5">
          <button
            onClick={() => setActiveTelemetryTab('FORENSIC_DOC')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTelemetryTab === 'FORENSIC_DOC'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Multi-Spectrum Document
          </button>
          <button
            onClick={() => setActiveTelemetryTab('BIOMETRICS')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTelemetryTab === 'BIOMETRICS'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            3D Biometric Mesh
          </button>
          <button
            onClick={() => setActiveTelemetryTab('VIDEO_SESSION')}
            className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
              activeTelemetryTab === 'VIDEO_SESSION'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Encrypted Video KYC
          </button>
        </div>
      </div>

      {/* Main Showcase Grid */}
      <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Dynamic Visual Specimen Display (7 Cols) */}
        <div className="lg:col-span-7 relative rounded-xl border border-white/10 bg-slate-950 overflow-hidden shadow-2xl aspect-[16/10] group">
          {activeTelemetryTab === 'FORENSIC_DOC' ? (
            <div className="relative w-full h-full">
              <Image
                src="/assets/spectral_uv_passport_inspection.jpg"
                alt="Forensic UV Document Inspection"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-transparent to-transparent opacity-70" />
              
              {/* Scanline */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline" />

              {/* Floating Inspection Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-1.5 font-mono text-[10px]">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-cyan-400/30 text-cyan-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1.5 animate-pulse" />
                  365nm UV FLUORESCENCE ACTIVE
                </span>
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-emerald-400/30 text-emerald-300 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  ICAO 9303 MRZ CHECKSUM 7-3-1 VALID
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-white/10 font-mono text-xs">
                <div>
                  <div className="text-slate-400 text-[10px]">DOCUMENT IDENTIFIER</div>
                  <div className="text-slate-200 font-semibold">GBR PASSPORT 2024 (SERIES C)</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-[10px]">RFID NFC CHIP</div>
                  <div className="text-emerald-400 font-semibold">AUTHENTICATED</div>
                </div>
              </div>
            </div>
          ) : activeTelemetryTab === 'BIOMETRICS' ? (
            <div className="relative w-full h-full">
              <Image
                src="/assets/biometric_vector_mesh.jpg"
                alt="3D Biometric Vector Mesh Telemetry"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-transparent to-transparent opacity-60" />

              {/* Scanline */}
              <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-scanline" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-1.5 font-mono text-[10px]">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-indigo-400/30 text-indigo-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-1.5 animate-pulse" />
                  468-POINT 3D FACIAL LANDMARKS
                </span>
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-emerald-400/30 text-emerald-300 flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  ISO 30107-3 LEVEL 2 PAD: PASSED
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-white/10 font-mono text-xs">
                <div>
                  <div className="text-slate-400 text-[10px]">COSINE DISTANCE</div>
                  <div className="text-emerald-400 font-semibold">0.082 (THRESHOLD: &lt;0.15)</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-[10px]">SPOOF PROBABILITY</div>
                  <div className="text-emerald-400 font-semibold">&lt; 0.02% [PASS]</div>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              <Image
                src="/assets/video_kyc_room.jpg"
                alt="Encrypted Human Video KYC Compliance Officer"
                fill
                className="object-cover object-center"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-transparent to-transparent opacity-60" />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-1.5 font-mono text-[10px]">
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-purple-400/30 text-purple-300 flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-1.5 animate-pulse" />
                  WebRTC DTLS-SRTP 256-BIT ENCRYPTED
                </span>
                <span className="px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-cyan-400/30 text-cyan-300 flex items-center">
                  <Video className="w-3 h-3 mr-1" />
                  BAFIN CERTIFIED AGENT: #AG-4190
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-slate-950/90 backdrop-blur-md p-3 rounded-lg border border-white/10 font-mono text-xs">
                <div>
                  <div className="text-slate-400 text-[10px]">CALL DURATION & LATENCY</div>
                  <div className="text-slate-200 font-semibold">02:41 • 24ms RTT</div>
                </div>
                <div className="text-right">
                  <div className="text-slate-400 text-[10px]">AUDIT VAULT LOGGING</div>
                  <div className="text-emerald-400 font-semibold">WORM IMMUTABLE</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right: Real-Time Verification Telemetry & Biometric Verdict (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400 flex items-center">
                <Activity className="w-3.5 h-3.5 mr-1.5 text-cyan-400 animate-pulse" />
                ACTIVE ENGINE VERDICT
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                P95: 1.14s
              </span>
            </div>

            {/* Score Ring / Bar */}
            <div className="p-3 rounded-lg bg-slate-950 border border-white/5 space-y-2">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-slate-300">Biometric Match Confidence</span>
                <span className="text-emerald-400 font-bold">99.8%</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[99.8%]" />
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="space-y-2 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                  ICAO 9303 Doc Forensics
                </span>
                <span className="text-emerald-400 font-semibold">GENUINE</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                  ISO 30107-3 Liveness PAD
                </span>
                <span className="text-emerald-400 font-semibold">PASS (0.00% BPAR)</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                  Deepfake & Virtual Cam Filter
                </span>
                <span className="text-emerald-400 font-semibold">BLOCKED</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400 flex items-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 mr-1.5 shrink-0" />
                  OFAC & PEP Watchlist Check
                </span>
                <span className="text-emerald-400 font-semibold">CLEAN</span>
              </div>
            </div>
          </div>

          {/* Quick Action Navigation */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <Link
              href="/solutions"
              className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-xs font-semibold text-slate-200 transition-colors flex items-center justify-between group"
            >
              <span>Explore 6 Pillars</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/developers"
              className="px-3.5 py-2.5 rounded-xl bg-indigo-950/40 hover:bg-indigo-900/50 border border-indigo-500/20 text-xs font-semibold text-indigo-200 transition-colors flex items-center justify-between group"
            >
              <span>API & Webhooks</span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
