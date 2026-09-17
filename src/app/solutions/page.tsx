'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  Building2,
  CreditCard,
  Coins,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
            <Building2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>Tailored Industry Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Identity Solutions Engineered for Your Business
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From frictionless FinTech onboarding to high-assurance banking Video KYC and crypto Travel Rule compliance, Vinstar orchestrates identity verification tailored to your exact regulatory mandate.
          </p>
        </div>

        {/* SOLUTIONS DETAILED CARDS */}
        <div className="space-y-8">
          {/* Banking & Neobanks */}
          <div id="banking" className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Banking &amp; Digital Neobanks</h3>
                  <p className="text-xs text-slate-500">Customer Due Diligence (CDD) &bull; AML/CFT &bull; High-Value Transfers</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-700 flex items-center gap-1"
              >
                <span>Consult on Banking Flow</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Satisfy BaFin, FCA, and FINRA standards with seamless ePassport RFID chip verification, passive liveness, and automated fallback to human Video KYC sessions for flagged or high-net-worth accounts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">99.4% Pass Rate</p>
                <p className="text-slate-600">Frictionless automated onboarding for 9 out of 10 genuine applicants.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">7-Year Audit Vault</p>
                <p className="text-slate-600">Encrypted storage for video KYC recordings and cryptographic evidence.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">Global Watchlists</p>
                <p className="text-slate-600">Real-time sanctions, PEP, and adverse media screening built-in.</p>
              </div>
            </div>
          </div>

          {/* FinTech & Payments */}
          <div id="fintech" className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">FinTech &amp; Payment Processors</h3>
                  <p className="text-xs text-slate-500">Sub-Second Conversion &bull; Chargeback Prevention &bull; Synthetic ID Defense</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-cyan-600 hover:text-cyan-700 flex items-center gap-1"
              >
                <span>Consult on FinTech Flow</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Accelerate user conversion with lightning-fast sub-2 second document extraction and passive liveness checks, stopping synthetic identity chargebacks and credit card mule rings in their tracks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">&lt; 1.8s P95 Speed</p>
                <p className="text-slate-600">Eliminate onboarding drop-off with lightning-fast mobile capture.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">Device Fingerprinting</p>
                <p className="text-slate-600">Detect emulator environments, proxy VPNs, and camera spoofers.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1">
                <p className="font-bold text-slate-900">1:N Deduplication</p>
                <p className="text-slate-600">Catch repeat fraudsters attempting multiple accounts under stolen names.</p>
              </div>
            </div>
          </div>

          {/* Crypto & Web3 */}
          <div id="crypto" className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                  <Coins className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Crypto Exchanges &amp; Web3</h3>
                  <p className="text-xs text-slate-500">FATF Travel Rule &bull; Tiered KYC &bull; High-Volume Trading Limits</p>
                </div>
              </div>
              <Link
                href="/contact"
                className="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1"
              >
                <span>Consult on Crypto Flow</span> <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Deploy multi-tier KYC workflows: instant automated passport scan for tier-1 trading, and dynamic action challenges plus Video KYC for high-volume whale withdrawals and institutional accounts.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-8">
          <h3 className="text-2xl font-bold text-slate-900">Ready to streamline your onboarding funnel?</h3>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
            >
              Request Consultation
            </Link>
            <Link
              href="/developers"
              className="px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
            >
              Explore Developer API
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
