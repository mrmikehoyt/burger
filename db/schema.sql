//**Steps did not say drop database if exists**//
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers (
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY KEY (id)
);