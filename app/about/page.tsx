'use client';

import Header from "@/app/components/Header";
import { Card } from "@/components/ui/card";
import { CloudLightning, Gamepad2, Wifi, Server } from "lucide-react";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function AboutPage() {
  const features = [
    {
      icon: Wifi,
      title: "Low-Latency Streaming",
      description: "Experience gaming with minimal lag thanks to our advanced streaming technology and global server network."
    },
    {
      icon: Gamepad2,
      title: "AAA Game Access",
      description: "Play the latest AAA titles without expensive hardware. Access a growing library of premium games instantly."
    },
    {
      icon: Server,
      title: "Cloud Infrastructure",
      description: "Powered by cutting-edge cloud technology, ensuring smooth gameplay across all devices."
    },
    {
      icon: CloudLightning,
      title: "Instant Gaming",
      description: "No downloads, no updates, no waiting. Start playing your favorite games instantly from any device."
    }
  ];

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">About GameFlowCloud</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Revolutionizing gaming through cloud technology, making high-end gaming accessible to everyone, anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To democratize gaming by removing hardware barriers and making high-quality gaming experiences accessible to everyone through innovative cloud technology.
              </p>
            </Card>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400">
                A world where anyone can play any game, anytime, anywhere, without being limited by their hardware capabilities.
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-black/50 border-purple-500/20 p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 rounded-full bg-purple-500/20 mb-4">
                      <Icon className="h-6 w-6 text-purple-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/20 mt-12 p-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Join the Future of Gaming</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Experience gaming like never before with GameFlowCloud. No more expensive hardware upgrades, no more waiting for downloads, just pure gaming enjoyment.
              </p>
            </div>
          </Card>
        </main>
      </div>
    </>
  );
} 