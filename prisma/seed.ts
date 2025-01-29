import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.videos.createMany({
    data: [
      {
        title: 'Next.js Tutorial',
        url: 'https://example.com/video1',
        channel: 'Code Academy',
        views: 10000,
        since: '1 day ago',
        thumbnail_url: 'https://via.placeholder.com/150',
        description: 'Learn Next.js from scratch.',
        published_at: new Date(),
        comments: 50,
        likes: 500,
        dislikes: 10,
        duration: 600,
        is_live: false,
      },
      {
        title: 'PostgreSQL Crash Course',
        url: 'https://example.com/video2',
        channel: 'Database Expert',
        views: 25000,
        since: '3 days ago',
        thumbnail_url: 'https://via.placeholder.com/150',
        description: 'A complete PostgreSQL guide.',
        published_at: new Date(),
        comments: 100,
        likes: 1500,
        dislikes: 20,
        duration: 900,
        is_live: false,
      },
      {
        title: 'How to Use Prisma with Next.js',
        url: 'https://example.com/video3',
        channel: 'Dev Masters',
        views: 5000,
        since: '5 hours ago',
        thumbnail_url: 'https://via.placeholder.com/150',
        description: 'Step-by-step Prisma + Next.js integration.',
        published_at: new Date(),
        comments: 20,
        likes: 200,
        dislikes: 5,
        duration: 450,
        is_live: false,
      }
    ],
  });

  console.log('Dummy data added!');
}


main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
