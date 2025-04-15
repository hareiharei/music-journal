-- CreateTable
CREATE TABLE "User" (
    "userId" UUID NOT NULL,
    "userName" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "UserLiveEvent" (
    "userLiveEventId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "liveEventId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "UserLiveEvent_pkey" PRIMARY KEY ("userLiveEventId")
);

-- CreateTable
CREATE TABLE "LiveEvent" (
    "liveEventId" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "startTime" TIME NOT NULL,
    "endTime" TIME NOT NULL,
    "detail" TEXT NOT NULL,
    "review" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "LiveEvent_pkey" PRIMARY KEY ("liveEventId")
);

-- CreateTable
CREATE TABLE "LiveEventVenue" (
    "liveEventVenueId" UUID NOT NULL,
    "liveEventId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "addressUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "LiveEventVenue_pkey" PRIMARY KEY ("liveEventVenueId")
);

-- CreateTable
CREATE TABLE "LiveEventArtist" (
    "liveEventArtistId" UUID NOT NULL,
    "liveEventId" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "spotifyArtistUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "LiveEventArtist_pkey" PRIMARY KEY ("liveEventArtistId")
);

-- CreateTable
CREATE TABLE "SetList" (
    "setListId" UUID NOT NULL,
    "liveEventId" UUID NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "SetList_pkey" PRIMARY KEY ("setListId")
);

-- CreateTable
CREATE TABLE "SetListSong" (
    "setListSongId" UUID NOT NULL,
    "setListId" UUID NOT NULL,
    "order" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "artistName" TEXT NOT NULL,
    "spotifySongUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "SetListSong_pkey" PRIMARY KEY ("setListSongId")
);

-- CreateTable
CREATE TABLE "Photo" (
    "photoId" UUID NOT NULL,
    "liveEventId" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "photoUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "Photo_pkey" PRIMARY KEY ("photoId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "UserLiveEvent_userId_liveEventId_key" ON "UserLiveEvent"("userId", "liveEventId");

-- CreateIndex
CREATE UNIQUE INDEX "SetList_liveEventId_key" ON "SetList"("liveEventId");

-- CreateIndex
CREATE UNIQUE INDEX "SetList_setListId_liveEventId_key" ON "SetList"("setListId", "liveEventId");

-- AddForeignKey
ALTER TABLE "UserLiveEvent" ADD CONSTRAINT "UserLiveEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserLiveEvent" ADD CONSTRAINT "UserLiveEvent_liveEventId_fkey" FOREIGN KEY ("liveEventId") REFERENCES "LiveEvent"("liveEventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveEventVenue" ADD CONSTRAINT "LiveEventVenue_liveEventId_fkey" FOREIGN KEY ("liveEventId") REFERENCES "LiveEvent"("liveEventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveEventArtist" ADD CONSTRAINT "LiveEventArtist_liveEventId_fkey" FOREIGN KEY ("liveEventId") REFERENCES "LiveEvent"("liveEventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetList" ADD CONSTRAINT "SetList_liveEventId_fkey" FOREIGN KEY ("liveEventId") REFERENCES "LiveEvent"("liveEventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SetListSong" ADD CONSTRAINT "SetListSong_setListId_fkey" FOREIGN KEY ("setListId") REFERENCES "SetList"("setListId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Photo" ADD CONSTRAINT "Photo_liveEventId_fkey" FOREIGN KEY ("liveEventId") REFERENCES "LiveEvent"("liveEventId") ON DELETE RESTRICT ON UPDATE CASCADE;
