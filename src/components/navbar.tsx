'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import VinstarLogo from '@/components/vinstar-logo';
import {
  ShieldCheck,
  FileCheck2,
  ScanFace,
  Video,
  Activity,
  GitFork,
  ChevronDown,
  Menu,
  X,
  Radio,
  Terminal,
  ArrowRight,
} from 'lucide-react';

export default function Navbar() {
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      {/* Top micro banner */}
      <div className="hidden md:flex items-center justify-between px-6 py-1.5 text-xs border-b border-slate-200/60 bg-slate-50 text-slate-600 font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System 99.99% Operational • P95: 1.2s
          </span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-600">ISO/IEC 30107-3 Level 2 PAD Certified</span>
          <span className="text-slate-300">|</span>
          <span className="text-slate-500">Passports &amp; IDs from 200+ Countries</span>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/developers" className="hover:text-indigo-600 transition-colors flex items-center gap-1 text-slate-600">
            <Terminal className="w-3 h-3 text-indigo-500" /> Developer API &amp; SDKs
          </Link>
          <span className="text-slate-300">•</span>
          <Link href="/security" className="hover:text-indigo-600 transition-colors text-slate-600">
            Security &amp; Trust
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo & Desktop Nav */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center group">
              <VinstarLogo size={36} />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    productsOpen || pathname?.startsWith('/products')
                      ? 'text-indigo-600 bg-indigo-50/70'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                </button>

                {productsOpen && (
                  <div className="absolute top-full left-0 w-[540px] p-3 bg-white border border-slate-200 rounded-2xl shadow-xl shadow-slate-200/50 grid grid-cols-2 gap-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <Link
                      href="/products/document-verification"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-100">
                        <FileCheck2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-indigo-600">
                          Document Check
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Passports, driver licenses, and national IDs from 200+ countries.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/face-biometrics"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-cyan-50 text-cyan-600 border border-cyan-100 group-hover:bg-cyan-100">
                        <ScanFace className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-cyan-600">
                          Face Biometrics
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          1:1 facial matching between selfie and ID card portrait.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/liveness-detection"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-100 group-hover:bg-emerald-100">
                        <Radio className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-emerald-600">
                          Liveness Check
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          ISO 30107-3 passive check blocking printed photos and screens.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/video-action-verification"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-amber-50 text-amber-600 border border-amber-100 group-hover:bg-amber-100">
                        <Activity className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-amber-600">
                          Action Challenges
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Real-time micro-prompts defeating deepfakes and injection.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/video-call-verification"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-rose-50 text-rose-600 border border-rose-100 group-hover:bg-rose-100">
                        <Video className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-rose-600">
                          Live Video KYC
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Seamless live agent escalation for high-value compliance.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/workflow-orchestrator"
                      onClick={() => setProductsOpen(false)}
                      className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-purple-50 text-purple-600 border border-purple-100 group-hover:bg-purple-100">
                        <GitFork className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 group-hover:text-purple-600">
                          Workflow Builder
                        </p>
                        <p className="text-xs text-slate-500 line-clamp-2">
                          Simple no-code rules to automate customer routing.
                        </p>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/solutions"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === '/solutions' ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Solutions
              </Link>

              <Link
                href="/developers"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === '/developers' ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Developers
              </Link>

              <Link
                href="/security"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === '/security' ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Security
              </Link>

              <Link
                href="/pricing"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  pathname === '/pricing' ? 'text-indigo-600 bg-indigo-50/70' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                }`}
              >
                Pricing
              </Link>
            </nav>
          </div>

          {/* Right Action buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/developers"
              className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors shadow-sm"
            >
              Developer API
            </Link>

            <Link
              href="/contact"
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Contact Sales</span>
            </Link>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600 text-white"
            >
              Contact Sales
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-2 pb-6 border-b border-slate-200 bg-white space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs text-center"
            >
              <ShieldCheck className="w-4 h-4" /> Contact Sales
            </Link>
            <Link
              href="/developers"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-xs text-center"
            >
              Developer API
            </Link>
          </div>
          <div className="pt-2 border-t border-slate-100 flex flex-col space-y-2 text-sm text-slate-700">
            <Link href="/products/document-verification" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Document Check
            </Link>
            <Link href="/products/face-biometrics" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Face Biometrics
            </Link>
            <Link href="/products/liveness-detection" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Liveness Check
            </Link>
            <Link href="/products/video-action-verification" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Action Challenges
            </Link>
            <Link href="/products/video-call-verification" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Live Video KYC
            </Link>
            <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Solutions
            </Link>
            <Link href="/developers" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Developer APIs
            </Link>
            <Link href="/security" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Security
            </Link>
            <Link href="/pricing" onClick={() => setMobileMenuOpen(false)} className="py-1">
              Pricing
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
