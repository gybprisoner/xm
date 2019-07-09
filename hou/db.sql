#db.sql 数据库脚本文件
SET NAMES UTF8;
DROP DATABASE IF EXISTS XM;
CREATE DATABASE XM CHARSET=UTF8;
USE XM;
DROP TABLE IF EXISTS t_login;

CREATE TABLE t_login(
 id INT PRIMARY KEY AUTO_INCREMENT,
 uname VARCHAR(25),
 upass VARCHAR(32),
 phone VARCHAR(11)
);
INSERT INTO t_login VALUES(null,'tom',md5('123'),17733450854);
INSERT INTO t_login VALUES(null,'jerry',md5('123'),17733450855);

#完成购物车功能
DROP TABLE IF EXISTS list;
CREATE TABLE list(
 mid INT PRIMARY KEY AUTO_INCREMENT,
 img VARCHAR(255),
 aname VARCHAR(55),
 ename VARCHAR(55),
 coun VARCHAR(10),
 shic VARCHAR(55),
 atype VARCHAR(5),
  sy  VARCHAR(55),
 price DECIMAL(10,2)
 
);
INSERT INTO list VALUES(null,'4.png','黑衣人','Men in Black International','美国','115分钟','动作/喜剧/科幻','2019-06-14大陆上映',49);
INSERT INTO list VALUES(null,'1.png','千与千寻','千と千尋の神隠し','日本 ','125分钟','动画/冒险/奇幻/家庭','2019-06-21 08:00大陆上映',45);
INSERT INTO list VALUES(null,'2.png','玩具总动员4','Toy Story 4','美国','115分钟','动作/喜剧/科幻','2019-06-21大陆上映',57);
INSERT INTO list VALUES(null,'3.png','蜘蛛侠：英雄远征','Men in Black International','美国','115分钟','动作/喜剧/科幻','2019-06-14大陆上映',49);
INSERT INTO list VALUES(null,'8.png','最好的我们','My Best Summer','中国大陆','127分钟','动作/喜剧/科幻','2019-06-14大陆上映',49);
INSERT INTO list VALUES(null,'7.png','哥斯拉2：怪兽之王','Godzilla: King of the Monsters','美国','154分钟','动作/喜剧/科幻','2019-06-14大陆上映',49);
INSERT INTO list VALUES(null,'5.png','我的青春都是你','A City Called Macau','中国大陆','122分钟','动作/喜剧/科幻','2019-06-14大陆上映',49);
INSERT INTO list VALUES(null,'6.png','绝杀慕尼黑','X-Men: Dark Phoenix','美国','111分钟','动作/喜剧/科幻','2019-06-14大陆上映',49);






