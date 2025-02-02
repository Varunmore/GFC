import { NextResponse } from 'next/server';

interface GameData {
  [key: string]: {
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
}

const gamesData: GameData = {
  "1": {
    id: 1,
    title: "Cyberpunk 2077",
    image: "https://www.lowyat.net/wp-content/uploads/2022/02/Cyberpunk-2077-next-gen-platform.jpg",
    genre: "RPG",
    rating: 4.5,
    playTime: "120h",
    achievements: 24,
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in Night City, a megalopolis obsessed with power, glamour and body modification.",
    releaseDate: "December 10, 2020",
    developer: "CD Projekt Red",
    publisher: "CD Projekt"
  },
  "2": {
    id: 2,
    title: "Elden Ring",
    image: "https://cdn.wccftech.com/wp-content/uploads/2021/06/ER_KEY-ART-scaled-e1623411764381-2048x1052.jpg",
    genre: "Action RPG",
    rating: 4.8,
    playTime: "85h",
    achievements: 32,
    description: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment.",
    releaseDate: "February 25, 2022",
    developer: "FromSoftware",
    publisher: "Bandai Namco"
  },
  "3": {
    id: 3,
    title: "Red Dead Redemption 2",
    image: "https://images.hdqwalls.com/wallpapers/red-dead-redemption-2-game-characters-cc.jpg",
    genre: "Action Adventure",
    rating: 4.9,
    playTime: "150h",
    achievements: 45,
    description: "Red Dead Redemption 2 is an epic tale of life in America's unforgiving heartland.",
    releaseDate: "October 26, 2018",
    developer: "Rockstar Games",
    publisher: "Rockstar Games"
  },
  "4": {
    id: 4,
    title: "God of War",
    image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/ax0V5TYMax06mLzmkWeQMiwH.jpg",
    genre: "Action Adventure",
    rating: 4.7,
    playTime: "60h",
    achievements: 28,
    description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters.",
    releaseDate: "April 20, 2018",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment"
  },
  // Add more games as needed
};

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const { params } = context;
    const id = await Promise.resolve(params.id);
    
    if (id in gamesData) {
      return new NextResponse(JSON.stringify(gamesData[id]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
    
    return new NextResponse(JSON.stringify({ error: 'Game not found' }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 