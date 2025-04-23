/*
  Warnings:

  - A unique constraint covering the columns `[liveEventId,name]` on the table `LiveEventVenue` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LiveEventVenue_liveEventId_name_key" ON "LiveEventVenue"("liveEventId", "name");
