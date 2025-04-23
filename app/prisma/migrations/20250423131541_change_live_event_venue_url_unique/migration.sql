/*
  Warnings:

  - A unique constraint covering the columns `[liveEventId,name,addressUrl]` on the table `LiveEventVenue` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "LiveEventVenue_liveEventId_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "LiveEventVenue_liveEventId_name_addressUrl_key" ON "LiveEventVenue"("liveEventId", "name", "addressUrl");
