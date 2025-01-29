"use client";
import { useEffect, useState } from "react";

import Thumbnail from "./_components/thumbnails";
import Video from "./_class/Video";
import VideoGrid from "./_components/VideoGrid";
import SideBar from "./_components/SideBar";
import SearchBar from "./_components/SearchBar";

function HomePage() {
  // const videoArray: Video[] = [
  //   new Video(
  //     "How to Build a Bomb",
  //     "http://example.com",
  //     "Mark Rober",
  //     1000000,
  //     "2 days ago",
  //     "https://placehold.co/1280x720",
  //     "A fascinating video on building a rocket.",
  //     "2025-01-01",
  //     5000,
  //     49000,
  //     1000,
  //     600, // 10 minutes
  //     false
  //   ),
  //   new Video(
  //     "Amazing Science Experiments",
  //     "http://example.com",
  //     "Veritasium",
  //     1200000,
  //     "5 hours ago",
  //     "https://placehold.co/1280x720",
  //     "Science experiments that blow your mind!",
  //     "2025-01-15",
  //     2000,
  //     25000,
  //     500,
  //     450, // 7.5 minutes
  //     false
  //   ),
  //   new Video(
  //     "Understanding Quantum Physics",
  //     "http://example.com",
  //     "Khan Academy",
  //     900000,
  //     "3 weeks ago",
  //     "https://placehold.co/1280x720",
  //     "Breaking down the complex world of quantum physics.",
  //     "2024-12-30",
  //     1500,
  //     15000,
  //     300,
  //     900, // 15 minutes
  //     false
  //   ),
  //   new Video(
  //     "The Future of AI",
  //     "http://example.com",
  //     "Tech Insider",
  //     500000,
  //     "1 month ago",
  //     "https://placehold.co/1280x720",
  //     "A deep dive into how AI is changing the world.",
  //     "2024-12-01",
  //     1000,
  //     10000,
  //     2000,
  //     60, // 1 minute
  //     false
  //   ),
  //   new Video(
  //     "Surviving 7 Days Buried Underground",
  //     "http://example.com",
  //     "Mr Beast",
  //     500000000,
  //     "1 year ago",
  //     "https://placehold.co/1280x720",
  //     "A deep dive into how AI is changing the world.",
  //     "2024-12-01",
  //     1000,
  //     10000,
  //     2000,
  //     60, // 1 minute
  //     false
  //   ),
  //   new Video(
  //     "Exploring the Deep Ocean",
  //     "http://example.com",
  //     "National Geographic",
  //     800000,
  //     "6 days ago",
  //     "https://placehold.co/1280x720",
  //     "An exploration into the depths of the ocean.",
  //     "2025-01-18",
  //     3000,
  //     35000,
  //     1200,
  //     720, // 12 minutes
  //     false
  //   ),
  //   new Video(
  //     "The Secrets of the Great Pyramid",
  //     "http://example.com",
  //     "Ancient Mysteries",
  //     650000,
  //     "1 week ago",
  //     "https://placehold.co/1280x720",
  //     "Unveiling the mysteries of the Great Pyramid of Giza.",
  //     "2025-01-10",
  //     4500,
  //     15000,
  //     1000,
  //     1080, // 18 minutes
  //     false
  //   ),
  //   new Video(
  //     "Mars Exploration: The Next Frontier",
  //     "http://example.com",
  //     "NASA",
  //     12000000,
  //     "3 days ago",
  //     "https://placehold.co/1280x720",
  //     "NASA's plans for the next Mars mission.",
  //     "2025-01-20",
  //     2500,
  //     30000,
  //     1500,
  //     1200, // 20 minutes
  //     false
  //   ),
  //   new Video(
  //     "The History of Artificial Intelligence",
  //     "http://example.com",
  //     "BBC",
  //     4000000,
  //     "2 weeks ago",
  //     "https://placehold.co/1280x720",
  //     "A documentary on the history of artificial intelligence.",
  //     "2025-01-08",
  //     2000,
  //     25000,
  //     1200,
  //     840, // 14 minutes
  //     false
  //   ),
  //   new Video(
  //     "How to Build a Sustainable City",
  //     "http://example.com",
  //     "TED Talks",
  //     300000,
  //     "1 month ago",
  //     "https://placehold.co/1280x720",
  //     "Solutions for building sustainable cities.",
  //     "2024-12-15",
  //     5000,
  //     50000,
  //     700,
  //     960, // 16 minutes
  //     false
  //   ),
  //   new Video(
  //     "Journey Through the Universe",
  //     "http://example.com",
  //     "SpaceX",
  //     15000000,
  //     "7 days ago",
  //     "https://placehold.co/1280x720",
  //     "A virtual tour of the cosmos with SpaceX.",
  //     "2025-01-22",
  //     10000,
  //     120000,
  //     3000,
  //     1800, // 30 minutes
  //     false
  //   ),
  //   new Video(
  //     "AI in 2025: What’s Next?",
  //     "http://example.com",
  //     "Tech Vision",
  //     1500000,
  //     "1 day ago",
  //     "https://placehold.co/1280x720",
  //     "Exploring the next big trends in AI for 2025.",
  //     "2025-01-27",
  //     3000,
  //     35000,
  //     1000,
  //     720, // 12 minutes
  //     false
  //   ),
  //   new Video(
  //     "Breaking Down Cryptocurrency",
  //     "http://example.com",
  //     "Crypto Explained",
  //     2000000,
  //     "3 hours ago",
  //     "https://placehold.co/1280x720",
  //     "A deep dive into the world of cryptocurrency.",
  //     "2025-01-28",
  //     1500,
  //     20000,
  //     800,
  //     600, // 10 minutes
  //     false
  //   ),
  //   new Video(
  //     "Revolutionizing Education with AI",
  //     "http://example.com",
  //     "EdTech Innovators",
  //     800000,
  //     "6 hours ago",
  //     "https://placehold.co/1280x720",
  //     "How AI is reshaping the future of education.",
  //     "2025-01-28",
  //     2500,
  //     30000,
  //     1000,
  //     450, // 7.5 minutes
  //     false
  //   ),
  //   new Video(
  //     "Future of Space Tourism",
  //     "http://example.com",
  //     "Space Explorers",
  //     1000000,
  //     "5 hours ago",
  //     "https://placehold.co/1280x720",
  //     "What the future holds for space tourism and exploration.",
  //     "2025-01-28",
  //     2000,
  //     22000,
  //     1200,
  //     720, // 12 minutes
  //     false
  //   ),
  //   new Video(
  //     "The Rise of Virtual Reality",
  //     "http://example.com",
  //     "Virtual Worlds",
  //     1300000,
  //     "2 hours ago",
  //     "https://placehold.co/1280x720",
  //     "Virtual reality's impact on gaming, entertainment, and more.",
  //     "2025-01-28",
  //     3500,
  //     42000,
  //     1500,
  //     600, // 10 minutes
  //     false
  //   ),
  //   new Video(
  //     "Exploring the Future of Robotics",
  //     "http://example.com",
  //     "Robotica",
  //     700000,
  //     "4 hours ago",
  //     "https://placehold.co/1280x720",
  //     "Exploring how robotics is shaping industries of the future.",
  //     "2025-01-28",
  //     1800,
  //     25000,
  //     1100,
  //     900, // 15 minutes
  //     false
  //   )

  // ];
  const [videos, setVideos] = useState<Video[]>([]);

  useEffect(() => {
    fetch("/api/videos")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); 
        const transformedData = data.map((video: any) => ({
          ...video,
          views: video.views.toString(), // Convert BigInt
          likes: video.likes.toString(), // Convert BigInt
          dislikes: video.dislikes.toString(), // Convert BigInt
        }));
        setVideos(transformedData);
      })
      .catch((error) => console.error("Error fetching videos:", error));
  }, []);

  return (
    <div>
      <SearchBar />
      <div className="flex p-4 bg-background text-foreground">
        <SideBar />
        <div className="flex-1 pl-4">
          <VideoGrid videos={videos} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
