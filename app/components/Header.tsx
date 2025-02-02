'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CloudLightning } from "lucide-react"
import { useRouter, usePathname } from "next/navigation"

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const handleGetStarted = () => {
    router.push("/signup");
  };

  return (
    <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <CloudLightning className="h-8 w-auto sm:h-10 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">GameFlowCloud</span>
            </Link>
          </div>
          {pathname === '/' && (
            <>
              <nav className="hidden md:flex space-x-10">
                <Link href="#features" className="text-base font-medium text-gray-300 hover:text-white">
                  Features
                </Link>
                <Link href="#pricing" className="text-base font-medium text-gray-300 hover:text-white">
                  Pricing
                </Link>
                <Link href="#how-it-works" className="text-base font-medium text-gray-300 hover:text-white">
                  How It Works
                </Link>
                <Link href="#faq" className="text-base font-medium text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </nav>
              <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                <Button 
                  onClick={handleGetStarted} 
                  className="ml-8 whitespace-nowrap bg-purple-600 text-white hover:bg-purple-700"
                >
                  Get Started
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

