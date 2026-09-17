'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  ScanFace,
  CheckCircle2,
  Users,
  ShieldCheck,
  Sliders,
  ArrowRight,
} from 'lucide-react';

export default function FaceBiometricsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-200 bg-cyan-50 text-xs font-semibold text-cyan-700">
                  <ScanFace className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Biometric Face Matching</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Instant 1:1 Face Match &amp; Liveness
                </h1>

                <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                  Confirm in milliseconds that the selfie matches the photograph on the official ID card. Deep neural models eliminate identity theft, impersonation, and synthetic fraud.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Request Face Match Demo</span>
                  </Link>
                  <Link
                    href="/developers"
                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <span>Developer Guide</span>
                  </Link>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/assets/hero_biometric_platform.jpg"
                  alt="Biometric Facial Mesh Scan"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                BIOMETRIC ENGINE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Engineered for 99.9% Accuracy Across All Demographics
              </h2>
              <p className="text-slate-600 text-sm">
                Benchmarked against NIST standards to eliminate demographic bias and ensure sub-second matching.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
                  <ScanFace className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">1:1 Biometric Face Match</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Compares the photo extracted from the passport or national ID with the live selfie. Returns a normalized similarity score (0-100%) in under 200 milliseconds.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">1:N Duplicate Search</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Searches live face vectors against your existing user database or internal blocklists to catch bad actors attempting to open duplicate accounts under different names.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Real-Time Quality Feedback</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Checks lighting, head angles, blur, and glare on device before uploading frames, ensuring high first-time pass rates for genuine applicants.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center font-mono">
              <div>
                <p className="text-3xl font-extrabold text-indigo-600">&lt; 200ms</p>
                <p className="text-xs text-slate-500 font-sans mt-1">Vector Matching Latency</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-slate-900">99.87%</p>
                <p className="text-xs text-slate-500 font-sans mt-1">True Acceptance Rate (TAR)</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-emerald-600">&lt; 0.01%</p>
                <p className="text-xs text-slate-500 font-sans mt-1">False Match Rate (FMR)</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-cyan-600">Zero-Knowledge</p>
                <p className="text-xs text-slate-500 font-sans mt-1">Encrypted Biometric Index</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200 bg-slate-50 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Deploy 1:1 Biometric Matching</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Schedule a consultation with our biometric compliance specialists to review accuracy benchmarks and test integration.
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
