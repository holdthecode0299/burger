DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT FALSE,
	primary key (id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ("California Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Turkey Burger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheeseburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Hamburger", false);
INSERT INTO burgers (burger_name, devoured) VALUES ("Buffalo Burger", false);

SELECT * FROM burgers