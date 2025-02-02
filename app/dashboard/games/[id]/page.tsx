'use client';

import { useEffect, useState } from 'react';
import DashboardHeader from "@/app/components/DashboardHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Clock, Trophy, Heart, Share2, PlayCircle } from "lucide-react";
import Image from "next/image";
import { useParams } from 'next/navigation';

interface GameDetails {
  id: number;
  title: string;
  image: string;
  genre: string;
  rating: number;
  playTime: string;
  achievements: number;
  description: string;
  releaseDate: string;
  developer: string;
  publisher: string;
}

export default function GameDetailsPage() {
  const params = useParams();
  const [game, setGame] = useState<GameDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        const response = await fetch(`/api/games/${params.id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setGame(data);
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!game) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Game not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <DashboardHeader />
      <main className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Game Image */}
          <div className="lg:col-span-1">
            <Card className="bg-black/50 border-purple-500/20 overflow-hidden">
              <div className="relative aspect-[3/4]">
                <Image
                  src={game.image}
                  alt={game.title}
                  fill
                  className="object-cover"
                />
              </div>
            </Card>
          </div>

          {/* Right Column - Game Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{game.title}</h1>
              <p className="text-purple-400">{game.genre}</p>
            </div>

            <div className="flex gap-4">
              <Button className="bg-purple-600 hover:bg-purple-700 gap-2">
                <PlayCircle className="w-5 h-5" />
                Play Now
              </Button>
              <Button variant="outline" className="border-purple-500/20 bg-purple-500/20 gap-2">
                <Heart className="w-5 h-5" />
                Favorite
              </Button>
              <Button variant="outline" className="border-purple-500/20 bg-purple-500/20 gap-2">
                <Share2 className="w-5 h-5" />
                Share
              </Button>
            </div>

            <Card className="bg-black/50 border-purple-500/20 p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                    <Star className="h-5 w-5" />
                    <span className="text-lg">{game.rating}</span>
                  </div>
                  <p className="text-gray-400 text-sm">Rating</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                    <Clock className="h-5 w-5" />
                    <span className="text-lg">{game.playTime}</span>
                  </div>
                  <p className="text-gray-400 text-sm">Play Time</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-1 text-purple-500 mb-1">
                    <Trophy className="h-5 w-5" />
                    <span className="text-lg">{game.achievements}</span>
                  </div>
                  <p className="text-gray-400 text-sm">Achievements</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">About</h3>
                  <p className="text-gray-400">{game.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-400">Release Date</h4>
                    <p className="text-white">{game.releaseDate}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Developer</h4>
                    <p className="text-white">{game.developer}</p>
                  </div>
                  <div>
                    <h4 className="text-gray-400">Publisher</h4>
                    <p className="text-white">{game.publisher}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
} 