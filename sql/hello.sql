# Host: localhost  (Version: 5.5.53)
# Date: 2018-10-22 10:56:08
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "hello"
#

CREATE TABLE `hello` (
  `id` char(5) NOT NULL,
  `name` varchar(50) NOT NULL,
  `sex` char(10) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "hello"
#

INSERT INTO `hello` VALUES ('001','haha','male',NULL),('002','herry','male',NULL),('003','david','male',15),('345','18642431950','male',NULL);
