create database spring_react
default character set utf8
default collate utf8_general_ci;

use spring_react;

select * from produtos;

alter table produtos
modify column nome varchar(255) after codigo;

describe produtos;