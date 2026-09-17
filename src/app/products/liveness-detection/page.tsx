'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  Radio,
  CheckCircle2,
  ShieldCheck,
  Eye,
  Camera,
  ArrowRight,
} from 'lucide-react';

export default function LivenessDetectionPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-200 bg-emerald-50 text-xs font-semibold text-emerald-700">
                <Radio className="w-3.5 h-3.5 text-emerald-600" />
                <span>ISO/IEC 30107-3 Certified Liveness</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Prove There Is a Real, Live Human Present
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Neutralize printed photos, screen replays, 3D silicone masks, and AI deepfakes. Vinstar provides certified Presentation Attack Detection (PAD) with effortless 1-second passive verification.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request Liveness Demo</span>
                </Link>
                <Link
                  href="/developers"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                >
                  <span>Explore Liveness SDK</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3 LIVENESS MODES */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                DETECTION MODES
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Three Certified Modes for Every User Journey
              </h2>
              <p className="text-slate-600 text-sm">
                Choose the right balance of speed and security based on your specific transaction risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-emerald-700 uppercase font-bold">Fastest Experience</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Passive Liveness</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  User simply holds steady for one selfie. Our neural networks analyze micro-skin texture, depth reflection, and optical frequency gradients in under 600 milliseconds.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Speed: &lt; 0.6s &bull; Friction: Minimal
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-cyan-700 uppercase font-bold">Recommended</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Passive + Blink Challenge</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The user looks into the lens and blinks naturally. Evaluates genuine eye moisture, eyelid velocity curves, and corneal reflection to eliminate static deepfake face masks.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Speed: &lt; 1.5s &bull; Friction: Very Low
                </div>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-indigo-700 uppercase font-bold">Maximum Security</span>
                  <h4 className="text-lg font-bold text-slate-900 mt-1">Active 3D Head Turn</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Directs user to turn head slightly left or right. Evaluates 3D landmark parallax and geometric pose angles to defeat 2D screens and software injection drivers.
                </p>
                <div className="text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-100">
                  Speed: &lt; 3.0s &bull; Friction: Moderate
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THREAT DEFENSE MATRIX */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6">
            <h3 className="text-2xl font-extrabold text-slate-900 text-center">
              Attacks Blocked by Vinstar Liveness Engine
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <p className="font-bold text-rose-600">Printed Photo Attack</p>
                <p className="text-slate-600">Detects matte/gloss paper reflections, cutout eye holes, and lack of true 3D facial depth.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <p className="font-bold text-amber-600">Screen Replay Attack</p>
                <p className="text-slate-600">Identifies moiré interference fringes and pixel grid refresh rates on tablet/phone displays.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <p className="font-bold text-purple-600">3D Silicone Mask</p>
                <p className="text-slate-600">Analyzes natural facial skin texture, edge boundaries, and micro-pore irregularity.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <p className="font-bold text-cyan-600">AI Deepfake Swap</p>
                <p className="text-slate-600">Flags boundary blending artifacts, synthetic eye gaze anomalies, and temporal jitter.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200 bg-slate-50 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Protect Your Onboarding Against Presentation Attacks</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Schedule an evaluation of our ISO 30107-3 Level 1 &amp; 2 presentation attack detection and spoof prevention reports.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              <span>Request Evaluation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
