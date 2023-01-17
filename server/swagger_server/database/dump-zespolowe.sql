-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: foto_portfolio
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page` int NOT NULL,
  `image` text NOT NULL,
  `alt` text NOT NULL,
  `title` text NOT NULL,
  PRIMARY KEY (`id`),
  KEY `page` (`page`),
  CONSTRAINT `Images_ibfk_1` FOREIGN KEY (`page`) REFERENCES `Pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Images`
--

LOCK TABLES `Images` WRITE;
/*!40000 ALTER TABLE `Images` DISABLE KEYS */;
INSERT INTO `Images` VALUES (1,1,'swagger_server/images/1/DSC_4551.jpg','some alt','some_title'),(2,1,'swagger_server/images/1/DSC_4551.jpg','some alt','some_title'),(3,1,'swagger_server/images/1/Group-1-min.jpg','some alt','some_title'),(4,1,'swagger_server/images/1/Group-3-min.jpg','some alt','some_title'),(5,1,'swagger_server/images/1/Group-4-min.jpg','some alt','some_title'),(6,1,'swagger_server/images/1/Group-5-min.jpg','some alt','some_title'),(7,1,'swagger_server/images/1/Group-6-min.jpg','some alt','some_title'),(8,1,'swagger_server/images/1/Group-7-min.jpg','some alt','some_title'),(9,1,'swagger_server/images/1/Group-8-min.jpg','some alt','some_title');
/*!40000 ALTER TABLE `Images` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_image_delete` BEFORE DELETE ON `Images` FOR EACH ROW Begin
		DELETE FROM SectionImages WHERE SectionImages.image_id = old.id;
	end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Layouts`
--

DROP TABLE IF EXISTS `Layouts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Layouts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_template` tinyint(1) NOT NULL,
  `alias` varchar(255) NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Layouts`
--

LOCK TABLES `Layouts` WRITE;
/*!40000 ALTER TABLE `Layouts` DISABLE KEYS */;
INSERT INTO `Layouts` VALUES (1,0,'theme-default','{}'),(2,0,'theme-dark','{}');
/*!40000 ALTER TABLE `Layouts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MetaPages`
--

DROP TABLE IF EXISTS `MetaPages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MetaPages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page` int NOT NULL,
  `domain` text NOT NULL,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `page` (`page`),
  CONSTRAINT `MetaPages_ibfk_1` FOREIGN KEY (`page`) REFERENCES `Pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MetaPages`
--

LOCK TABLES `MetaPages` WRITE;
/*!40000 ALTER TABLE `MetaPages` DISABLE KEYS */;
INSERT INTO `MetaPages` VALUES (1,1,'test.com','test_page',NULL,NULL);
/*!40000 ALTER TABLE `MetaPages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MetaSubpages`
--

DROP TABLE IF EXISTS `MetaSubpages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MetaSubpages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subpage` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `path` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `subpage` (`subpage`),
  CONSTRAINT `MetaSubpages_ibfk_1` FOREIGN KEY (`subpage`) REFERENCES `Subpages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MetaSubpages`
--

LOCK TABLES `MetaSubpages` WRITE;
/*!40000 ALTER TABLE `MetaSubpages` DISABLE KEYS */;
INSERT INTO `MetaSubpages` VALUES (1,1,'test','/test','test_title','test_description'),(2,2,'test2','/test2','test_title2','test_description2');
/*!40000 ALTER TABLE `MetaSubpages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Pages`
--

DROP TABLE IF EXISTS `Pages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Pages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `layout` int NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `layout` (`layout`),
  CONSTRAINT `Pages_ibfk_1` FOREIGN KEY (`layout`) REFERENCES `Layouts` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Pages`
--

LOCK TABLES `Pages` WRITE;
/*!40000 ALTER TABLE `Pages` DISABLE KEYS */;
INSERT INTO `Pages` VALUES (1,1,'{\"key1\": \"value1\", \"key2\": \"value2\"}');
/*!40000 ALTER TABLE `Pages` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_page_delete` BEFORE DELETE ON `Pages` FOR EACH ROW Begin
    		DELETE FROM Subpages where Subpages.page = old.id;
		DELETE FROM Socials where Socials.page = old.id;
		DELETE FROM MetaPages where MetaPages.page = old.id;
		DELETE FROM Images WHERE Images.page = old.id;
	end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `SectionImages`
--

DROP TABLE IF EXISTS `SectionImages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `SectionImages` (
  `image_id` int NOT NULL,
  `section_id` int NOT NULL,
  `pos` int NOT NULL,
  KEY `image_id` (`image_id`),
  KEY `section_id` (`section_id`),
  CONSTRAINT `SectionImages_ibfk_1` FOREIGN KEY (`image_id`) REFERENCES `Images` (`id`),
  CONSTRAINT `SectionImages_ibfk_2` FOREIGN KEY (`section_id`) REFERENCES `Sections` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `SectionImages`
--

LOCK TABLES `SectionImages` WRITE;
/*!40000 ALTER TABLE `SectionImages` DISABLE KEYS */;
/*!40000 ALTER TABLE `SectionImages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sections`
--

DROP TABLE IF EXISTS `Sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `subpage` int NOT NULL,
  `alias` varchar(255) NOT NULL,
  `pos` int NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `subpage` (`subpage`),
  CONSTRAINT `Sections_ibfk_1` FOREIGN KEY (`subpage`) REFERENCES `Subpages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sections`
--

LOCK TABLES `Sections` WRITE;
/*!40000 ALTER TABLE `Sections` DISABLE KEYS */;
INSERT INTO `Sections` VALUES (2,1,'slider_section',1,'{\"slides\": [{\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/R3JhM0J/Group-1-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/VDnKX0R/Group-3-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/zrQR45k/Group-8-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/9vqcJK3/Group-4-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/vJzpDGF/Group-6-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/KL295kL/Group-7-min.jpg\", \"title\": \"Title of image\"}]}'),(3,1,'gallery_section',1,'{\"images\": [{\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/R3JhM0J/Group-1-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/VDnKX0R/Group-3-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/zrQR45k/Group-8-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/9vqcJK3/Group-4-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/vJzpDGF/Group-6-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/KL295kL/Group-7-min.jpg\", \"title\": \"Title of image\"}]}'),(4,1,'jumbotron_section',1,'{\"image\": {\"alt\": \"Alternative text\", \"path\": \"https://i.ibb.co/R3JhM0J/Group-1-min.jpg\", \"title\": \"Title of image\"}, \"header\": \"Header\", \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}'),(5,1,'textfield_section',1,'{\"header\": \"Header\", \"description\": \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"}'),(6,1,'social_media_section',1,'{\"links\": [{\"icon\": \"https://cdn-icons-png.flaticon.com/512/1077/1077042.png\", \"header\": \"/matis1\", \"preview\": \"https://picsum.photos/id/237/300/300\"}, {\"icon\": \"https://cdn-icons-png.flaticon.com/512/747/747374.png\", \"header\": \"/matis2\", \"preview\": \"https://picsum.photos/id/40/300/300\"}, {\"icon\": \"https://cdn-icons-png.flaticon.com/512/1077/1077046.png\", \"header\": \"/matis3\", \"preview\": \"https://picsum.photos/id/100/300/300\"}], \"header\": \"Social Media\"}'),(7,2,'gallery_section',1,'{\"images\": [{\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/R3JhM0J/Group-1-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/VDnKX0R/Group-3-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/zrQR45k/Group-8-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/9vqcJK3/Group-4-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/c6Kpn9Z/Group-5-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/vJzpDGF/Group-6-min.jpg\", \"title\": \"Title of image\"}, {\"alt\": \"Alternative text\", \"image\": \"https://i.ibb.co/KL295kL/Group-7-min.jpg\", \"title\": \"Title of image\"}]}');
/*!40000 ALTER TABLE `Sections` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_section_delete` BEFORE DELETE ON `Sections` FOR EACH ROW Begin
		DELETE FROM SectionImages WHERE SectionImages.section_id = old.id;
        
	end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Socials`
--

DROP TABLE IF EXISTS `Socials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Socials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page` int NOT NULL,
  `alias` varchar(255) NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `page` (`page`),
  CONSTRAINT `Socials_ibfk_1` FOREIGN KEY (`page`) REFERENCES `Pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Socials`
--

LOCK TABLES `Socials` WRITE;
/*!40000 ALTER TABLE `Socials` DISABLE KEYS */;
INSERT INTO `Socials` VALUES (1,1,'facebook','{\"key1\": \"value1\", \"key2\": \"value2\"}');
/*!40000 ALTER TABLE `Socials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subpages`
--

DROP TABLE IF EXISTS `Subpages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Subpages` (
  `id` int NOT NULL AUTO_INCREMENT,
  `page` int NOT NULL,
  `pos` int NOT NULL,
  `value` json NOT NULL,
  PRIMARY KEY (`id`),
  KEY `page` (`page`),
  CONSTRAINT `Subpages_ibfk_1` FOREIGN KEY (`page`) REFERENCES `Pages` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subpages`
--

LOCK TABLES `Subpages` WRITE;
/*!40000 ALTER TABLE `Subpages` DISABLE KEYS */;
INSERT INTO `Subpages` VALUES (1,1,1,'{\"meta\": {\"name\": \"Home\", \"path\": \"/\", \"title\": \"It is a test title\", \"description\": \"It is a test description\"}}'),(2,1,2,'{\"meta\": {\"name\": \"About\", \"path\": \"/about\", \"title\": \"About\", \"description\": \"About description\"}}'),(3,1,3,'{\"meta\": {\"name\": \"Contact\", \"path\": \"/contact\", \"title\": \"It is a test title\", \"description\": \"It is a test description\"}}'),(4,1,4,'{\"meta\": {\"name\": \"Test\", \"path\": \"/test\", \"title\": \"Test title\", \"description\": \"test description\"}}');
/*!40000 ALTER TABLE `Subpages` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_subpage_delete` BEFORE DELETE ON `Subpages` FOR EACH ROW Begin
		DELETE FROM MetaSubpages WHERE MetaSubpages.subpage = old.id;
        DELETE FROM Sections WHERE Sections.subpage = old.id;
	end */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Dumping routines for database 'foto_portfolio'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-18  0:07:38
