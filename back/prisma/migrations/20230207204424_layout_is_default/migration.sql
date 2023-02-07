/*
  Warnings:

  - Added the required column `isDefault` to the `layouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `layouts` ADD COLUMN `isDefault` BOOLEAN NOT NULL;
