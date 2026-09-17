'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Sun,
  Zap,
  Radio,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Eye,
  Crosshair,
  Sliders,
  Layers,
  FileCheck2,
} from 'lucide-react';

type LightMode = 'WHITE_LIGHT' | 'UV_365NM' | 'IR_870NM' | 'HOLOGRAM';

interface Specimen {
  id: string;
  name: string;
  country: string;
  docType: string;
  icaoType: string;
  chipStatus: string;
  whiteLightImg: string;
  uvLightImg: string;
}

export default function InteractiveSpectralInspector() {
  const [activeMode, setActiveMode] = useState<LightMode>('UV_365NM');
  const [loupeActive, setLoupeActive] = useState<boolean>(false);
  const [loupePosition, setLoupePosition] = useState({ x: 50, y: 50 });

  const modes: {
    id: LightMode;
    label: string;
    wavelength: string;
    icon: React.ComponentType<{ className?: string }>;
    accentColor: string;
    description: string;
  }[] = [
    {
      id: 'WHITE_LIGHT',
      label: 'Visible White Light',
      wavelength: '400 – 700 nm',
      icon: Sun,
      accentColor: 'border-amber-400/40 text-amber-300 bg-amber-500/10',
      description:
        'Standard optical inspection for full-color typography, portrait alignment, and ICAO 9303 Machine Readable Zone (MRZ) OCR character extraction.',
    },
    {
      id: 'UV_365NM',
      label: 'Ultraviolet Luminescence',
      wavelength: '365 nm (UV-A)',
      icon: Zap,
      accentColor: 'border-emerald-400/50 text-emerald-300 bg-emerald-500/10',
      description:
        'Exposes synthetic paper vs. wood-pulp security fibers, rainbow fluorescent guilloche micro-threads, and multi-color reactive UV ghost portrait.',
    },
    {
      id: 'IR_870NM',
      label: 'Infrared Ink Absorption',
      wavelength: '870 nm (IR-B)',
      icon: Radio,
      accentColor: 'border-cyan-400/50 text-cyan-300 bg-cyan-500/10',
      description:
        'Analyzes metameric ink pairs: authentic security inks disappear (IR dropouts) while carbon-black inks remain visible, instantly catching altered dates or forged names.',
    },
    {
      id: 'HOLOGRAM',
      label: 'Diffractive OVD Hologram',
      wavelength: 'Coaxial 45°',
      icon: Sparkles,
      accentColor: 'border-purple-400/50 text-purple-300 bg-purple-500/10',
      description:
        'Simulates multi-angle optical refraction across Diffractive Optically Variable Graphics (DOVG) and metallic kinegrams to eliminate flat print color copies.',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setLoupePosition({ x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) });
  };

  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0B0F19]/90 backdrop-blur-2xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid pointer-events-none opacity-30" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              REGULA FORENSIC BENCHMARK
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-mono text-emerald-400 bg-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1.5" />
              OPTICAL COMPARATOR ONLINE
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1.5">
            Multi-Spectrum Document Forensics Engine
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Simulate laboratory-grade multi-spectral lighting inspection. Toggle wavelengths to expose hidden anti-counterfeiting security features across ICAO 9303 documents.
          </p>
        </div>

        {/* Specimen Telemetry Pill */}
        <div className="flex items-center space-x-3 bg-slate-900/80 px-4 py-2 rounded-xl border border-white/5 text-right font-mono text-xs">
          <div>
            <div className="text-slate-400 text-[10px] uppercase">Specimen Profile</div>
            <div className="text-slate-100 font-semibold">GBR Series C • ePassport</div>
          </div>
          <div className="h-6 w-px bg-white/10" />
          <div>
            <div className="text-slate-400 text-[10px] uppercase">RFID Cryptogram</div>
            <div className="text-emerald-400 font-semibold">BAP/EAC Valid</div>
          </div>
        </div>
      </div>

      {/* Spectral Mode Switcher Tabs */}
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 my-6">
        {modes.map((m) => {
          const Icon = m.icon;
          const isSelected = activeMode === m.id;
          return (
            <button
              key={m.id}
              onClick={() => setActiveMode(m.id)}
              className={`text-left p-3 rounded-xl border transition-all duration-200 relative overflow-hidden group ${
                isSelected
                  ? `${m.accentColor} shadow-lg shadow-black/40`
                  : 'border-white/5 bg-slate-900/40 text-slate-400 hover:border-white/15 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <Icon className={`w-4 h-4 ${isSelected ? 'text-current' : 'text-slate-500 group-hover:text-slate-300'}`} />
                <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-black/40 border border-white/5">
                  {m.wavelength}
                </span>
              </div>
              <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-100">
                {m.label}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interactive Optical Comparator Stage */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: Interactive Document Viewport (8 Cols) */}
        <div className="lg:col-span-8 space-y-3">
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setLoupeActive(true)}
            onMouseLeave={() => setLoupeActive(false)}
            className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-[16/10] shadow-2xl cursor-crosshair select-none group"
          >
            {/* Visual Image Based on Mode */}
            {activeMode === 'UV_365NM' ? (
              <div className="relative w-full h-full">
                <Image
                  src="/assets/spectral_uv_passport_inspection.jpg"
                  alt="Passport specimen under 365nm Ultraviolet Light showing glowing security fibers and UV ghost portrait"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* UV Luminescence Overlay Glow */}
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-screen pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05080E] via-transparent to-transparent opacity-60" />
              </div>
            ) : activeMode === 'IR_870NM' ? (
              <div className="relative w-full h-full filter grayscale contrast-125 brightness-90">
                <Image
                  src="/assets/sample_passport_mrz.jpg"
                  alt="Passport specimen under 870nm Infrared Light showing metameric ink dropouts"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Infrared Dropout Mask simulation */}
                <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply pointer-events-none" />
                <div className="absolute top-1/4 left-1/4 px-3 py-1 bg-cyan-950/80 border border-cyan-400/40 rounded text-[11px] font-mono text-cyan-300">
                  [IR DROPOUT: Secondary Ink Absorbed — Zero Retouch Detected]
                </div>
              </div>
            ) : activeMode === 'HOLOGRAM' ? (
              <div className="relative w-full h-full">
                <Image
                  src="/assets/sample_passport_mrz.jpg"
                  alt="Passport specimen showing diffractive optical variable hologram"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* Dynamic holographic rainbow shimmer gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 via-cyan-400/20 to-amber-400/20 mix-blend-color-dodge pointer-events-none animate-pulse" />
                <div className="absolute bottom-10 left-10 px-3 py-1 bg-purple-950/80 border border-purple-400/40 rounded text-[11px] font-mono text-purple-300">
                  [DOVG KINEGRAM: Continuous 3D Diffraction Verified]
                </div>
              </div>
            ) : (
              /* WHITE_LIGHT */
              <div className="relative w-full h-full">
                <Image
                  src="/assets/sample_passport_mrz.jpg"
                  alt="Passport specimen under normal Visible White Light"
                  fill
                  className="object-cover object-center"
                  priority
                />
                {/* OCR Bounding Boxes */}
                <div className="absolute top-[28%] left-[34%] w-[38%] h-[26%] border border-cyan-400/60 bg-cyan-400/5 rounded pointer-events-none">
                  <span className="absolute -top-4 left-0 text-[9px] font-mono bg-cyan-950 text-cyan-300 px-1 border border-cyan-500/30">
                    VIZ BIODATA ZONE [OCR CONFIDENCE: 99.8%]
                  </span>
                </div>
                <div className="absolute bottom-[8%] left-[10%] right-[10%] h-[18%] border border-indigo-400/60 bg-indigo-400/5 rounded pointer-events-none">
                  <span className="absolute -top-4 left-0 text-[9px] font-mono bg-indigo-950 text-indigo-300 px-1 border border-indigo-500/30">
                    ICAO 9303 MRZ CHECKSUMS [MODULO 7-3-1 PASS]
                  </span>
                </div>
              </div>
            )}

            {/* Scanline Motion Graphic */}
            <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scanline opacity-75 pointer-events-none shadow-[0_0_15px_#06b6d4]" />

            {/* Magnifier Reticle Loupe on Mouse Hover */}
            {loupeActive && (
              <div
                className="absolute pointer-events-none w-28 h-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] backdrop-brightness-125 bg-cyan-950/30 overflow-hidden flex items-center justify-center transition-all duration-75"
                style={{ left: `${loupePosition.x}%`, top: `${loupePosition.y}%` }}
              >
                <Crosshair className="w-6 h-6 text-cyan-300/60" />
                <div className="absolute bottom-1 font-mono text-[8px] text-cyan-200 bg-black/60 px-1 rounded">
                  8x ZOOM
                </div>
              </div>
            )}

            {/* Bottom Status Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-slate-950/90 border-t border-white/10 px-4 py-2 flex items-center justify-between text-[11px] font-mono text-slate-400 backdrop-blur-md">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-200">
                  {modes.find((m) => m.id === activeMode)?.label}
                </span>
                <span className="text-slate-500">
                  ({modes.find((m) => m.id === activeMode)?.wavelength})
                </span>
              </div>
              <div className="hidden sm:flex items-center space-x-4 text-[10px]">
                <span>RESOLUTION: 600 DPI</span>
                <span>SPECTRAL BAND: UV/VIS/IR</span>
                <span className="text-cyan-400">HOVER TO MAGNIFY</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-400 italic">
            {modes.find((m) => m.id === activeMode)?.description}
          </p>
        </div>

        {/* Right: Forensic Verification Telemetry Feed (4 Cols) */}
        <div className="lg:col-span-4 space-y-3.5">
          <div className="rounded-xl border border-white/10 bg-slate-900/60 p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-xs font-mono font-semibold text-slate-300 flex items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mr-1.5" />
                AUTOMATED FORENSIC FLAGS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">
                100% AUTHENTIC
              </span>
            </div>

            {/* Telemetry rows */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-start justify-between">
                <div>
                  <div className="text-slate-300 font-medium">Fluorescent Fibers</div>
                  <div className="text-[10px] text-slate-500">365nm Multi-Color Luminescence</div>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  PASS
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-start justify-between">
                <div>
                  <div className="text-slate-300 font-medium">Metameric IR Ink Pair</div>
                  <div className="text-[10px] text-slate-500">870nm Drop-out Differential</div>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  MATCH
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-start justify-between">
                <div>
                  <div className="text-slate-300 font-medium">UV Ghost Portrait</div>
                  <div className="text-[10px] text-slate-500">Facial Coincidence Ratio: 99.4%</div>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  0.002 ERR
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-start justify-between">
                <div>
                  <div className="text-slate-300 font-medium">ICAO Doc 9303 Checksums</div>
                  <div className="text-[10px] text-slate-500">Passport No., DOB, Expiry Modulo</div>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  VALID
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950/70 border border-white/5 flex items-start justify-between">
                <div>
                  <div className="text-slate-300 font-medium">Holographic DOVG Kinematics</div>
                  <div className="text-[10px] text-slate-500">Optical Diffraction Continuous</div>
                </div>
                <span className="text-emerald-400 text-[11px] font-semibold flex items-center">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          {/* Forensic Device Metadata Callout */}
          <div className="p-3.5 rounded-xl border border-indigo-500/20 bg-indigo-950/20 text-slate-300 text-xs space-y-1">
            <div className="font-semibold text-indigo-300 flex items-center">
              <Eye className="w-3.5 h-3.5 mr-1 text-indigo-400" />
              Regula Document Template Database
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Cross-checked against 14,000+ travel documents from 248 countries & territories. Any font anomaly or ink variance triggers automated step-up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
