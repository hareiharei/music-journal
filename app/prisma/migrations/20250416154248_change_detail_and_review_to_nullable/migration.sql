-- DropIndex
DROP INDEX "SetList_setListId_liveEventId_key";

-- AlterTable
ALTER TABLE "LiveEvent" ALTER COLUMN "startTime" DROP NOT NULL,
ALTER COLUMN "endTime" DROP NOT NULL,
ALTER COLUMN "detail" DROP NOT NULL,
ALTER COLUMN "review" DROP NOT NULL;
