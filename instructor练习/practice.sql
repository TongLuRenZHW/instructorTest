/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : practice

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2015-08-17 08:35:19
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_Id` int(11) NOT NULL auto_increment,
  `user_Name` varchar(50) default NULL,
  `user_Loginname` varchar(50) default NULL,
  `user_Passwrd` varchar(50) default NULL,
  PRIMARY KEY  (`user_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'swl', 'swl', '123');
INSERT INTO `user` VALUES ('2', 'wjy', 'wjy', '123');
INSERT INTO `user` VALUES ('3', 'zhw', 'zhw', '123');
INSERT INTO `user` VALUES ('4', 'yby', 'yby', '123');
