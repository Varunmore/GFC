'use client';

import Header from "@/app/components/Header";
import { Card } from "@/components/ui/card";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function PrivacyPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How we collect, use, and protect your data.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
              <div className="space-y-4 text-gray-400">
                <p>We collect the following information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (phone number, email)</li>
                  <li>Gaming preferences and history</li>
                  <li>Device and connection information</li>
                  <li>Payment details (processed securely)</li>
                  <li>Usage statistics and performance metrics</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Data Usage</h2>
              <div className="space-y-4 text-gray-400">
                <p>Your data is used to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and improve our gaming services</li>
                  <li>Optimize streaming performance</li>
                  <li>Personalize your gaming experience</li>
                  <li>Process payments and prevent fraud</li>
                  <li>Communicate service updates</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Data Protection</h2>
              <div className="space-y-4 text-gray-400">
                <p>We protect your data through:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>End-to-end encryption for sensitive data</li>
                  <li>Regular security audits and updates</li>
                  <li>Strict access controls and monitoring</li>
                  <li>Compliance with GDPR and other regulations</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <div className="space-y-4 text-gray-400">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Export your data in a portable format</li>
                  <li>File a complaint with privacy authorities</li>
                </ul>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
} 