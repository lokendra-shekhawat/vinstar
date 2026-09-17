'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Radio,
  Scan,
  ArrowRight,
} from 'lucide-react';

export default function DocumentVerificationPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
                  <FileCheck2 className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Smart Document Verification</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Verify Passports &amp; IDs from 200+ Countries
                </h1>

                <p className="text-base text-slate-600 leading-relaxed max-w-xl">
                  Inspect passports, national IDs, driving licenses, and residence permits with instant automated precision. Combines OCR, ICAO 9303 checksums, 2D barcode decoding, and forgery detection.
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Request Document Check Demo</span>
                  </Link>
                  <Link
                    href="/developers"
                    className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <span>View API Documentation</span>
                  </Link>
                </div>
              </div>

              {/* Visual Specimen */}
              <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <Image
                  src="/assets/sample_passport_mrz.jpg"
                  alt="ePassport Specimen"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-white">
                  <p className="text-xs font-mono font-bold text-cyan-300">ICAO Doc 9303 Machine Readable Zone</p>
                  <p className="text-[11px] font-mono text-slate-200">P&lt;UTO&lt;&lt;VANCE&lt;&lt;ELEANOR&lt;JANE&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITIES GRID */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                COMPREHENSIVE CHECKS
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900">
                Multi-Layered Document Authentication
              </h2>
              <p className="text-slate-600 text-sm">
                Vinstar analyzes physical, visual, and electronic security layers to catch even the most sophisticated forgeries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                  <Scan className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">ICAO 9303 MRZ Parsing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extracts and computes cross-field mathematical checksums across passport 2-line and ID card 3-line formats. Mismatched digits trigger immediate fraud alerts.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Contactless RFID / NFC Chip</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Extracts cryptographically signed portrait and biometric data directly from ePassport microchips, providing 100% tamper immunity.
                </p>
              </div>

              <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Tamper &amp; Alteration Detection</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluates microprinting, laser-engraved typography, and security patterns to detect modified dates, replaced photos, or digital printouts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase">
                Cross-Verification Engine
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                How We Cross-Check Every Data Element
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-indigo-600 font-bold">1. Visual Zone</span>
                <p className="text-slate-600 font-sans">Full Name, Date of Birth, Expiration Date extracted via OCR.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-cyan-600 font-bold">2. MRZ Zone</span>
                <p className="text-slate-600 font-sans">Checksums calculated and matched against visual zone.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-emerald-600 font-bold">3. 2D Barcode</span>
                <p className="text-slate-600 font-sans">PDF417 payload decoded and verified for zero discrepancies.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-purple-600 font-bold">4. Tamper Check</span>
                <p className="text-slate-600 font-sans">Font spacing, photo boundary, and microprint authenticity scored.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 border-t border-slate-200 bg-slate-50 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Experience Automated Document Verification</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Schedule a consultation to review document extraction accuracy, template coverage, and compliance standards.
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
