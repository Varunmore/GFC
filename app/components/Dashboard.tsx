"use client"

import { useState, useEffect } from "react"
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import DashboardHeader from './DashboardHeader'
import { Card } from "@/components/ui/card"
import { Gamepad2, Trophy, Clock, Users } from "lucide-react"

const Dashboard = () => {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setPhoneNumber(user.phoneNumber)
      } else {
        router.push('/')
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [router])

  const stats = [
    {
      title: "Active Games",
      value: "12",
      icon: Gamepad2,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Achievements",
      value: "24",
      icon: Trophy,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Play Time",
      value: "126h",
      icon: Clock,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Friends Online",
      value: "5",
      icon: Users,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Welcome back!</h1>
          <p className="text-gray-400 mt-2">Here's what's happening with your games</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="bg-black/50 border-purple-500/20 backdrop-blur-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-400 text-sm">{stat.title}</p>
                    <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/20 mt-12 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <p className="text-gray-400">No recent activity</p>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-purple-900/80 to-blue-900/80 border-purple-500/20 mt-12 p-8">
            <h2 className="text-xl font-bold text-white mb-4">Your Games</h2>
            <div className="space-y-4">
              <p className="text-gray-400">No games found</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Dashboard

