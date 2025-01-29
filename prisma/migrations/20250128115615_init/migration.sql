-- CreateTable
CREATE TABLE "videos" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "url" TEXT NOT NULL,
    "channel" VARCHAR(255) NOT NULL,
    "views" BIGINT DEFAULT 0,
    "since" VARCHAR(100),
    "thumbnail_url" TEXT,
    "description" TEXT,
    "published_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "comments" INTEGER DEFAULT 0,
    "likes" INTEGER DEFAULT 0,
    "dislikes" INTEGER DEFAULT 0,
    "duration" INTEGER NOT NULL,
    "is_live" BOOLEAN DEFAULT false,

    CONSTRAINT "videos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "videos_url_key" ON "videos"("url");
