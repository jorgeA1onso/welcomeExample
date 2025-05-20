/*
  Warnings:

  - You are about to drop the `profession_s` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_s` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "profession_s" DROP CONSTRAINT "profession_s_id_user_profession_fkey";

-- DropTable
DROP TABLE "profession_s";

-- DropTable
DROP TABLE "user_s";

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT DEFAULT '',
    "last_name" TEXT DEFAULT '',
    "age" INTEGER DEFAULT 0,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professions" (
    "id" SERIAL NOT NULL,
    "name" TEXT DEFAULT '',
    "id_user" INTEGER,

    CONSTRAINT "professions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "professions" ADD CONSTRAINT "professions_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
