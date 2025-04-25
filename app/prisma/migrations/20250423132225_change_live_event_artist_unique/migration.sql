/*
  Warnings:

  - A unique constraint covering the columns `[liveEventId,name,spotifyArtistUrl]` on the table `LiveEventArtist` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "LiveEventArtist_liveEventId_name_spotifyArtistUrl_key" ON "LiveEventArtist"("liveEventId", "name", "spotifyArtistUrl");
