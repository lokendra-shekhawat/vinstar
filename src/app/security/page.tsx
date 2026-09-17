'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  Server,
  Globe,
  Key,
  Eye,
  FileCheck2,
  Radio,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
            <Lock className="w-3.5 h-3.5 text-indigo-600" />
            <span>Security &amp; Compliance Center</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Security Built Into Every Millisecond
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Designed for high-trust financial institutions, neo-banks, and global enterprises. We protect sensitive government credentials and biometrics with zero-knowledge encryption and ISO/IEC 30107-3 certified defenses.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Zero-Knowledge Biometrics</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Facial embeddings are converted into irreversible cryptographic vector representations. Raw facial images can be ephemeral or stored in private customer-managed HSM vaults.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">ISO/IEC 30107-3 Level 2 PAD</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Certified Presentation Attack Detection (PAD) tested against 3D silicone masks, 4K curved OLED replay screens, paper prints, and real-time AI deepfake face swaps.
            </p>
          </div>

          <div className="p-7 rounded-2xl border border-slate-200 bg-white space-y-3 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900">GDPR &amp; Sovereign Storage</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Regional multi-tenant data residency (EU, US, APAC, Middle East). Configurable retention schedules (e.g. 30, 90, or 365 days) with automated right-to-be-forgotten purges.
            </p>
          </div>
        </div>

        {/* Security Architecture Flow */}
        <div className="p-8 sm:p-12 rounded-2xl border border-slate-200 bg-white space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="space-y-2">
              <h2 className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-widest">
                Defense-in-Depth Layering
              </h2>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                The Vinstar Data Protection Lifecycle
              </h3>
              <p className="text-xs text-slate-500 max-w-xl">
                Every applicant verification is isolated within cryptographically verified enclaves from camera capture to permanent audit compliance.
              </p>
            </div>
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0 bg-white">
              <Image
                src="/assets/vinstar_logo.jpg"
                alt="Vinstar Identity & Security Emblem"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-indigo-600 font-bold">1. Ingestion</span>
              <p className="text-slate-600 font-sans">TLS 1.3 strictly enforced with Perfect Forward Secrecy (PFS).</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-cyan-600 font-bold">2. Anti-Injection</span>
              <p className="text-slate-600 font-sans">Hardware camera integrity checks &amp; dynamic action challenges.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-emerald-600 font-bold">3. Storage</span>
              <p className="text-slate-600 font-sans">AES-256-GCM private object storage with signed short-lived URLs.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-purple-600 font-bold">4. Audit &amp; Purge</span>
              <p className="text-slate-600 font-sans">Cryptographic audit log hashing with automated TTL deletion.</p>
            </div>
          </div>
        </div>

        {/* Action Banner */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="text-xl font-bold text-slate-900">Need our SOC 2 Type II Report or Security Whitepaper?</h3>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
            >
              Request Security Whitepaper
            </Link>
            <Link
              href="/developers"
              className="px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
            >
              Developer Sandbox
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
