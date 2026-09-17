'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export default function PricingPage() {
  const [volume, setVolume] = useState(25000);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
            <Zap className="w-3.5 h-3.5 text-indigo-600" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Predictable Pricing That Scales With You
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            No hidden setup fees. Pay only for successful customer checks with automatic volume discounts as you grow.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Starter Tier */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase">Starter</span>
              <h3 className="text-xl font-bold text-slate-900">Startup FinTech</h3>
              <p className="text-xs text-slate-600">Essential automated checks for growing products.</p>
              <div className="pt-2">
                <span className="text-4xl font-extrabold font-mono text-slate-900">$0.95</span>
                <span className="text-xs text-slate-500 font-mono"> / check</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 14,000+ Document OCR &amp; MRZ</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 1:1 Facial Biometric Match</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> ISO 30107-3 Passive Liveness</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Mobile &amp; Web Component SDKs</li>
              </ul>
            </div>
            <Link
              href="/contact?plan=starter"
              className="w-full py-3 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm text-center transition-colors"
            >
              Get Started with Starter
            </Link>
          </div>

          {/* Growth Tier (Recommended) */}
          <div className="p-8 rounded-2xl border-2 border-indigo-600 bg-white space-y-6 flex flex-col justify-between shadow-md relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase">Growth</span>
              <h3 className="text-xl font-bold text-slate-900">Scaling Challenger Banks</h3>
              <p className="text-xs text-slate-600">Advanced anti-spoofing and AML compliance.</p>
              <div className="pt-2">
                <span className="text-4xl font-extrabold font-mono text-indigo-600">$1.45</span>
                <span className="text-xs text-slate-500 font-mono"> / check</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Everything in Starter</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Dynamic Action Challenge Engine</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Global AML &amp; PEP Screening</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Device &amp; Virtual Camera Defense</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Webhook HMAC Signed Dispatch</li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow text-center transition-colors"
            >
              Get Started with Growth
            </Link>
          </div>

          {/* Enterprise Tier */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white space-y-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold text-purple-600 uppercase">Enterprise</span>
              <h3 className="text-xl font-bold text-slate-900">Global Regulated Banks</h3>
              <p className="text-xs text-slate-600">High-assurance Video KYC and custom SLAs.</p>
              <div className="pt-2">
                <span className="text-4xl font-extrabold font-mono text-slate-900">Custom</span>
                <span className="text-xs text-slate-500 font-mono"> / volume tiered</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-600 pt-4 border-t border-slate-100">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Everything in Growth</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Dedicated Live Video KYC Escalation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Sovereign Cloud Vaults (7-Year Audit)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> 99.99% Uptime SLA Guarantee</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Custom Orchestration Workflows</li>
              </ul>
            </div>
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm text-center transition-colors"
            >
              Contact Enterprise Sales
            </Link>
          </div>
        </div>

        {/* VOLUME CALCULATOR SLIDER */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-6">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h3 className="text-2xl font-extrabold text-slate-900">Interactive Volume Cost Estimator</h3>
            <p className="text-xs text-slate-600">Estimate your monthly identity verification cost based on expected user volume.</p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className="text-slate-700">Monthly Verification Volume</span>
              <span className="font-mono text-indigo-600 text-lg">
                {volume.toLocaleString('en-US')} checks/mo
              </span>
            </div>
            <input
              type="range"
              min={1000}
              max={200000}
              step={1000}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs text-slate-500">Estimated Cost/Check</p>
                <p className="text-xl font-bold text-slate-900 font-mono mt-1">
                  ${volume > 50000 ? '0.85' : volume > 20000 ? '1.15' : '1.45'}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs text-slate-500">Estimated Monthly Total</p>
                <p className="text-xl font-bold text-indigo-600 font-mono mt-1">
                  ${Math.round(volume * (volume > 50000 ? 0.85 : volume > 20000 ? 1.15 : 1.45)).toLocaleString('en-US')}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                <p className="text-xs text-slate-500">Estimated Fraud Blocked</p>
                <p className="text-xl font-bold text-emerald-600 font-mono mt-1">
                  ${Math.round(volume * 4.2).toLocaleString('en-US')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
