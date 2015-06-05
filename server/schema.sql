CREATE DATABASE chat;
USE chat;

CREATE TABLE messages (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  createdAt timestamp(6),
  message varchar(255),
  user MEDIUMINT NOT NULL REFERENCES users(id),
  room MEDIUMINT NOT NULL REFERENCES rooms(id)
);

CREATE TABLE users (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  username varchar(150)
);

CREATE TABLE rooms (
  id MEDIUMINT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (id),
  name varchar(100)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

