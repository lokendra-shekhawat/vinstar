'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  Activity,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Radio,
  ArrowRight,
  Camera,
  RotateCcw,
  Smile,
  Eye,
} from 'lucide-react';

export default function VideoActionVerificationPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-amber-200 bg-amber-50 text-xs font-semibold text-amber-700">
                <Activity className="w-3.5 h-3.5 text-amber-600" />
                <span>Anti-Injection Action Challenges</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Verify Real-Time Actions That Defeat Video Injection
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Pre-recorded videos and virtual camera injections cannot respond to real-time, unpredictable challenges. Vinstar dynamically issues interactive micro-prompts with millisecond server validation.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request Action Challenge Demo</span>
                </Link>
                <Link
                  href="/developers"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                >
                  <span>Explore Sequencer API</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* HOW DYNAMIC CHALLENGES WORK */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-amber-600 uppercase tracking-wider">
                ZERO PREDICTABILITY
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Why Video Injection Attacks Fail Against Vinstar
              </h2>
              <p className="text-slate-600 text-sm">
                In standard selfie checks, fraudsters replay hijacked clips. With Vinstar, every session generates a unique, cryptographically timed challenge sequence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">1. Head Rotation (Left/Right)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluates smooth rotation up to 35 degrees. Measures ear occlusion and 3D nose projection to verify true depth.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
                  <Smile className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">2. Natural Smile Expression</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Analyzes facial muscle movement and cheek elevation. Eliminates static face masks and uncooperative subjects.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <Eye className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">3. Spontaneous Blink Challenge</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Measures eyelid velocity closure curves (100-150ms). Static AI deepfake generators struggle with realistic eye blinking dynamics.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Camera className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">4. Physical Document Tilt 45°</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Asks user to tilt their physical document toward the camera, verifying real-time optical reflections on holograms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SEQUENCE VISUALIZER */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6">
            <h3 className="text-2xl font-extrabold text-slate-900 text-center">
              Sample Dynamic Session Execution
            </h3>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs space-y-3 text-slate-800">
              <div className="flex justify-between text-slate-500 border-b border-slate-200 pb-2">
                <span>SESSION #VR-829182 // DYNAMIC CHALLENGE SEED: 0x9f82b</span>
                <span className="text-emerald-600 font-bold">STATUS: VERIFIED</span>
              </div>
              <p className="text-slate-700">[12:15:02] Action 1 Issued: &ldquo;Turn head 30° LEFT&rdquo; ➔ Passed in 0.84s (Yaw: -32.1°)</p>
              <p className="text-slate-700">[12:15:04] Action 2 Issued: &ldquo;Blink twice in viewfinder&rdquo; ➔ Passed in 1.12s (2 Blinks recorded)</p>
              <p className="text-slate-700">[12:15:06] Action 3 Issued: &ldquo;Smile naturally&rdquo; ➔ Passed in 0.90s (Expression confidence: 98.4%)</p>
              <p className="text-slate-700">[12:15:08] Action 4 Issued: &ldquo;Tilt physical ID toward light&rdquo; ➔ Passed in 1.45s (Hologram shift confirmed)</p>
              <div className="pt-2 border-t border-slate-200 text-emerald-700 font-bold">
                &gt;&gt; Real-time timestamp coherence confirmed. Virtual camera injection risk: 0.00%
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200 bg-slate-50 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Experience Dynamic Action Verification</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Schedule a technical walkthrough to explore our randomized challenge sequencer and anti-injection defense against synthetic media.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
