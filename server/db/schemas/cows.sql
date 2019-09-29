CREATE DATABASE cows_list;

USE cows_list;
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'cows'
-- 
-- ---

DROP TABLE IF EXISTS `cows`;
		
CREATE TABLE `cows` (
  `id` tinyint AUTO_INCREMENT UNIQUE,
  `name` varchar(255,
  `description` varchar(255),
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---


-- ---
-- Table Properties
-- ---

-- ALTER TABLE `cows` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `cows` (`id`,`name`,`description`) VALUES
-- ('','','');