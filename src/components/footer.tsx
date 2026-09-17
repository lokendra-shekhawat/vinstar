import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Lock, Globe, Server, CheckCircle2 } from 'lucide-react';
import VinstarLogo from '@/components/vinstar-logo';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 font-sans">
      {/* Top badges banner */}
      <div className="border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">iBeta ISO 30107-3</p>
              <p className="text-slate-500 font-mono text-[11px]">Level 2 PAD Certified</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 shrink-0">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">SOC 2 Type II &amp; GDPR</p>
              <p className="text-slate-500 font-mono text-[11px]">Bank-Grade Data Privacy</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100 shrink-0">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">Global Coverage</p>
              <p className="text-slate-500 font-mono text-[11px]">Passports &amp; IDs in 200+ Countries</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-900">99.99% Uptime SLA</p>
              <p className="text-slate-500 font-mono text-[11px]">Sub-2s Automated Results</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-5 gap-8 text-xs">
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2">
            <VinstarLogo size={30} />
          </div>
          <p className="text-slate-600 text-xs leading-relaxed max-w-sm">
            Simple, fast, and automated identity verification platform. Combining automated document checks, selfie liveness, and live video verification in a single clean API.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-500">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All systems operational</span>
            <span className="text-slate-300">•</span>
            <span>Latency: 42ms</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 uppercase tracking-wider mb-3">Products</h4>
          <ul className="space-y-2">
            <li><Link href="/products/document-verification" className="hover:text-indigo-600 transition-colors">Document Check</Link></li>
            <li><Link href="/products/face-biometrics" className="hover:text-indigo-600 transition-colors">Face Biometrics</Link></li>
            <li><Link href="/products/liveness-detection" className="hover:text-indigo-600 transition-colors">Liveness Check</Link></li>
            <li><Link href="/products/video-action-verification" className="hover:text-indigo-600 transition-colors">Action Challenges</Link></li>
            <li><Link href="/products/video-call-verification" className="hover:text-indigo-600 transition-colors">Live Video KYC</Link></li>
            <li><Link href="/products/workflow-orchestrator" className="hover:text-indigo-600 transition-colors">Workflow Builder</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 uppercase tracking-wider mb-3">Solutions</h4>
          <ul className="space-y-2">
            <li><Link href="/solutions#banking" className="hover:text-indigo-600 transition-colors">Banking &amp; Neobanks</Link></li>
            <li><Link href="/solutions#fintech" className="hover:text-indigo-600 transition-colors">FinTech &amp; Payments</Link></li>
            <li><Link href="/solutions#crypto" className="hover:text-indigo-600 transition-colors">Crypto &amp; Web3</Link></li>
            <li><Link href="/solutions#lending" className="hover:text-indigo-600 transition-colors">Lending &amp; Credit</Link></li>
            <li><Link href="/solutions#marketplaces" className="hover:text-indigo-600 transition-colors">Marketplaces &amp; Gig</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900 uppercase tracking-wider mb-3">Developers &amp; Trust</h4>
          <ul className="space-y-2">
            <li><Link href="/developers" className="hover:text-indigo-600 transition-colors">API Documentation</Link></li>
            <li><Link href="/developers" className="hover:text-indigo-600 transition-colors">SDKs &amp; Webhooks</Link></li>
            <li><Link href="/security" className="hover:text-indigo-600 transition-colors">Security Architecture</Link></li>
            <li><Link href="/pricing" className="hover:text-indigo-600 transition-colors">Pricing Plans</Link></li>
            <li><Link href="/contact" className="text-indigo-600 font-semibold hover:underline flex items-center gap-1">Contact Sales</Link></li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200 py-6 px-4 sm:px-6 lg:px-8 text-center text-[11px] text-slate-500">
        <p>© 2026 Vinstar IDV Inc. Simple, fast, and compliant identity verification worldwide.</p>
      </div>
    </footer>
  );
}
