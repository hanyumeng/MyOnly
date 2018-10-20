--商品表
create table goodsInfo
(
       goodsId varchar(10) primary key,
       goodsName varchar(100),
       goodsType varchar(20),
       goodsPrice float,
       goodsCount int,
       goodsDesc varchar(100),
       goodsImg varchar(100),
       beiyong1  varchar(100),
       beiyong2  varchar(100),
       beiyong3  varchar(100),
       beiyong4  varchar(100),
       beiyong5  varchar(100),
       beiyong6  varchar(100),
       beiyong7  varchar(100),
       beiyong8  varchar(100),
       beiyong9  varchar(100),
       beiyong10  varchar(100),
       beiyong11  varchar(100),
       beiyong12  varchar(100),
       beiyong13  varchar(100)
);

--购物车表
create table shoppingCart(
       vipName varchar(10),
       goodsId varchar(10),
       goodsCount int 
);

select * from shoppingCart 


--创建表格
create table hello(
	id char(5) primary key,
	name varchar(50) not null,
	sex char(10),
	age int
)

create table word(
	id char(5) primary key,
	name varchar(50) not null,
	sex char(10),
	age int,
	dept varchar(20)
)
--插入
insert into hello(id,name,sex) values('001','haha','male')
insert into hello(id,name,sex) values('002','herry','female')
insert into hello(id,name,sex,age) values('003','david','male',15)
--查询
select id,name,sex from hello where sex='female'
select * from hello where sex='female' and age<20
--删除
delete from hello where name='haha'
--修改
update hello set sex='male' where name='herry'

update goodsinfo set goodsImg='../img/1.jpg' where goodsId='118308501S'