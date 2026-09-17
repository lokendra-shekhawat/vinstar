'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  ShieldCheck,
  CheckCircle2,
  Mail,
  Building2,
  Calendar,
  Sparkles,
  ArrowRight,
  Globe,
  Clock,
} from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    company: '',
    monthlyVolume: '20,000 - 50,000 checks',
    interests: ['Document Check', 'Face Biometrics & Liveness'],
  });

  const toggleInterest = (item: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((i) => i !== item)
        : [...prev.interests, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700">
            <Calendar className="w-3.5 h-3.5 text-indigo-600" />
            <span>Contact &amp; Live Walkthrough</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Speak with an Identity Verification Specialist
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Discuss your compliance requirements, test custom verification workflows, or receive a tailored volume quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">What to expect on the call:</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>A guided walkthrough tailored to your jurisdiction (EU, US, UK, APAC).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Custom pricing and pass-rate optimization for your specific onboarding funnel.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Immediate access to a sandbox API key and preloaded test specimens.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3 text-xs shadow-sm">
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-cyan-600" />
                <span className="text-slate-700">Offices in London, Frankfurt, Singapore, and New York</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span className="text-slate-700">Average response time: under 2 business hours</span>
              </div>
            </div>
          </div>

          {/* Right Lead Capture Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 rounded-2xl border border-emerald-200 bg-emerald-50/50 text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Request Received</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you! An identity specialist will contact you at <strong className="text-slate-900">{formData.workEmail || 'your email'}</strong> within 2 hours with recommendations.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/developers"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm"
                  >
                    <span>Explore Developer API</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/solutions"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <span>View Solutions</span>
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm text-xs"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">First Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-700 font-semibold">Last Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Acme FinTech"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-slate-700 font-semibold">Estimated Monthly Volume</label>
                  <select
                    value={formData.monthlyVolume}
                    onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                    className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  >
                    <option value="Under 5,000 checks">Under 5,000 checks / month</option>
                    <option value="5,000 - 20,000 checks">5,000 - 20,000 checks / month</option>
                    <option value="20,000 - 50,000 checks">20,000 - 50,000 checks / month</option>
                    <option value="50,000+ checks">50,000+ checks / month (Enterprise)</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-slate-700 font-semibold">Products of Interest</label>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    {[
                      'Document Check',
                      'Face Biometrics & Liveness',
                      'Video Action Challenges',
                      'Live Video KYC',
                      'Workflow Builder',
                    ].map((item) => (
                      <button
                        type="button"
                        key={item}
                        onClick={() => toggleInterest(item)}
                        className={`p-2 rounded-lg border text-left transition-all ${
                          formData.interests.includes(item)
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-700 font-semibold'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all mt-4"
                >
                  Request Consultation
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
