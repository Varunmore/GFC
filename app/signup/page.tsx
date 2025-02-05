'use client';

import SignUp from "@/app/components/SignUp";
import Header from "@/app/components/Header";
import AnimatedBackground from "@/app/components/AnimatedBackground";

export default function SignUpPage() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen">
        <Header />
        <div className="pt-24 px-4 flex justify-center items-center min-h-[calc(100vh-6rem)]">
          <SignUp />
        </div>
      </div>
    </>
  );
} 