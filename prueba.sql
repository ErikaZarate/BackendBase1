-- MariaDB dump 10.19  Distrib 10.6.7-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: prueba
-- ------------------------------------------------------
-- Server version	10.6.7-MariaDB-2ubuntu1.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Smash`
--

DROP TABLE IF EXISTS `Smash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Smash` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Caracteristicas` varchar(255) NOT NULL,
  `AtaTierra` varchar(255) NOT NULL,
  `AtaAereos` varchar(255) NOT NULL,
  `Atributos` varchar(255) NOT NULL,
  `Burlas` varchar(255) NOT NULL,
  `Curiosidades` varchar(255) NOT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Smash`
--

LOCK TABLES `Smash` WRITE;
/*!40000 ALTER TABLE `Smash` DISABLE KEYS */;
INSERT INTO `Smash` VALUES (1,'Mario','Equilibrado,dos trajes alternativos','Normales, Smash,Ataques de Recuperacion','Normal adelante, atras,arriba, abajo','Salta mas alto, camina mas rapido,','Aumenta su tamaño','Trailer inicial del juego,nueva animacion, cancion','1','2022-11-10 16:39:16','2022-11-16 18:57:45'),(2,'prueba','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-16 18:41:05','2022-11-16 18:41:05'),(3,'prueba2','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-16 18:42:15','2022-11-16 18:42:15'),(4,'prueba3','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-16 18:44:39','2022-11-16 18:44:39'),(5,'prueba4','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-16 18:45:29','2022-11-16 18:45:29'),(6,'prueba5','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-17 16:56:58','2022-11-17 16:56:58'),(7,'prueba 5','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-17 16:57:10','2022-11-17 16:57:10'),(8,'prueba 7','prueba','prueba','prueba','prueba','prueba','prueba','1','2022-11-17 16:58:16','2022-11-17 16:58:16');
/*!40000 ALTER TABLE `Smash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuarios` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Usuario` varchar(255) NOT NULL,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Edad` int(3) NOT NULL,
  `Genero` char(1) DEFAULT NULL,
  `Contrasena` varchar(255) NOT NULL,
  `Fecha_Nacimiento` date DEFAULT NULL,
  `Activo` char(1) NOT NULL,
  `Creado` timestamp NOT NULL DEFAULT current_timestamp(),
  `Modificado` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'andreaab@gmail.com','Andrea','Sanchez',21,'F','1020','2001-08-10','N','2022-10-12 15:49:13','2022-10-24 15:56:28'),(2,'sandra20@gmail.com','Sandra','Fernandez',21,'F','1030','2001-06-11','S','2022-10-12 15:49:13','2022-10-12 15:49:13'),(3,'bot.bcryptjs.com','Bot','Patiño',13,'M','$2a$10$0/hi0YT8hAR7XRTnDRK3Au35Jq23m/xRLc1EG/ILjXbzPM9sWGreO','1900-01-01','S','2022-10-28 15:55:16','2022-10-28 15:55:16'),(4,'sonia.com','Sonia','Flores',21,'M','$2a$10$CXP0Axe9y2fYG2AQPUA1Reewu80Mos1LrMhtdfXT/V4vwgA6mMiuO','1900-01-01','S','2022-10-28 15:57:30','2022-10-28 15:57:30');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-18 10:17:20
