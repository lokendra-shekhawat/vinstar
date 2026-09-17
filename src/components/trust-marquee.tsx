'use client';

import React from 'react';
import { Shield, Lock, Award, CheckCircle2, Globe2, FileCheck } from 'lucide-react';

export default function TrustMarquee() {
  const clients = [
    { name: 'Goldman Global', tag: 'Investment Banking' },
    { name: 'Revolut Pay', tag: 'Neo-Banking' },
    { name: 'Santander Digital', tag: 'Commercial Banking' },
    { name: 'Coinbase Custody', tag: 'Digital Asset Exchange' },
    { name: 'Kraken Institutional', tag: 'Crypto Liquidity' },
    { name: 'Monzo Enterprise', tag: 'Challenger Bank' },
    { name: 'Checkout.com', tag: 'Payment Infrastructure' },
    { name: 'N26 Global', tag: 'Mobile Banking' },
    { name: 'Trade Republic', tag: 'Brokerage' },
  ];

  const certifications = [
    {
      icon: Award,
      title: 'iBeta ISO 30107-3',
      desc: 'Level 2 Liveness Certified',
      color: 'text-amber-600',
      bg: 'bg-amber-50/80 border-amber-200/80',
    },
    {
      icon: Shield,
      title: 'SOC 2 Type II Certified',
      desc: 'Annual AICPA Security Audit',
      color: 'text-emerald-600',
      bg: 'bg-emerald-50/80 border-emerald-200/80',
    },
    {
      icon: Lock,
      title: 'ISO/IEC 27001:2022',
      desc: 'Data Security Standard',
      color: 'text-indigo-600',
      bg: 'bg-indigo-50/80 border-indigo-200/80',
    },
    {
      icon: FileCheck,
      title: 'BaFin & FINMA Ready',
      desc: 'Compliant Video Identification',
      color: 'text-cyan-600',
      bg: 'bg-cyan-50/80 border-cyan-200/80',
    },
    {
      icon: Globe2,
      title: 'GDPR Sovereign Storage',
      desc: 'Zero Cross-Border Transfers',
      color: 'text-purple-600',
      bg: 'bg-purple-50/80 border-purple-200/80',
    },
  ];

  return (
    <section className="py-12 border-y border-slate-200/80 bg-slate-50/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1.5">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-600 font-semibold font-mono">
            Trusted by Modern FinTechs &amp; Global Institutions
          </p>
          <h3 className="text-sm text-slate-500 font-normal">
            Verifying millions of customer identities with bank-grade security and zero friction
          </h3>
        </div>

        {/* Client Marquee Strip */}
        <div className="relative w-full overflow-hidden mask-fade-edges">
          <div className="flex animate-marquee space-x-8 py-1">
            {[...clients, ...clients].map((client, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2.5 px-4 py-2 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-indigo-300 hover:shadow transition-all group cursor-default"
              >
                <div className="w-2 h-2 rounded-full bg-indigo-500 group-hover:scale-125 transition-transform" />
                <span className="font-semibold text-slate-800 text-xs tracking-tight">
                  {client.name}
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  {client.tag}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Accredited Certifications Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pt-2">
          {certifications.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div
                key={idx}
                className={`p-3 rounded-xl border ${cert.bg} shadow-sm flex flex-col justify-between space-y-1.5 hover:translate-y-[-1px] transition-transform`}
              >
                <div className="flex items-center space-x-2">
                  <Icon className={`w-4 h-4 ${cert.color} shrink-0`} />
                  <span className="text-xs font-semibold text-slate-900 tracking-tight leading-tight">
                    {cert.title}
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-[11px] text-slate-600 font-mono">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                  <span className="truncate">{cert.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
