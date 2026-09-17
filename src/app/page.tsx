'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import TrustMarquee from '@/components/trust-marquee';
import {
  ShieldCheck,
  FileCheck2,
  ScanFace,
  Video,
  Activity,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Lock,
  Terminal,
  Copy,
  Check,
  Zap,
  Globe,
  Sliders,
  ChevronRight,
} from 'lucide-react';

export default function HomePage() {
  const [codeLang, setCodeLang] = useState<'node' | 'python' | 'curl'>('node');
  const [copiedCode, setCopiedCode] = useState(false);
  const [monthlyVolume, setMonthlyVolume] = useState(25000);

  const copySnippet = () => {
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const codeSnippets = {
    node: `import { Vinstar } from '@vinstar/idv';

const vinstar = new Vinstar({ apiKey: process.env.VINSTAR_API_KEY });

// Create a simple customer verification session
const session = await vinstar.sessions.create({
  customerReference: 'user_10283',
  workflow: 'quick_pass', // Automated Document + Selfie Liveness
  callbackUrl: 'https://api.yourdomain.com/webhooks/kyc'
});

console.log('Verification Link:', session.url);`,
    python: `from vinstar import Vinstar

client = Vinstar(api_key="vin_live_key_998124")

# Create a simple verification session
session = client.sessions.create(
    customer_reference="user_10283",
    workflow="quick_pass",
    callback_url="https://api.yourdomain.com/webhooks/kyc"
)

print(f"Verification Link: {session.url}")`,
    curl: `curl -X POST https://api.vinstar.com/v1/sessions \\
  -H "Authorization: Bearer vin_live_key_998124" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customerReference": "user_10283",
    "workflow": "quick_pass",
    "callbackUrl": "https://api.yourdomain.com/webhooks/kyc"
  }'`,
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. CLEAN, AIRY HERO SECTION                               */}
        {/* ========================================================= */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-gradient-to-b from-white via-[#FAFAFC] to-[#F1F5F9]">
          {/* Subtle background light grid */}
          <div className="absolute inset-0 bg-light-grid pointer-events-none opacity-60" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-100/60 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-5">
              {/* Pill badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50/80 text-xs font-semibold text-indigo-700 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                <span>Simple, Automated Identity Verification</span>
                <span className="w-1 h-1 rounded-full bg-indigo-300" />
                <span className="text-emerald-700 font-medium">Under 2s SLA</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                Verify real customers{' '}
                <span className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-cyan-600 bg-clip-text text-transparent">
                  in seconds.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                Stop fraud and onboard genuine users faster. Automated ID document checks, selfie liveness, and instant approvals built for modern businesses.
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 hover:shadow-lg transition-all group"
                >
                  <ShieldCheck className="w-4 h-4 text-indigo-200" />
                  <span>Get Started Free</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/developers"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
                >
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span>View Documentation</span>
                </Link>
              </div>
            </div>

            {/* Simple Light Visual Card: Live Verification Experience */}
            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-7 shadow-xl shadow-slate-200/50 space-y-5">
                {/* Header telemetry bar */}
                <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-100 gap-2 text-xs font-mono">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-semibold text-slate-800">AUTOMATED ID CHECK</span>
                    <span className="text-slate-300">|</span>
                    <span className="text-slate-500">Session ID: #sess_49810</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                      APPROVED IN 1.2s
                    </span>
                  </div>
                </div>

                {/* 2-Column Simple Preview: Document Check + Face Match */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Left Column: ID Check */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <FileCheck2 className="w-4 h-4 text-indigo-600" />
                        <span>Step 1: ID Document Check</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-100/60 px-2 py-0.5 rounded">
                        GENUINE ✓
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                      <Image
                        src="/assets/sample_passport_mrz.jpg"
                        alt="Sample Passport Document Verification"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 font-mono pt-1">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Document:</span>
                        <span className="font-semibold text-slate-800">UK Passport (Series C)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">MRZ Checksum:</span>
                        <span className="text-emerald-700 font-semibold">Valid (Modulo 7-3-1)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Tamper Check:</span>
                        <span className="text-emerald-700 font-semibold">Zero alterations</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Face & Liveness Match */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50/60 p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <ScanFace className="w-4 h-4 text-cyan-600" />
                        <span>Step 2: Selfie Liveness Match</span>
                      </div>
                      <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-100/60 px-2 py-0.5 rounded">
                        MATCHED ✓
                      </span>
                    </div>

                    <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-slate-200 shadow-sm">
                      <Image
                        src="/assets/biometric_vector_mesh.jpg"
                        alt="3D Biometric Selfie Liveness Match"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 font-mono pt-1">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Face Match:</span>
                        <span className="text-emerald-700 font-semibold">99.8% Confidence</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Liveness:</span>
                        <span className="text-emerald-700 font-semibold">Live Human Present (ISO Level 2)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Spoof Defense:</span>
                        <span className="text-emerald-700 font-semibold">Photos &amp; Screens Blocked</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. LOGO CLOUD & ACCREDITATIONS                            */}
        {/* ========================================================= */}
        <TrustMarquee />

        {/* ========================================================= */}
        {/* 3. HOW IT WORKS IN 3 SIMPLE STEPS                         */}
        {/* ========================================================= */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
              HOW IT WORKS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              A smooth verification experience in 3 simple steps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              No complicated apps to install. Users complete verification on any smartphone or browser in under a minute.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center font-bold text-lg font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                1. Snap an ID Photo
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The user takes a quick photo of their passport, driver’s license, or government ID. Our engine automatically crops, rotates, and reads all details.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center font-bold text-lg font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                2. Quick 2-Second Selfie
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The user looks into their front camera. Passive 3D liveness confirms they are a real human holding the ID, defeating printouts, phone screens, and deepfakes.
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center font-bold text-lg font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                3. Instant Approval
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over 97% of genuine users get approved in under 2 seconds. Your backend receives a signed webhook immediately, so customers can start using your product.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3.5 VINSTAR CROSS-DEVICE PRODUCT SHOWCASE                 */}
        {/* ========================================================= */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                  <span>The Vinstar Experience</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Seamless verification on mobile, tablet, and desktop.
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Provide your customers with a frictionless onboarding journey. With zero app download required, applicants capture their ID and pass biometric liveness in seconds on any modern browser or through our embedded mobile SDK.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>99.8% Accuracy</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Neural biometric match validated against official photo ID chips.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/80 space-y-1.5">
                    <div className="flex items-center gap-2 text-emerald-600 font-semibold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>1.2s Fast SLA</span>
                    </div>
                    <p className="text-xs text-slate-500">
                      Automated decision engine with zero manual review bottlenecks.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                  >
                    <span>Request Vinstar Demo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Product UI Graphic Mockup */}
              <div className="lg:col-span-7">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-2xl shadow-slate-200/70 group bg-slate-50">
                  <Image
                    src="/assets/vinstar_verification_ui.jpg"
                    alt="Vinstar Identity Verification UI on Mobile and Laptop"
                    width={1200}
                    height={750}
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-lg border border-slate-200/80 text-[11px] font-mono font-medium text-slate-700 shadow-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Vinstar IDV Live Verification</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. THE 3 CORE CAPABILITIES (CLEAN 3-CARD GRID)            */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                CORE CAPABILITIES
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Everything you need to prevent fraud
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Three powerful layers working together in a single lightweight platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1: Document Check */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
                    <FileCheck2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Smart Document Check
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Verify government-issued IDs, passports, and driver’s licenses from over 200 countries. Automatically detects font alterations, expired cards, and forged formats.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>14,000+ global document templates</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Automatic MRZ checksum validation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Barcode and NFC chip verification</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/products/document-verification"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                  >
                    Learn about Document Check <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 2: Face Match & Liveness */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 border border-cyan-100 flex items-center justify-center">
                    <ScanFace className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Real-Person Face Match
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Ensure the person completing the application is the true owner of the ID. Audited to ISO 30107-3 Level 2 standards with zero tolerance for presentation spoofs.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Instant 1:1 biometric facial comparison</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Blocks photos, screens, and masks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Passive check: zero awkward head turns</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/products/face-biometrics"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700"
                  >
                    Learn about Face Biometrics <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Feature 3: Video KYC */}
              <div className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center">
                    <Video className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Live Video KYC Backup
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Whenever an automated check flags suspicion or local banking regulations mandate human oversight, seamlessly escalate to a live, encrypted video call.
                  </p>
                  <ul className="space-y-2 text-xs text-slate-600 pt-2 font-mono">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>BaFin and FINMA compliant video calls</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Encrypted WebRTC call recordings</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Audit vault with 10-year retention</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href="/products/video-call-verification"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-600 hover:text-purple-700"
                  >
                    Learn about Video KYC <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. DEVELOPER HUB & SIMPLE CODE INTEGRATION                */}
        {/* ========================================================= */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700 font-mono">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>Developer-Friendly Integration</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Integrate in minutes with a simple REST API
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Add identity verification to your signup flow with just a few lines of code. Use our hosted URL or drop our lightweight React component into your web app.
              </p>

              <div className="space-y-3 pt-1 text-xs text-slate-700 font-mono">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Hosted verification link or embedded iframe</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Instant webhooks when customer completes check</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Free test sandbox with sample passport photos</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/developers"
                  className="px-5 py-3 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
                >
                  Read the API Docs
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-indigo-600 hover:underline"
                >
                  Get Sandbox Keys &rarr;
                </Link>
              </div>
            </div>

            {/* Code Box */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-200 bg-white shadow-xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-500 ml-2">create-session.{codeLang === 'curl' ? 'sh' : codeLang}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center p-0.5 rounded-lg bg-slate-200/70 text-[11px]">
                      {(['node', 'python', 'curl'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setCodeLang(lang)}
                          className={`px-2.5 py-1 rounded font-mono uppercase transition-colors ${
                            codeLang === lang ? 'bg-white text-slate-900 shadow-sm font-semibold' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {lang}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={copySnippet}
                      className="p-1.5 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors shadow-sm"
                      title="Copy code"
                    >
                      {copiedCode ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Code block */}
                <div className="p-5 font-mono text-xs overflow-x-auto text-slate-800 leading-relaxed max-h-[340px] bg-[#0F172A] text-slate-200">
                  <pre>{codeSnippets[codeLang]}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. SIMPLE PRICING ESTIMATOR & FINAL CALL TO ACTION        */}
        {/* ========================================================= */}
        <section className="py-20 border-t border-slate-200/80 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto rounded-2xl border border-slate-200 bg-white p-8 sm:p-10 shadow-lg space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono font-bold text-indigo-600 uppercase tracking-wider">
                  TRANSPARENT PRICING
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Predictable pricing that scales with you
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm">
                  Pay only for completed verifications. Volume discounts apply automatically.
                </p>
              </div>

              {/* Slider */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">Monthly Verification Volume:</span>
                  <span className="text-indigo-600 font-bold text-sm">
                    {monthlyVolume.toLocaleString('en-US')} checks / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="200000"
                  step="5000"
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>5,000</span>
                  <span>50,000</span>
                  <span>100,000</span>
                  <span>200,000+</span>
                </div>
              </div>

              {/* Output grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <p className="text-xs text-slate-500 font-medium">Estimated Price</p>
                  <p className="text-2xl font-bold text-slate-900 font-mono mt-1">
                    ${monthlyVolume > 50000 ? '0.78' : monthlyVolume > 20000 ? '1.05' : '1.35'}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Per successful check</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <p className="text-xs text-slate-500 font-medium">Instant Approval Rate</p>
                  <p className="text-2xl font-bold text-emerald-600 font-mono mt-1">
                    97.2%
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Approved automatically</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                  <p className="text-xs text-slate-500 font-medium">Fraud Losses Prevented</p>
                  <p className="text-2xl font-bold text-indigo-600 font-mono mt-1">
                    ${Math.round(monthlyVolume * 4.5).toLocaleString('en-US')}
                  </p>
                  <p className="text-[10px] text-slate-400 mt-1">Estimated savings / mo</p>
                </div>
              </div>
            </div>

            {/* Clean Final Call to Action */}
            <div className="mt-16 text-center max-w-xl mx-auto space-y-4">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Ready to verify your customers in seconds?
              </h3>
              <p className="text-slate-600 text-sm">
                Get in touch with our team for a live walkthrough or start testing in our developer sandbox.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <Link
                  href="/contact"
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all"
                >
                  Contact Sales &rarr;
                </Link>
                <Link
                  href="/pricing"
                  className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 shadow-sm transition-all"
                >
                  View All Pricing Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
