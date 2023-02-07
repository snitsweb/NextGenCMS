-- CreateTable
CREATE TABLE `pages` (
    `id` VARCHAR(191) NOT NULL,
    `path` VARCHAR(191) NOT NULL,
    `alias` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `status` ENUM('PUBLISHED', 'DRAFT') NOT NULL DEFAULT 'DRAFT',
    `title` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `schema` JSON NULL,
    `value` JSON NULL,
    `config` JSON NULL,

    UNIQUE INDEX `pages_path_key`(`path`),
    UNIQUE INDEX `pages_alias_key`(`alias`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `settings` (
    `name` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `layouts` (
    `id` VARCHAR(191) NOT NULL,
    `alias` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `primaryColor` VARCHAR(191) NOT NULL,
    `secondaryColor` VARCHAR(191) NOT NULL,
    `primaryLightColor` VARCHAR(191) NOT NULL,
    `secondaryLightColor` VARCHAR(191) NOT NULL,
    `primaryBackgroundColor` VARCHAR(191) NOT NULL,
    `secondaryBackgroundColor` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `layouts_alias_key`(`alias`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
