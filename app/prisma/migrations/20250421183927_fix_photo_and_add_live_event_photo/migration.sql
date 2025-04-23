/*
  Warnings:

  - You are about to drop the column `description` on the `Photo` table. All the data in the column will be lost.
  - You are about to drop the column `liveEventId` on the `Photo` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photo" DROP CONSTRAINT "Photo_liveEventId_fkey";

-- AlterTable
ALTER TABLE "Photo" DROP COLUMN "description",
DROP COLUMN "liveEventId";

-- CreateTable
CREATE TABLE "LiveEventPhoto" (
    "liveEventPhotoId" UUID NOT NULL,
    "liveEventId" UUID NOT NULL,
    "photoId" UUID NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,
    "deletedAt" TIMESTAMPTZ,

    CONSTRAINT "LiveEventPhoto_pkey" PRIMARY KEY ("liveEventPhotoId")
);

-- AddForeignKey
ALTER TABLE "LiveEventPhoto" ADD CONSTRAINT "LiveEventPhoto_liveEventId_fkey" FOREIGN KEY ("liveEventId") REFERENCES "LiveEvent"("liveEventId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiveEventPhoto" ADD CONSTRAINT "LiveEventPhoto_photoId_fkey" FOREIGN KEY ("photoId") REFERENCES "Photo"("photoId") ON DELETE RESTRICT ON UPDATE CASCADE;
