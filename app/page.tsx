// 'use client';

import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import PricingSection from "./components/PricingSection"
import HowItWorksSection from "./components/HowItWorksSection"
import TestimonialsSection from "./components/TestimonialsSection"
import FaqSection from "./components/FaqSection"
// import Dashboard from "./dashboard/page"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
import SignUp from "./components/SignUp"

export default function Home() {
  // const router = useRouter();

  // const handleGetStarted = () => {
  //   router.push("/signup");
  // };

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <FaqSection />
      {/* <SignUp /> */}
      {/* <Dashboard /> */}
      {/* <Button onClick={handleGetStarted} className="ml-8 whitespace-nowrap bg-purple-600 text-white hover:bg-purple-700">Get Started</Button> */}
    </> 
  )
}

