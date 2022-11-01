-- MariaDB dump 10.19  Distrib 10.4.19-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: fab4
-- ------------------------------------------------------
-- Server version	10.4.19-MariaDB

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
-- Table structure for table `AsignacionCaso`
--

DROP TABLE IF EXISTS `AsignacionCaso`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `AsignacionCaso` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Ticket` int(10) unsigned NOT NULL,
  `Voluntaria` int(10) unsigned NOT NULL,
  `Estatus` int(10) unsigned NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `idAsignacion de caso_UNIQUE` (`id`),
  KEY `fk_AsignacionCaso_Tickets1_idx` (`Ticket`),
  KEY `fk_AsignacionCaso_Usuaria1_idx` (`Voluntaria`),
  KEY `fk_AsignacionCaso_CatEstatus1_idx` (`Estatus`),
  CONSTRAINT `fk_AsignacionCaso_CatEstatus1` FOREIGN KEY (`Estatus`) REFERENCES `CatEstatus` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_AsignacionCaso_Tickets1` FOREIGN KEY (`Ticket`) REFERENCES `Ticket` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_AsignacionCaso_Usuaria1` FOREIGN KEY (`Voluntaria`) REFERENCES `Usuaria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `AsignacionCaso`
--

LOCK TABLES `AsignacionCaso` WRITE;
/*!40000 ALTER TABLE `AsignacionCaso` DISABLE KEYS */;
INSERT INTO `AsignacionCaso` VALUES (1,1,1,1,'2022-04-29 16:08:38','2022-04-29 16:08:38'),(4,1,17,1,'2022-04-29 16:08:39','2022-04-29 16:08:39'),(6,17,1,1,'2022-04-29 16:08:39','2022-05-02 03:25:42'),(7,1,1,1,'2022-04-29 16:08:39','2022-04-29 16:08:39'),(8,1,1,1,'2022-04-29 16:08:39','2022-04-29 16:08:39'),(14,19,1,1,'2022-05-03 02:31:53','2022-05-03 02:31:53'),(18,1,1,1,'2022-05-03 20:57:14','2022-05-03 20:57:14'),(19,1,1,1,'2022-05-03 20:57:38','2022-05-03 20:57:38'),(25,67,18,1,'2022-05-07 20:05:07','2022-05-20 19:30:54'),(26,50,42,1,'2022-05-07 21:51:29','2022-05-07 21:51:29'),(27,83,42,1,'2022-05-14 01:26:38','2022-05-14 01:26:38'),(28,87,42,1,'2022-05-23 21:32:11','2022-05-26 15:52:57'),(29,86,18,1,'2022-05-26 17:27:11','2022-05-26 17:27:11');
/*!40000 ALTER TABLE `AsignacionCaso` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CatEstados`
--

DROP TABLE IF EXISTS `CatEstados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CatEstados` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Estado` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idtable1_UNIQUE` (`id`),
  UNIQUE KEY `Nombre_UNIQUE` (`Estado`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CatEstados`
--

LOCK TABLES `CatEstados` WRITE;
/*!40000 ALTER TABLE `CatEstados` DISABLE KEYS */;
INSERT INTO `CatEstados` VALUES (1,'Aguascalientes'),(2,'Baja California'),(3,'Baja California Sur'),(4,'Campeche'),(9,'CDMX'),(7,'Chiapas'),(8,'Chihuahua'),(5,'Coahuila'),(6,'Colima'),(10,'Durango'),(33,'Extranjero'),(11,'Guanajuato'),(12,'Guerrero'),(13,'Hidalgo'),(14,'Jalisco'),(15,'México'),(16,'Michoacán de Ocampo'),(17,'Morelos'),(18,'Nayarit'),(34,'No Especificado'),(19,'Nuevo León'),(20,'Oaxaca de Juárez'),(21,'Puebla'),(22,'Querétaro'),(23,'Quintana Roo'),(24,'San Luis Potosí'),(25,'Sinaloa'),(26,'Sonora'),(27,'Tabasco'),(28,'Tamaulipas'),(29,'Tlaxcala'),(30,'Veracruz'),(31,'Yucatán'),(32,'Zacatecas');
/*!40000 ALTER TABLE `CatEstados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CatEstatus`
--

DROP TABLE IF EXISTS `CatEstatus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CatEstatus` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(20) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idtable1_UNIQUE` (`id`),
  UNIQUE KEY `Nombre_UNIQUE` (`Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CatEstatus`
--

LOCK TABLES `CatEstatus` WRITE;
/*!40000 ALTER TABLE `CatEstatus` DISABLE KEYS */;
INSERT INTO `CatEstatus` VALUES (1,'Activo',NULL),(2,'Sin asignar',NULL),(3,'Baja',NULL),(4,'No verificado',NULL),(5,'Concluido',NULL);
/*!40000 ALTER TABLE `CatEstatus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CatRoles`
--

DROP TABLE IF EXISTS `CatRoles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CatRoles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(10) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idtable1_UNIQUE` (`id`),
  UNIQUE KEY `Nombre_UNIQUE` (`Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CatRoles`
--

LOCK TABLES `CatRoles` WRITE;
/*!40000 ALTER TABLE `CatRoles` DISABLE KEYS */;
INSERT INTO `CatRoles` VALUES (1,'Visitante','Sin indicio de violencia'),(2,'Victima','sufre de violencia de algun tipo'),(3,'Voluntaria','ayuda a una vitima'),(4,'Coordinado','dirije a las volunatias');
/*!40000 ALTER TABLE `CatRoles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CatSemaforo`
--

DROP TABLE IF EXISTS `CatSemaforo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CatSemaforo` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(45) NOT NULL,
  `Descripcion` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `Nombre_UNIQUE` (`Nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CatSemaforo`
--

LOCK TABLES `CatSemaforo` WRITE;
/*!40000 ALTER TABLE `CatSemaforo` DISABLE KEYS */;
INSERT INTO `CatSemaforo` VALUES (1,'No en riesgo','Persona que no  sufre violencia'),(2,'Muy bajo riesgo','Perona con violencia'),(3,'Poco riesgo','Es urgente atender esta persona'),(4,'Modereado riesgo',NULL),(5,'5',NULL),(6,'6',NULL),(7,'7',NULL),(8,'8',NULL),(9,'9',NULL),(10,'10',NULL);
/*!40000 ALTER TABLE `CatSemaforo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `CatTokens`
--

DROP TABLE IF EXISTS `CatTokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CatTokens` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(25) NOT NULL,
  `Descripcion` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CatTokens`
--

LOCK TABLES `CatTokens` WRITE;
/*!40000 ALTER TABLE `CatTokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `CatTokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Emergencia`
--

DROP TABLE IF EXISTS `Emergencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Emergencia` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `VIctima` int(10) unsigned NOT NULL,
  `Estatus` int(10) unsigned NOT NULL DEFAULT 2,
  `Voluntaria_Atendio` int(10) unsigned DEFAULT NULL,
  `Ubicacion` varchar(45) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Emergencia_Usuaria1_idx` (`VIctima`),
  KEY `fk_Emergencia_CatEstatus1_idx` (`Estatus`),
  KEY `fk_Emergencia_Usuaria2_idx` (`Voluntaria_Atendio`),
  CONSTRAINT `fk_Emergencia_CatEstatus1` FOREIGN KEY (`Estatus`) REFERENCES `CatEstatus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Emergencia_Usuaria1` FOREIGN KEY (`VIctima`) REFERENCES `Usuaria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_Emergencia_Usuaria2` FOREIGN KEY (`Voluntaria_Atendio`) REFERENCES `Usuaria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Emergencia`
--

LOCK TABLES `Emergencia` WRITE;
/*!40000 ALTER TABLE `Emergencia` DISABLE KEYS */;
INSERT INTO `Emergencia` VALUES (1,1,2,NULL,'{\"latitud\":19.5100339,\"longitud\":-99.1648907}','2022-05-26 04:15:33','2022-05-26 04:15:33'),(2,1,2,NULL,'{\"latitud\":19.5100339,\"longitud\":-99.1648907}','2022-05-26 04:15:35','2022-05-26 04:15:35'),(3,1,2,NULL,'{\"latitud\":19.5100412,\"longitud\":-99.1648767}','2022-05-26 06:17:29','2022-05-26 06:17:29'),(4,1,2,NULL,'{\"latitud\":19.510027,\"longitud\":-99.1648927}','2022-05-26 06:27:38','2022-05-26 06:27:38'),(5,1,2,NULL,'{\"latitud\":19.5100212,\"longitud\":-99.1648904}','2022-05-26 06:52:51','2022-05-26 06:52:51'),(6,1,1,NULL,'{\"latitud\":19.5100212,\"longitud\":-99.1648904}','2022-05-26 06:57:53','2022-05-26 07:07:36'),(7,1,1,NULL,'{\"latitud\":19.5100213,\"longitud\":-99.1648928}','2022-05-26 07:07:02','2022-05-26 07:09:03'),(8,1,1,NULL,'{\"latitud\":null,\"longitud\":null}','2022-05-26 07:10:04','2022-05-26 07:10:14'),(9,1,1,NULL,'{\"latitud\":null,\"longitud\":null}','2022-05-26 07:10:53','2022-05-26 07:11:15'),(10,1,2,NULL,'{\"latitud\":19.5100029,\"longitud\":-99.1649328}','2022-05-26 07:18:00','2022-05-26 07:18:00'),(11,1,2,NULL,'{\"latitud\":19.5100356,\"longitud\":-99.1649025}','2022-05-26 07:22:17','2022-05-26 07:22:17'),(12,1,1,1,'{\"latitud\":19.5100206,\"longitud\":-99.1649131}','2022-05-26 07:29:50','2022-05-26 07:29:52'),(13,1,1,1,'{\"latitud\":19.51003,\"longitud\":-99.1648946}','2022-05-26 07:59:36','2022-05-26 07:59:40'),(14,1,1,1,'{\"latitud\":19.51003,\"longitud\":-99.1648946}','2022-05-26 08:01:35','2022-05-26 08:01:44'),(15,1,1,1,'{\"latitud\":19.5100428,\"longitud\":-99.1648807}','2022-05-26 11:14:07','2022-05-26 11:14:10'),(16,1,1,1,'{\"latitud\":19.5100227,\"longitud\":-99.164892}','2022-05-26 11:18:35','2022-05-26 11:18:38'),(17,1,1,1,'{\"latitud\":19.509991,\"longitud\":-99.1649308}','2022-05-26 11:20:16','2022-05-26 11:20:17'),(18,1,1,1,'{\"latitud\":19.509991,\"longitud\":-99.1649308}','2022-05-26 11:20:26','2022-05-26 11:20:31'),(19,1,1,1,'{\"latitud\":19.510034,\"longitud\":-99.1648832}','2022-05-26 11:25:29','2022-05-26 11:25:31'),(20,1,1,1,'{\"latitud\":null,\"longitud\":null}','2022-05-26 11:29:06','2022-05-26 11:29:09'),(21,1,1,1,'{\"latitud\":19.510034,\"longitud\":-99.1648832}','2022-05-26 11:29:16','2022-05-26 11:29:19'),(22,1,2,NULL,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:30:19','2022-05-26 11:30:19'),(23,1,1,1,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:30:20','2022-05-26 11:30:30'),(24,1,1,1,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:31:56','2022-05-26 11:32:02'),(25,1,1,1,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:31:58','2022-05-26 11:31:59'),(26,1,1,1,'{\"latitud\":null,\"longitud\":null}','2022-05-26 11:35:14','2022-05-26 11:35:22'),(27,1,1,1,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:35:17','2022-05-26 11:35:20'),(28,1,1,1,'{\"latitud\":null,\"longitud\":null}','2022-05-26 11:37:00','2022-05-26 11:37:46'),(29,1,1,1,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:37:12','2022-05-26 11:37:47'),(30,1,1,1,'{\"latitud\":null,\"longitud\":null}','2022-05-26 11:39:58','2022-05-26 11:40:00'),(31,1,1,1,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:40:02','2022-05-26 11:40:05'),(32,1,1,1,'{\"latitud\":null,\"longitud\":null}','2022-05-26 11:40:10','2022-05-26 11:40:13'),(33,1,2,NULL,'{\"latitud\":null,\"longitud\":null}','2022-05-26 11:40:11','2022-05-26 11:40:11'),(34,1,2,NULL,'{\"latitud\":19.5100364,\"longitud\":-99.1648815}','2022-05-26 11:40:17','2022-05-26 11:40:17'),(35,1,1,1,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:54:25','2022-05-26 12:54:27'),(36,1,1,1,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:54:26','2022-05-26 12:54:30'),(37,1,2,NULL,'{\"latitud\":19.5100296,\"longitud\":-99.164891}','2022-05-26 12:55:24','2022-05-26 12:55:24'),(38,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:14','2022-05-26 12:56:14'),(39,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:14','2022-05-26 12:56:14'),(40,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:15','2022-05-26 12:56:15'),(41,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:16','2022-05-26 12:56:16'),(42,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:18','2022-05-26 12:56:18'),(43,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:18','2022-05-26 12:56:18'),(44,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:18','2022-05-26 12:56:18'),(45,42,2,NULL,'{\"latitud\":19.5100296,\"longitud\":-99.164891}','2022-05-26 12:56:30','2022-05-26 12:56:30'),(46,1,1,42,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 12:56:58','2022-05-26 12:57:23'),(47,42,2,NULL,'{\"latitud\":19.5100431,\"longitud\":-99.1648723}','2022-05-26 13:27:44','2022-05-26 13:27:44'),(48,1,2,NULL,'{\"latitud\":null,\"longitud\":null}','2022-05-26 13:30:14','2022-05-26 13:30:14'),(49,1,1,1,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 13:30:19','2022-05-26 13:30:26'),(50,1,2,NULL,'{\"latitud\":19.5100355,\"longitud\":-99.1648835}','2022-05-26 14:28:10','2022-05-26 14:28:10'),(51,1,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:46:39','2022-05-26 15:46:39'),(52,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:47:53','2022-05-26 15:47:53'),(53,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:47:58','2022-05-26 15:47:58'),(54,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:49:21','2022-05-26 15:49:21'),(55,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:49:54','2022-05-26 15:49:54'),(56,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:50:51','2022-05-26 15:50:51'),(57,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:51:05','2022-05-26 15:51:05'),(58,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:51:16','2022-05-26 15:51:16'),(59,42,1,1,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:51:34','2022-05-26 15:51:41'),(60,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:53:22','2022-05-26 15:53:22'),(61,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:53:27','2022-05-26 15:53:27'),(62,1,2,NULL,'{\"latitud\":19.5041337,\"longitud\":-99.1473715}','2022-05-26 15:53:43','2022-05-26 15:53:43'),(63,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:54:53','2022-05-26 15:54:53'),(64,42,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:55:22','2022-05-26 15:55:22'),(65,228,2,NULL,'{\"latitud\":19.504147,\"longitud\":-99.1470319}','2022-05-26 15:55:34','2022-05-26 15:55:34'),(66,228,2,NULL,'{\"latitud\":19.5041481,\"longitud\":-99.1470269}','2022-05-26 16:25:20','2022-05-26 16:25:20'),(67,228,2,NULL,'{\"latitud\":19.5041481,\"longitud\":-99.1470269}','2022-05-26 16:25:22','2022-05-26 16:25:22'),(68,1,2,NULL,'{\"latitud\":19.5041481,\"longitud\":-99.1470269}','2022-05-26 16:25:47','2022-05-26 16:25:47'),(69,228,2,NULL,'{\"latitud\":19.5041481,\"longitud\":-99.1470269}','2022-05-26 16:25:50','2022-05-26 16:25:50'),(70,1,2,NULL,'{\"latitud\":19.5041481,\"longitud\":-99.1470269}','2022-05-26 16:25:56','2022-05-26 16:25:56'),(71,1,2,NULL,'{\"latitud\":19.3888256,\"longitud\":-99.1657984}','2022-05-26 17:28:11','2022-05-26 17:28:11');
/*!40000 ALTER TABLE `Emergencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `RecuperacionPassMail`
--

DROP TABLE IF EXISTS `RecuperacionPassMail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `RecuperacionPassMail` (
  `token` varchar(45) NOT NULL,
  `Usuaria` int(10) unsigned NOT NULL DEFAULT 1,
  `Estatus` int(10) unsigned NOT NULL DEFAULT 1,
  `IpSolicitud` varchar(45) NOT NULL,
  `Navegador` varchar(25) NOT NULL,
  `SistemaOperativo` varchar(25) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`token`),
  UNIQUE KEY `tokens_index_UNIQUE` (`token`),
  KEY `fk_tokens_Usuaria1_idx` (`Usuaria`),
  KEY `fk_tokens_CatEstatus1_idx` (`Estatus`),
  CONSTRAINT `fk_Rtokens_Usuaria1` FOREIGN KEY (`Usuaria`) REFERENCES `Usuaria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_tokens_CatEstatus1` FOREIGN KEY (`Estatus`) REFERENCES `CatEstatus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `RecuperacionPassMail`
--

LOCK TABLES `RecuperacionPassMail` WRITE;
/*!40000 ALTER TABLE `RecuperacionPassMail` DISABLE KEYS */;
INSERT INTO `RecuperacionPassMail` VALUES ('1234',1,3,'123','Excel','Linux','2022-05-07 07:14:21','2022-05-09 06:08:11'),('123451234512345123451234512345123451234512345',1,3,'192.168.1.192','Excel','Linux','2022-05-01 03:58:55','2022-05-14 01:20:34'),('2022-05-07T16:14:56.286Z7CYetLB9fbOA7goB876bY',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-07 16:14:57','2022-05-07 16:32:58'),('2022-05-07T16:47:28.640ZyfGC9LONEZo2fqrvLCMHh',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-07 16:47:30','2022-05-07 16:50:13'),('2022-05-07T17:58:01.032ZxYSAaUXcGsI8VbNRcUBRq',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-07 17:58:02','2022-05-07 17:58:02'),('2022-05-07T19:31:25.868ZkEFBZ3TsCj0xhaYQAlmTB',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-07 19:31:27','2022-05-07 19:32:01'),('2022-05-07T19:57:30.264Zn30ywrkHLpxjKWpVyvWRr',1,1,'0.0.0.0','Chrome','Mac OS X','2022-05-07 19:57:31','2022-05-07 19:57:31'),('2022-05-07T19:58:21.158ZJVcTwyvwWsHVEihHDQfK6',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-07 19:58:22','2022-05-07 19:58:22'),('2022-05-07T19:58:50.804ZNvcgiTMGFfXRkxXnArDOj',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-07 19:58:51','2022-05-07 20:00:11'),('2022-05-07T21:41:23.547ZsU5Kzqr0GBJygOtTYALM6',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-07 21:41:25','2022-05-07 21:44:47'),('2022-05-07T21:41:47.674Z2mJlXyeXLsvtq3xuKdWme',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-07 21:41:48','2022-05-07 21:43:14'),('2022-05-08T08:46:04.695ZSKr8zrAZ7Xh1LbtRzIa3Q',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-08 08:46:05','2022-05-08 08:46:05'),('2022-05-08T08:49:18.112ZaxYzLcxgm5koYfD5AOSx4',1,1,'0.0.0.0','Chrome','Mac OS X','2022-05-08 08:49:19','2022-05-08 08:49:19'),('2022-05-08T08:49:26.330Zd8brQD5TjFCSL6u4Dd0qh',1,1,'0.0.0.0','Safari','Mac OS X','2022-05-08 08:49:27','2022-05-08 08:49:27'),('2022-05-09T00:46:30.729ZX8NoRKvHAWWTTjOvc7LNV',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 00:46:32','2022-05-09 00:46:32'),('2022-05-09T00:59:43.130ZxJfssSgV5JZ9VSZ2IwXtS',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 00:59:44','2022-05-09 00:59:44'),('2022-05-09T01:02:28.552ZcRWH6D1d2jHNKNlv4Xiwh',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 01:02:30','2022-05-09 01:02:30'),('2022-05-09T01:03:59.249Z41rEQ3vCo8WbBcM3nDaTj',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 01:04:00','2022-05-09 01:04:00'),('2022-05-09T02:41:45.610ZW9k8LZ2nRgQkA4ZDSB1IV',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 02:41:47','2022-05-09 02:41:47'),('2022-05-09T02:42:59.564Zz6fATpsX89C6rsm5xxUJ6',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 02:43:02','2022-05-09 02:43:02'),('2022-05-09T03:04:47.191Zq8CoZpzShBFEgd9MBW6to',1,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 03:04:48','2022-05-09 03:04:48'),('2022-05-09T03:47:27.867ZUpNV3r6gL8KhmVRne5h1h',7,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 03:47:29','2022-05-09 03:47:29'),('2022-05-09T03:55:32.546Zws3cEj2p2FTDpt5cSM2Yn',7,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 03:55:33','2022-05-09 03:55:33'),('2022-05-09T03:57:39.093ZysQxxBUXukOGskhICcqH1',7,3,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 03:57:40','2022-05-09 07:11:10'),('2022-05-09T07:06:43.049Zeva8B54LHLxaBVWqYm2Vo',7,3,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-09 07:06:44','2022-05-09 07:12:42'),('2022-05-09T08:03:14.847ZEnpvPN9Yzjjnyzvyg87nE',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-09 08:03:16','2022-05-09 08:03:16'),('2022-05-09T08:35:42.954ZT9ZUd2l6F6Z0mfZ8cLYvA',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-09 08:35:44','2022-05-09 08:36:46'),('2022-05-09T09:03:31.177ZBbkXOWIwCVBqCwE2JEp3v',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-09 09:03:32','2022-05-09 16:21:44'),('2022-05-13T07:25:12.185ZvpJsWImJXboIjX0jsdxhJ',7,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-13 07:25:13','2022-05-13 07:25:13'),('2022-05-13T07:36:02.313ZxYqaAnImWWbFCYl0r9pr8',7,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-13 07:36:03','2022-05-13 07:36:03'),('2022-05-14T01:16:48.513ZNa9oa8igP7Z957IkVE4kj',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-14 01:16:50','2022-05-14 01:16:50'),('2022-05-14T01:17:15.198ZqoRCRalQvSs4SQbVUh50V',7,3,'0.0.0.0','Chrome','Mac OS X','2022-05-14 01:17:16','2022-05-14 01:18:49'),('2022-05-19T21:20:40.075Zd8vddbBo4z3OQLeDeh6QD',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-19 21:20:40','2022-05-19 21:20:40'),('2022-05-19T21:21:41.955ZmN2DigRZKVWmLZAyX81rc',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-19 21:21:42','2022-05-19 21:21:42'),('2022-05-19T21:23:27.954ZFo3BDqxojdB11oAxFumDQ',7,1,'0.0.0.0','Chrome','Mac OS X','2022-05-19 21:23:28','2022-05-19 21:23:28'),('2022-05-19T21:25:01.815ZXdk0ZtFHjEuxBHjWK8uU9',7,1,'0.0.0.0','Navegador desconocido ','OS desconocido ','2022-05-19 21:25:02','2022-05-19 21:25:02'),('2022-05-20T17:01:45.008ZpJ2uMcfGIybZqqmGHSwGZ',42,1,'0.0.0.0','Chrome','Mac OS X','2022-05-20 17:01:46','2022-05-20 17:01:46'),('2022-05-20T22:19:14.599ZjOMe0jwd8tKBFswekAVhY',42,1,'0.0.0.0','Chrome','Mac OS X','2022-05-20 22:19:15','2022-05-20 22:19:15'),('2022-05-20T22:19:25.599ZUmzFcy1Q8rZCQAEUmXeDB',42,3,'0.0.0.0','Chrome','Mac OS X','2022-05-20 22:19:26','2022-05-20 22:21:07'),('2022-05-26T17:25:04.637ZrIYZsikhZ1zDTTQwVnx9t',42,3,'0.0.0.0','Chrome','linux','2022-05-26 17:25:06','2022-05-26 17:25:23');
/*!40000 ALTER TABLE `RecuperacionPassMail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Sessions`
--

DROP TABLE IF EXISTS `Sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Sessions`
--

LOCK TABLES `Sessions` WRITE;
/*!40000 ALTER TABLE `Sessions` DISABLE KEYS */;
INSERT INTO `Sessions` VALUES ('4syNpUBVYHb80R4JGXRQXXRA32W-uBmx','2022-10-31 04:36:24','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"usuaria\":{\"id\":1,\"Nombre\":\"Coordinadora\",\"ApellidoPaterno\":\"Menganita\",\"ApellidoMaterno\":\"Menganita\",\"NickName\":\"a\",\"Pass\":\"a\",\"FechaNacimiento\":\"2022-03-01\",\"Ciudad\":\"Menganita\",\"PerfilFB\":null,\"Email\":null,\"Telefono\":\"123\",\"Rol\":4,\"EntidadFederativa\":9,\"Estatus\":1,\"createdAt\":\"2022-04-29T16:08:31.000Z\",\"updatedAt\":\"2022-05-26T13:28:58.000Z\"}}','2022-10-30 04:36:24','2022-10-30 04:36:24'),('5izoaaikAv6m9X1QV_i62A1K9KE5lkfC','2022-10-31 04:47:06','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:47:06','2022-10-30 04:47:06'),('9Xfq2ApzcpGfHlhgfWCGuCJdcugIgoZK','2022-10-31 05:53:17','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"usuaria\":{\"id\":1,\"Nombre\":\"Coordinadora\",\"ApellidoPaterno\":\"Menganita\",\"ApellidoMaterno\":\"Menganita\",\"NickName\":\"a\",\"Pass\":\"a\",\"FechaNacimiento\":\"2022-03-01\",\"Ciudad\":\"Menganita\",\"PerfilFB\":null,\"Email\":null,\"Telefono\":\"123\",\"Rol\":4,\"EntidadFederativa\":9,\"Estatus\":1,\"createdAt\":\"2022-04-29T16:08:31.000Z\",\"updatedAt\":\"2022-05-26T13:28:58.000Z\"}}','2022-10-30 05:53:14','2022-10-30 05:53:17'),('eXxpaBJtHtIsr1pZujFsqH7K_AiZ9SEr','2022-10-31 04:36:38','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:36:38','2022-10-30 04:36:38'),('KZIG6kb-4CdK6e3Yg6IB0hkR0S21kJuw','2022-10-31 04:36:32','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:36:32','2022-10-30 04:36:32'),('mG4gZ5w4xy_ANaQgPKIirwNAUrSI7Wxx','2022-10-31 04:47:15','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"usuaria\":{\"id\":1,\"Nombre\":\"Coordinadora\",\"ApellidoPaterno\":\"Menganita\",\"ApellidoMaterno\":\"Menganita\",\"NickName\":\"a\",\"Pass\":\"a\",\"FechaNacimiento\":\"2022-03-01\",\"Ciudad\":\"Menganita\",\"PerfilFB\":null,\"Email\":null,\"Telefono\":\"123\",\"Rol\":4,\"EntidadFederativa\":9,\"Estatus\":1,\"createdAt\":\"2022-04-29T16:08:31.000Z\",\"updatedAt\":\"2022-05-26T13:28:58.000Z\"}}','2022-10-30 04:47:15','2022-10-30 04:47:15'),('Q34_rXZqGdXdAgG1qE6ymhIHNLs05rpQ','2022-10-31 04:36:43','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:36:43','2022-10-30 04:36:43'),('RT3EQyMsMhzZ9iLfCIvH0m5TQU3aHm7r','2022-10-31 04:47:18','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:47:18','2022-10-30 04:47:18'),('Si_95GcflGlR54uQFGq28H6URpBz23Tw','2022-10-31 04:47:11','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:47:11','2022-10-30 04:47:11'),('xkRTvJN9pCSg0q4v_4QC152ZEzSw26jI','2022-10-31 04:36:35','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:36:35','2022-10-30 04:36:35'),('xSbT1XU6LxEVJhD466TkWu5rz2F3m1d0','2022-10-31 04:35:03','{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}','2022-10-30 04:35:03','2022-10-30 04:35:03');
/*!40000 ALTER TABLE `Sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Ticket`
--

DROP TABLE IF EXISTS `Ticket`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Ticket` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Usuaria` int(10) unsigned NOT NULL,
  `Semaforo_id` int(10) unsigned NOT NULL DEFAULT 0,
  `Descripcion` text DEFAULT NULL,
  `Estatus` int(10) unsigned NOT NULL DEFAULT 1,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `idTickets_UNIQUE` (`id`),
  KEY `fk_Tickets_CatSemaforo1_idx` (`Semaforo_id`),
  KEY `fk_Tickets_Usuaria1_idx` (`Usuaria`),
  KEY `fk_Ticket_CatEstatus1_idx` (`Estatus`),
  CONSTRAINT `fk_Ticket_CatEstatus1` FOREIGN KEY (`Estatus`) REFERENCES `CatEstatus` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_Tickets_CatSemaforo1` FOREIGN KEY (`Semaforo_id`) REFERENCES `CatSemaforo` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `fk_Tickets_Usuaria1` FOREIGN KEY (`Usuaria`) REFERENCES `Usuaria` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Ticket`
--

LOCK TABLES `Ticket` WRITE;
/*!40000 ALTER TABLE `Ticket` DISABLE KEYS */;
INSERT INTO `Ticket` VALUES (1,1,1,'La Usuaria esta en peligro edita',1,'2022-04-29 16:08:37','2022-05-02 19:31:11'),(2,1,1,'sadsa sadsa sadsa sadsa sadsa sadsa sadsa ',1,'2022-05-03 02:37:51','2022-05-03 21:35:40'),(5,18,1,'Mi esposo me ha golpeado ',1,'2022-04-29 16:08:38','2022-05-02 03:24:36'),(17,7,1,'Tengo problemas de violencia con mi esposo edit',1,'2022-04-29 16:08:38','2022-05-02 03:25:17'),(19,19,1,'asdsaasasdsaasasdsaasasdsaas',1,'2022-05-02 07:17:22','2022-05-20 18:56:58'),(20,1,1,'sadsa sadsa sadsa sadsa sadsa ',2,'2022-05-03 02:37:35','2022-05-04 07:21:04'),(26,1,1,'ºaaaaaa asºaaaaaa asºaaaaaa asºaaaaaa asºaaaaaa as',2,'2022-05-05 00:36:26','2022-05-05 00:36:26'),(27,1,1,'ticket desde  victima',2,'2022-05-05 00:52:05','2022-05-05 00:52:05'),(29,1,5,'necesito ayuda ,,soy d México',2,'2022-05-06 08:03:55','2022-05-06 08:03:55'),(30,1,5,'necesito ayuda, soy de México Tlaxcala',2,'2022-05-06 08:04:57','2022-05-06 08:04:57'),(32,1,5,'yo me Llamo Judy tengo 45 Anos. vivo en Roma hace 13 Anos, soy colombiana, tube que salir de mi Pais y dejar Amis Hijos por que si no era asi mi exmarido me mataba',2,'2022-05-06 08:08:55','2022-05-06 08:08:55'),(33,1,6,'necesito ayuda soy madre de 3 hijos y mi esposo me maltrata',2,'2022-05-06 08:09:43','2022-05-06 08:09:43'),(34,1,3,'soy de Madrid y soy una mujer maltratada, Estela ya,se ha puesto en contacto conmigo y le he contado todo lo que me ha pasado',2,'2022-05-06 08:09:59','2022-05-06 08:09:59'),(35,1,4,'Mi nombre es María y tengo una prima en situación de violencia. por eso llegué aquí. soy de México, de Ciudad de México, ella es de Michoacán, de Penjamillo de Degollado',2,'2022-05-06 08:11:27','2022-05-06 08:11:27'),(36,1,3,'Vi un comentario sobre ayuda emocional',2,'2022-05-06 08:11:35','2022-05-06 08:11:35'),(37,1,5,'Soy de la CDMX, México, Soy una chica que esta ayudando a otra chica a salir de una relacion toxica con su novio, su novio esta anexado pero ella no tiene ningun apoyo de su familia, solo tiene a mi mama, a mi tio y a mi, nosotros le brindamos comida',2,'2022-05-06 08:12:08','2022-05-06 08:12:08'),(38,1,5,'Mallorca hola soy una chica de 26 años que hace un años sufrí de violencia el chico con el que nsduve hace vatios año me intento matar vivo con miedo me cuesta salir a la calle me es difícil encontrar un trabajo porque pienso que el se va aparecer actualmente tengo una pareja vivimos juntos y me trata bien pero vivo con el miedo que miex nos haga algo',2,'2022-05-06 08:12:44','2022-05-06 08:12:44'),(39,1,5,'Necesito ayuda estoy en Madrid y soy mexicana',2,'2022-05-06 08:12:58','2022-05-06 08:12:58'),(40,1,5,'Necesito ayuda estoy en Cali Colombia',2,'2022-05-06 08:13:22','2022-05-06 08:13:22'),(41,1,3,'Colombia realmente necesito ayuda y quiero a través de mi historia poder ayudar',2,'2022-05-06 08:13:37','2022-05-06 08:13:37'),(42,1,7,' denuncie al padre de mis hijos por maltrato en el ámbito familiar, este señor tuvo 6 meses de orden de alejamiento de mi hija y de mi. ',2,'2022-05-06 08:17:46','2022-05-06 08:17:46'),(43,1,8,' Durante estos 8 años hemos pasado de punto de encuentro  mis hijos han sufrido insultos hacia ellos y hacia mi y mi familia, empujones... y creo que más de lo que me han contado. al estar con su padre me cuentan que este les ha cogido por el cuello,fuimos a médicos y al día siguiente pusimos la denuncia. tengo miedon por ellos estoy incumpliendo el régimen de visitas',1,'2022-05-06 08:17:51','2022-05-07 20:05:07'),(44,1,5,' soy de Chile, antofagasta, quisiera entrar al grupo para recibor ayida, ya que me estoy separando con un hijo de 1 año. ha sido dificil, y me gustaria recibir apoyo',2,'2022-05-06 08:18:19','2022-05-06 08:18:19'),(45,1,4,'hola soy yuri actualmente vivo en España e recurrido a este grupo en busca de ayuda, soy víctima de violencia de género y me gustaría ser asesorada en cuanto a todas las dudas que tengo ,y por supuesto si puedo aportar en algo también',2,'2022-05-06 08:18:35','2022-05-06 08:18:35'),(46,1,4,'Soy de Costa Rica, si necesito ayuda',2,'2022-05-06 08:18:48','2022-05-06 08:18:48'),(47,1,7,'Xq necesito ayuda',2,'2022-05-06 08:19:00','2022-05-06 08:19:00'),(48,1,8,'necesito ayuda he sido maltratada abusada sexual mente maltrato de mi padre de mi pareja fui abusada por varios hombres que nunca vi la cara hoy en dia tengo bastantes problemas psicológicos tengo 3 hijos los cuales no he podido responder por ellos no consigo empleó',2,'2022-05-06 08:19:31','2022-05-06 08:19:31'),(49,1,8,'necesito ayuda he sido maltratada abusada sexual mente maltrato de mi padre de mi pareja fui abusada por varios hombres que nunca vi la cara hoy en dia tengo bastantes problemas psicológicos tengo 3 hijos los cuales no he podido responder por ellos no consigo empleó',2,'2022-05-06 08:19:53','2022-05-06 08:19:53'),(50,1,9,'Yo he sido mujer maltratada y al igual que la promotora de esta iniciativa, tuvo que decírmelo la policía al recoger mi declaración ya que yo estaba en el Hospital (urgencias) y por las lesiones que presentaba fueron allí, (en Córdoba) quienes activaron el protocolo de violencia y por eso apareció la Policía Nacional de Córdoba. Eso fue lo que me salvó, si llega aparecer otro cuerpo no lo hubiese contado. ...',1,'2022-05-06 08:20:30','2022-05-07 21:51:29'),(51,1,8,'...Ahora mismo estoy en baja, llevo dos años en esta situación ya que mi cabeza no termina de sacar lo que he pasado por muchos años que han pasado ya....',2,'2022-05-06 08:20:38','2022-05-06 08:20:38'),(52,1,7,'fui maltratada durante 25 años ahira lo hace economicamente y emocionlmente por su impago en todo lo que se firmo en acuerdo divorcio',2,'2022-05-06 08:21:34','2022-05-07 20:08:57'),(53,1,6,'soy hija de una mujer que ha sufrido violencia machista por parte de mi padre y recibo malos tratos psicológicos continuados por parte de mi padre',2,'2022-05-06 08:21:58','2022-05-06 08:21:58'),(54,1,6,'Me llamó Tatiana soy de Medellín Colombia.quisierad estar en el grupo ya que estoy embarazada y he sido victima de abuso',2,'2022-05-06 08:22:19','2022-05-06 08:22:19'),(55,1,6,'MSoy cubana,puedo ayudar y necesito ayuda',2,'2022-05-06 08:22:35','2022-05-06 08:22:35'),(56,1,7,'soy de argentina... hace poco me di cuenta q vivo violencia emocial .. aunqur fisica tambien (fue solo una vez)',2,'2022-05-06 08:22:53','2022-05-06 08:22:53'),(57,1,4,'Me encantaría hablar con alguien para ayudarme a salir de una relación con abusos me encuentro en México estado de México Coacalco',2,'2022-05-06 08:23:12','2022-05-06 08:23:12'),(58,1,8,'estoy casada con un policía y me tiene amenazada de muerte y no me deja ver a mis hijos tiene familiares con poder en la justicia y no puedo ganar los juicios que me acusa por solo dañarme',2,'2022-05-06 08:23:34','2022-05-06 08:23:34'),(59,1,5,'estoy casada desde hace casi 10 años con una persona alcohólica nos humilla maltrata y agrede cada vez que puede. siempre me hace menos delante de sus hijos mayores el es casi 20 años mayor que yo y temo por mi vida y la de mi bebé me dijeron que aquí podría encontrar ayuda psicológica. actualmente estoy en Trinidad y tobago. chaguanas',2,'2022-05-06 08:23:46','2022-05-06 08:23:46'),(62,1,8,' Durante estos 8 años hemos pasado de punto de encuentro  mis hijos han sufrido insultos hacia ellos y hacia mi y mi familia, empujones... y creo que más de lo que me han contado. al estar con su padre me cuentan que este les ha cogido por el cuello,fuimos a médicos y al día siguiente pusimos la denuncia. tengo miedon por ellos estoy incumpliendo el régimen de visitas',2,'2022-05-07 20:06:19','2022-05-07 20:06:19'),(64,1,6,'soy hija de una mujer que ha sufrido violencia machista por parte de mi padre y recibo malos tratos psicológicos continuados por parte de mi padre',2,'2022-05-07 21:48:17','2022-05-07 21:48:17'),(67,42,5,'Yo he sido mujer maltratada y al igual que la promotora de esta iniciativa, tuvo que decírmelo la policía al recoger mi declaración ya que yo estaba en el Hospital (urgencias) y por las lesiones que presentaba fueron allí, (en Córdoba) quienes activaron el protocolo de violencia y por eso apareció la Policía Nacional de Córdoba. Eso fue lo que me salvó, si llega aparecer otro cuerpo no lo hubiese contado. ...',2,'2022-05-07 22:06:52','2022-05-07 22:06:52'),(82,1,6,'odio a todos odio a todos',2,'2022-05-10 06:40:54','2022-05-14 01:30:28'),(83,229,9,'tengo problemas',1,'2022-05-14 01:03:19','2022-05-14 01:26:38'),(85,1,8,'necesito ayuda he sido maltratada abusada sexual mente maltrato de mi padre de mi pareja fui abusada por varios hombres que nunca vi la cara hoy en dia tengo bastantes problemas psicológicos tengo 3 hijos los cuales no he podido responder por ellos no consigo empleó',2,'2022-05-20 07:03:40','2022-05-20 07:03:40'),(86,235,9,'Estoy en peligro extremo',1,'2022-05-20 22:18:22','2022-05-26 17:27:11'),(87,228,3,'soy de Madrid y soy una mujer maltratada, Estela ya,se ha puesto en contacto conmigo y le he contado todo lo que me ha pasado',1,'2022-05-23 08:32:16','2022-05-23 21:32:11'),(88,1,8,'estoy en peligro extremo ahoita',2,'2022-05-26 03:50:20','2022-05-26 03:50:20');
/*!40000 ALTER TABLE `Ticket` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuaria`
--

DROP TABLE IF EXISTS `Usuaria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuaria` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Rol` int(10) unsigned NOT NULL DEFAULT 1,
  `Nombre` varchar(45) NOT NULL,
  `ApellidoPaterno` varchar(20) DEFAULT NULL,
  `ApellidoMaterno` varchar(20) DEFAULT NULL,
  `NickName` varchar(45) NOT NULL,
  `Pass` varchar(45) NOT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `EntidadFederativa` int(10) unsigned NOT NULL DEFAULT 9,
  `Ciudad` varchar(45) DEFAULT NULL,
  `Estatus` int(10) unsigned NOT NULL DEFAULT 1,
  `PerfilFB` varchar(45) DEFAULT NULL,
  `Email` varchar(45) DEFAULT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `Nick_UNIQUE` (`NickName`),
  UNIQUE KEY `Perfil_UNIQUE` (`PerfilFB`),
  UNIQUE KEY `Telefono_UNIQUE` (`Telefono`),
  UNIQUE KEY `Email_UNIQUE` (`Email`),
  KEY `fk_Usuaria_CatRoles1_idx` (`Rol`),
  KEY `fk_Usuaria_CatEstatus1_idx` (`Estatus`),
  KEY `fk_Usuaria_CatEstados1_idx` (`EntidadFederativa`),
  CONSTRAINT `fk_Usuaria_CatEstados1` FOREIGN KEY (`EntidadFederativa`) REFERENCES `CatEstados` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuaria_CatEstatus1` FOREIGN KEY (`Estatus`) REFERENCES `CatEstatus` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuaria_CatRoles1` FOREIGN KEY (`Rol`) REFERENCES `CatRoles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=236 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuaria`
--

LOCK TABLES `Usuaria` WRITE;
/*!40000 ALTER TABLE `Usuaria` DISABLE KEYS */;
INSERT INTO `Usuaria` VALUES (1,4,'Coordinadora','Menganita','Menganita','a','a','2022-03-01',9,'Menganita',1,NULL,NULL,'123','2022-04-29 16:08:31','2022-05-26 13:28:58'),(7,1,'Perenganita3','Perenganita','Perenganita','Perenganita3','new','1999-04-07',9,NULL,1,NULL,'Null',NULL,'2022-04-29 16:08:31','2022-05-20 17:01:33'),(15,1,'Maria','Perenganita','Perenganita','Maria','Perenganita6','2020-04-21',9,NULL,1,NULL,NULL,'12','2022-04-29 16:08:34','2022-05-26 13:38:48'),(16,1,'Eva','Perenganita',NULL,'Eva','Perenganita7',NULL,9,NULL,1,NULL,NULL,'13','2022-04-29 16:08:34','2022-05-26 13:39:14'),(17,1,'Laura','Perenganita',NULL,'Laura','Perenganita8',NULL,9,NULL,1,NULL,NULL,'14','2022-04-29 16:08:34','2022-05-26 13:39:46'),(18,3,'Voluntaria2','Menganita','Menganita','Voluntaria2','Menganita2','2020-03-01',34,'Menganita2',1,NULL,NULL,'16','2022-04-29 16:08:35','2022-05-26 13:48:52'),(19,2,'Menganita3','Menganita','Menganita','Menganita3','Menganita3','2020-03-01',9,'Menganita3',1,NULL,NULL,NULL,'2022-04-29 16:08:35','2022-04-29 16:08:35'),(20,2,'Edi4 Menganita4','Menganita','Menganita','Menganita4','Menganita4','2020-03-01',15,'Menganita4',1,NULL,NULL,NULL,'2022-04-29 16:08:37','2022-04-29 16:08:37'),(42,3,'voluntaria','susi',NULL,'a3','123',NULL,9,NULL,1,NULL,'aaacini@gmail.com',NULL,'2022-04-29 16:08:37','2022-05-26 17:25:23'),(228,1,'Victima',NULL,NULL,'a20','a',NULL,34,NULL,1,NULL,'a_sdfdsfaacini@gmail.com',NULL,'2022-05-14 01:02:09','2022-05-26 15:48:54'),(229,1,'Sutanita',NULL,'Zambrano','a21','a',NULL,15,'neza',1,NULL,'aaaci_aani@gmail.com',NULL,'2022-05-14 01:03:19','2022-05-14 01:03:19'),(233,1,'Susanita',NULL,NULL,'Susanita','1',NULL,34,NULL,1,NULL,'aaacini_a@gmail.com',NULL,'2022-05-20 22:15:30','2022-05-20 22:15:30'),(235,1,'Susamita',NULL,NULL,'Susanita2','1',NULL,34,NULL,1,NULL,'susanita@email.com',NULL,'2022-05-20 22:18:22','2022-05-20 22:18:22');
/*!40000 ALTER TABLE `Usuaria` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-30  1:05:09
