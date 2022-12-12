-- Tworzenie nowego użytkownika
CREATE USER IF NOT EXISTS 'prog_zesp'@'localhost' IDENTIFIED BY 'prog_zesp';
ALTER USER 'prog_zesp'@'localhost' IDENTIFIED WITH mysql_native_password BY 'prog_zesp';

-- Tworzenie bazy danych
DROP DATABASE IF EXISTS foto_portfolio;
CREATE DATABASE foto_portfolio;

-- Przyznawanie uprawnień użytkownikowi
GRANT ALL PRIVILEGES ON foto_portfolio.* TO 'prog_zesp'@'localhost';

-- Korzystanie z bazy danych
USE foto_portfolio;

-- tworznie schematu
CREATE TABLE Layout(
    id int NOT NULL AUTO_INCREMENT,
    is_template boolean,
    alias varchar(255),
    value JSON,
    PRIMARY KEY(id)
);






-- trochę testowych danych
INSERT INTO Layout(is_template, alias, value) VALUES 
    (False,'test','{"key1": "value1", "key2": "value2"}');

