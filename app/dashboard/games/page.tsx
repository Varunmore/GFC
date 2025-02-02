'use client';

import DashboardHeader from "@/app/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Star, Clock, Trophy } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    image: "https://www.lowyat.net/wp-content/uploads/2022/02/Cyberpunk-2077-next-gen-platform.jpg",
    genre: "RPG",
    rating: 4.5,
    playTime: "120h",
    achievements: 24,
  },
  {
    id: 2,
    title: "Elden Ring",
    image: "https://cdn.wccftech.com/wp-content/uploads/2021/06/ER_KEY-ART-scaled-e1623411764381-2048x1052.jpg",
    genre: "Action RPG",
    rating: 4.8,
    playTime: "85h",
    achievements: 32,
  },
  {
    id: 3,
    title: "Red Dead Redemption 2",
    image: "https://images.hdqwalls.com/wallpapers/red-dead-redemption-2-game-characters-cc.jpg",
    genre: "Action Adventure",
    rating: 4.9,
    playTime: "150h",
    achievements: 45,
  },
  {
    id: 4,
    title: "God of War",
    image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    genre: "Action Adventure",
    rating: 4.7,
    playTime: "60h",
    achievements: 28,
  },
  // Add more games as needed
];

const genres = ["All", "RPG", "Action RPG", "Action Adventure", "FPS", "Strategy", "Sports"];

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Game Library</h1>
            <p className="text-gray-400 mt-2">Browse and manage your games</p>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search games..."
                className="pl-10 bg-black/50 border-purple-500/20 text-white w-[200px]"
              />
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Add Game
            </Button>
          </div>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {genres.map((genre) => (
            <Button
              key={genre}
              variant="ghost"
              className="text-gray-300 hover:text-white hover:bg-purple-500/20"
            >
              {genre}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link href={`/dashboard/games/${game.id}`} key={game.id}>
              <Card className="bg-black/50 border-purple-500/20 overflow-hidden group hover:border-purple-500/40 transition-colors">
                <div className="relative aspect-video">
                  <Image
                    src={game.image}
                    alt={game.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{game.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{game.genre}</p>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="h-4 w-4" />
                      <span>{game.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-blue-500">
                      <Clock className="h-4 w-4" />
                      <span>{game.playTime}</span>
                    </div>
                    <div className="flex items-center gap-1 text-purple-500">
                      <Trophy className="h-4 w-4" />
                      <span>{game.achievements}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
} 