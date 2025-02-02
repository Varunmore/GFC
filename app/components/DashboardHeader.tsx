'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CloudLightning, Gamepad2, Layout, LogOut, User, Settings, Bell } from "lucide-react"
import { useRouter } from "next/navigation"
import { auth } from '@/lib/firebase/config'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function DashboardHeader() {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start items-center gap-2">
            <Link href="/dashboard" className="flex items-center">
              <CloudLightning className="h-8 w-auto sm:h-10 text-purple-500" />
              <span className="ml-2 text-xl font-bold text-white">GameFlowCloud</span>
            </Link>
            <nav className="hidden md:flex items-center ml-8 space-x-1">
              <Link 
                href="/dashboard"
                className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Layout className="w-4 h-4" />
                  <span>Dashboard</span>
                </div>
              </Link>
              <Link 
                href="/dashboard/games"
                className="px-4 py-2 rounded-md text-gray-300 hover:text-white hover:bg-purple-500/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" />
                  <span>Games</span>
                </div>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white hover:bg-purple-500/20"
            >
              <Bell className="w-5 h-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full bg-purple-500/20 hover:bg-purple-500/30"
                >
                  <User className="h-5 w-5 text-purple-300" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer text-red-500 focus:text-red-500"
                  onClick={handleSignOut}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
} 