'use client';

import SignUp from "@/app/components/SignUp";
import Header from "@/app/components/Header";

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="pt-20 px-4 flex justify-center items-center min-h-screen">
        <SignUp />
      </div>
    </div>
  );
} 