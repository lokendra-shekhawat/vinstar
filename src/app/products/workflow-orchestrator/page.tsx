'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  GitFork,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

export default function WorkflowOrchestratorPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-200 bg-purple-50 text-xs font-semibold text-purple-700">
                <GitFork className="w-3.5 h-3.5 text-purple-600" />
                <span>No-Code Workflow Builder</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Build Verification Workflows Without Complex Code
              </h1>

              <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Every business and jurisdiction has distinct risk profiles. Configure dynamic routing, biometric thresholds, and human review escalations in an intuitive visual builder.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request Custom Workflow Demo</span>
                </Link>
                <Link
                  href="/developers"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                >
                  <span>Explore Webhooks &amp; Rules</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* VISUAL PIPELINE DISPLAY */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                DRAG-AND-DROP RULES
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                How Identity Orchestration Operates
              </h2>
              <p className="text-slate-600 text-sm">
                Route low-risk users through automated sub-second checks while reserving human video KYC for high-risk thresholds.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-6">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100 font-mono text-slate-600">
                <span>WORKFLOW: fintech_tier1_onboarding</span>
                <span className="text-emerald-600 font-bold">ACTIVE IN PRODUCTION</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs font-mono">
                <div className="p-4 rounded-xl bg-indigo-50/60 border border-indigo-200 text-indigo-900">
                  <span className="font-bold block text-indigo-950 mb-1">1. Capture</span>
                  <span>Document OCR + Checksums</span>
                </div>
                <div className="p-4 rounded-xl bg-cyan-50/60 border border-cyan-200 text-cyan-900">
                  <span className="font-bold block text-cyan-950 mb-1">2. Biometrics</span>
                  <span>1:1 Face Match (&ge; 0.85 Conf.)</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-amber-900">
                  <span className="font-bold block text-amber-950 mb-1">3. Actions</span>
                  <span>3 Randomized Challenges</span>
                </div>
                <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 text-purple-900">
                  <span className="font-bold block text-purple-950 mb-1">4. AML Check</span>
                  <span>Global Sanctions &amp; PEP</span>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/60 border border-emerald-200 text-emerald-900">
                  <span className="font-bold block text-emerald-950 mb-1">5. Decision</span>
                  <span>Pass or Video KYC Fallback</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
                <p className="font-bold text-slate-900">Rule Logic Branching:</p>
                <p className="text-emerald-700">&bull; IF Risk Score &le; 40 AND Document Authentic ➔ AUTO-APPROVE (Pass Rate: ~89%)</p>
                <p className="text-amber-700">&bull; IF Risk Score &gt; 70 OR Borderline Face Match ➔ ESCALATE TO LIVE VIDEO KYC</p>
                <p className="text-rose-700">&bull; IF Presentation Attack Detected OR Tampered Expiry ➔ AUTO-REJECT</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200 bg-slate-50 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Configure Your First Identity Journey</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Book a technical walkthrough with our solutions team to model your custom risk policies and verification fallback routing.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              <span>Schedule Workflow Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
