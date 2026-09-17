'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  Terminal,
  Code,
  Copy,
  Check,
  Send,
  Sparkles,
  ArrowRight,
  RefreshCw,
  CheckCircle2,
  Lock,
} from 'lucide-react';

export default function DevelopersPage() {
  const [lang, setLang] = useState<'node' | 'python' | 'curl' | 'go'>('node');
  const [copied, setCopied] = useState(false);

  // Webhook Simulator state
  const [webhookEvent, setWebhookEvent] = useState<'verification.approved' | 'verification.rejected' | 'videokyc.escalated'>('verification.approved');
  const [isSending, setIsSending] = useState(false);
  const [webhookResponse, setWebhookResponse] = useState<any | null>(null);

  const copyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTestWebhook = () => {
    setIsSending(true);
    setWebhookResponse(null);
    setTimeout(() => {
      setIsSending(false);
      setWebhookResponse({
        status: 200,
        statusText: 'OK',
        deliveredAt: new Date().toISOString(),
        headers: {
          'X-Vinstar-Signature': 'sha256=9b48f9821048b2910482910489102948',
          'X-Vinstar-Event': webhookEvent,
        },
        payload: {
          id: 'evt_99812401',
          event: webhookEvent,
          timestamp: Date.now(),
          data: {
            verificationId: 'VIN-829182',
            customerReference: 'cust_89104',
            status: webhookEvent === 'verification.approved' ? 'APPROVED' : webhookEvent === 'verification.rejected' ? 'REJECTED' : 'VIDEO_KYC_ESCALATED',
            riskScore: webhookEvent === 'verification.approved' ? 12 : webhookEvent === 'verification.rejected' ? 98 : 76,
            biometrics: {
              faceMatchScore: 0.984,
              livenessPassed: true,
            },
          },
        },
      });
    }, 600);
  };

  const codeSnippets = {
    node: `import { Vinstar } from '@vinstar/idv';

const client = new Vinstar({ apiKey: process.env.VINSTAR_API_KEY });

// Launch a new customer verification
const session = await client.sessions.create({
  customerReference: 'cust_89104',
  workflow: 'instant_pass',
  callbackUrl: 'https://api.yourdomain.com/webhooks/kyc'
});

console.log('Customer URL:', session.url);`,
    python: `from vinstar import Vinstar

client = Vinstar(api_key="vin_live_99812401")

session = client.sessions.create(
    customer_reference="cust_89104",
    workflow="instant_pass",
    callback_url="https://api.yourdomain.com/webhooks/kyc"
)

print(f"Customer URL: {session.url}")`,
    curl: `curl -X POST https://api.vinstar.com/v1/sessions \\
  -H "Authorization: Bearer vin_live_99812401" \\
  -H "Content-Type: application/json" \\
  -d '{
    "customerReference": "cust_89104",
    "workflow": "instant_pass",
    "callbackUrl": "https://api.yourdomain.com/webhooks/kyc"
  }'`,
    go: `package main

import (
    "fmt"
    "github.com/vinstar/idv-go"
)

func main() {
    client := vinstar.NewClient("vin_live_99812401")
    session, err := client.Sessions.Create(&vinstar.CreateSessionParams{
        CustomerReference: "cust_89104",
        Workflow:          "instant_pass",
    })
    if err != nil {
        panic(err)
    }
    fmt.Printf("Verification URL: %s\\n", session.URL)
}`,
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 flex flex-col selection:bg-indigo-600 selection:text-white font-sans">
      <Navbar />

      <main className="flex-1 py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200 bg-indigo-50 text-xs font-semibold text-indigo-700 font-mono">
            <Terminal className="w-3.5 h-3.5 text-indigo-600" />
            <span>Developer Hub &amp; APIs</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Identity Verification Built for Developers
          </h1>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Integrate automated document checks, selfie liveness, and live Video KYC in minutes using our clean REST APIs and lightweight SDKs.
          </p>
        </div>

        {/* INTERACTIVE CODE RUNNER */}
        <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
          <div className="flex flex-wrap items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 gap-4">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-400" />
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-600 ml-2 font-medium">Quickstart Integration</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center p-1 rounded-xl bg-slate-200/70 text-xs font-mono">
                {(['node', 'python', 'curl', 'go'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-3 py-1 rounded-lg uppercase transition-colors ${
                      lang === l ? 'bg-white text-slate-900 font-bold shadow-sm' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <button
                onClick={copyCode}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors shadow-sm"
                title="Copy snippet"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="p-6 font-mono text-xs text-slate-200 leading-relaxed overflow-x-auto bg-[#0F172A]">
            <pre>{codeSnippets[lang]}</pre>
          </div>
        </div>

        {/* WEBHOOK SIMULATOR */}
        <div className="p-8 sm:p-10 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold text-indigo-600 uppercase">Real-Time Event Dispatch</span>
            <h3 className="text-2xl font-bold text-slate-900">Interactive Webhook Delivery Simulator</h3>
            <p className="text-xs text-slate-600">
              Test how your application receives HMAC-SHA256 signed event payloads when a customer verification passes or escalates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-5 space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-slate-700 font-semibold">Select Event Type</label>
                <select
                  value={webhookEvent}
                  onChange={(e) => setWebhookEvent(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:border-indigo-500"
                >
                  <option value="verification.approved">verification.approved (Instant Pass)</option>
                  <option value="videokyc.escalated">videokyc.escalated (High Risk Step-up)</option>
                  <option value="verification.rejected">verification.rejected (Tamper Detected)</option>
                </select>
              </div>

              <button
                onClick={handleTestWebhook}
                disabled={isSending}
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSending ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Dispatching HTTP POST...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Dispatch Test Webhook Event</span>
                  </>
                )}
              </button>
            </div>

            <div className="md:col-span-7 rounded-xl border border-slate-200 bg-slate-50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200 text-xs font-mono text-slate-600">
                <span>Webhook Delivery Inspector</span>
                {webhookResponse && (
                  <span className="text-emerald-700 font-bold">HTTP {webhookResponse.status} OK</span>
                )}
              </div>
              <div className="p-4 font-mono text-[11px] text-slate-800 overflow-x-auto max-h-[220px]">
                {webhookResponse ? (
                  <pre>{JSON.stringify(webhookResponse, null, 2)}</pre>
                ) : (
                  <p className="text-slate-500 italic">Click &ldquo;Dispatch Test Webhook Event&rdquo; to simulate payload delivery.</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="text-2xl font-bold text-slate-900">Start Testing Today</h3>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all"
            >
              Get Free Sandbox Key
            </Link>
            <Link
              href="/solutions"
              className="px-5 py-3.5 rounded-xl font-semibold text-xs text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition-all"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
