'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  Video,
  CheckCircle2,
  ShieldCheck,
  Lock,
  UserCheck,
  Server,
  ArrowRight,
} from 'lucide-react';

export default function VideoCallVerificationPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-200 bg-rose-50 text-xs font-semibold text-rose-700">
                  <Video className="w-3.5 h-3.5 text-rose-600" />
                  <span>High-Assurance Live Video KYC</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  When Extra Security Is Needed, Connect with a Live Agent
                </h1>

                <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                  For high-value financial onboarding, large loans, or jurisdictions requiring human verification (BaFin, FCA, FINRA), Vinstar seamlessly routes applicants into encrypted, recorded live video sessions.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Request Video KYC Demo</span>
                  </Link>
                  <Link
                    href="/security"
                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <span>Security &amp; Compliance</span>
                  </Link>
                </div>
              </div>

              {/* Visual Showcase */}
              <div className="lg:col-span-5 relative aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/assets/video_kyc_room.jpg"
                  alt="Live Video KYC Session"
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
              <span className="text-xs font-mono font-bold text-rose-600 uppercase tracking-wider">
                COMPLIANT ARCHITECTURE
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Human Assurance Meets Intelligent AI Assistance
              </h2>
              <p className="text-slate-600 text-sm">
                Compliance officers are assisted in real-time by automated document telemetry and side-by-side biometric comparators.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 border border-rose-100 flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Agent-Guided Actions</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The agent can prompt the applicant to tilt documents, verify holographic foils under light, and answer security questions in real-time.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Encrypted Sovereign Storage</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  All video calls, audio transcripts, and forensic screenshots are encrypted using AES-256 and stored in compliant regional buckets with up to 10-year retention.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Global Regulatory Compliance</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pre-configured compliance workflows aligned with German BaFin, UK FCA, Singapore MAS, and FATF digital identity guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200 bg-slate-50 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Deploy Compliant Video Identification</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Speak with our financial compliance specialists to explore regulatory compliance for BaFin, FINMA, and MAS jurisdictions.
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
