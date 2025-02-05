'use client';

import Header from "@/app/components/Header";
import { Card } from "@/components/ui/card";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function TermsPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Terms & Conditions</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please read these terms carefully before using GameFlowCloud.
            </p>
          </div>

          <div className="space-y-8">
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">1. User Responsibilities</h2>
              <div className="space-y-4 text-gray-400">
                <p>Users must:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Be at least 13 years old to use the service</li>
                  <li>Maintain the security of their account credentials</li>
                  <li>Have a stable internet connection (minimum 15 Mbps)</li>
                  <li>Not share their account with others</li>
                  <li>Not use VPNs or proxies to circumvent regional restrictions</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">2. Subscription & Billing</h2>
              <div className="space-y-4 text-gray-400">
                <p>By subscribing to GameFlowCloud, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pay the subscription fee on time</li>
                  <li>Maintain valid payment information</li>
                  <li>Accept automatic renewals unless cancelled</li>
                  <li>Receive no refunds for partial months</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">3. Prohibited Activities</h2>
              <div className="space-y-4 text-gray-400">
                <p>Users must not:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use cheats, automation software, or exploits</li>
                  <li>Harass other users or engage in toxic behavior</li>
                  <li>Attempt to reverse engineer our services</li>
                  <li>Resell or redistribute access to GameFlowCloud</li>
                </ul>
              </div>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">4. Service Limitations</h2>
              <div className="space-y-4 text-gray-400">
                <p>GameFlowCloud reserves the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Modify or discontinue services without notice</li>
                  <li>Limit access during maintenance periods</li>
                  <li>Remove games from the library</li>
                  <li>Terminate accounts for violations</li>
                </ul>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
} 