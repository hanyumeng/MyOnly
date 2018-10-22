# Host: localhost  (Version: 5.5.53)
# Date: 2018-10-22 11:14:50
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goodsinfo"
#

CREATE TABLE `goodsinfo` (
  `goodsId` varchar(10) NOT NULL,
  `goodsName` varchar(100) DEFAULT NULL,
  `goodsType` varchar(20) DEFAULT NULL,
  `goodsPrice` float DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL,
  `goodsDesc` varchar(100) DEFAULT NULL,
  `goodsImg` varchar(100) DEFAULT NULL,
  `beiyong1` varchar(100) DEFAULT NULL,
  `beiyong2` varchar(100) DEFAULT NULL,
  `beiyong3` varchar(100) DEFAULT NULL,
  `beiyong4` varchar(100) DEFAULT NULL,
  `beiyong5` varchar(100) DEFAULT NULL,
  `beiyong6` varchar(100) DEFAULT NULL,
  `beiyong7` varchar(100) DEFAULT NULL,
  `beiyong8` varchar(100) DEFAULT NULL,
  `beiyong9` varchar(100) DEFAULT NULL,
  `beiyong10` varchar(100) DEFAULT NULL,
  `beiyong11` varchar(100) DEFAULT NULL,
  `beiyong12` varchar(100) DEFAULT NULL,
  `beiyong13` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`goodsId`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "goodsinfo"
#

INSERT INTO `goodsinfo` VALUES ('0000003','三粒扣开叉西服外套','外套',788,89,'时尚','img/118308503H11_p7.jpg','灰色','155/76A/XS','','','','','','','','','','',''),('000002','两粒扣开叉西服外套两','外套',598,785,'好看保暖','img/118308503H01_p7.jpg','白色','155/76A/XS','','','','','','','','','','',''),('000004','两粒扣开叉西服外套四','外套',455,76,'保暖 ，时尚','img/118308505SA1_p7.jpg','红色','155/76A/XS','','','','','','','','','','',''),('118308501S','一粒扣开叉西服外套','外套',599,241,'面料：聚酯纤维89%粘纤9%氨纶2%,里料：聚酯纤维100%,','img/1.jpg','黑白色织BLACK WHITE YARN DYE','155/76A/XS','','','','','','','','','','','');

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







#
# Structure for table "shoppingcart"
#

CREATE TABLE `shoppingcart` (
  `vipName` varchar(10) DEFAULT NULL,
  `goodsId` varchar(10) DEFAULT NULL,
  `goodsCount` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "shoppingcart"
#


