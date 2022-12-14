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
CREATE TABLE Layouts(
    id int NOT NULL AUTO_INCREMENT,
    is_template boolean NOT NULL,
    alias varchar(255) NOT NULL,
    value JSON NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE Pages(
    id int NOT NULL AUTO_INCREMENT,
    layout int NOT NULL,
    value JSON NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (layout) REFERENCES Layouts(id)
);

CREATE TABLE MetaPages(
    id int NOT NULL AUTO_INCREMENT,
    page int NOT NULL UNIQUE,
    domain text NOT NULL,
    name varchar(255) NOT NULL,
    author varchar(255),
    mail varchar(255),
    PRIMARY KEY(id),
    FOREIGN KEY (page) REFERENCES Pages(id)
);

CREATE TABLE Socials(
    id int NOT NULL AUTO_INCREMENT,
    page int NOT NULL,
    alias varchar(255) NOT NULL,
    value JSON NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (page) REFERENCES Pages(id)
);

CREATE TABLE Images(
    id int NOT NULL AUTO_INCREMENT,
    page int NOT NULL,
    image text NOT NULL,
    alt text NOT NULL,
    title text NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (page) REFERENCES Pages(id)
);

CREATE TABLE Subpages(
    id int NOT NULL AUTO_INCREMENT,
    page int NOT NULL,
    value JSON NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (page) REFERENCES Pages(id)
);

CREATE TABLE Sections(
    id int NOT NULL AUTO_INCREMENT,
    subpage int NOT NULL,
    alias varchar(255) NOT NULL,
    pos int NOT NULL,
    value JSON NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (subpage) REFERENCES Subpages(id)
);

CREATE TABLE SectionImages(
    image_id int NOT NULL,
    section_id int NOT NULL,
    pos int NOT NULL,
    FOREIGN KEY (image_id) REFERENCES Images(id),
    FOREIGN KEY (section_id) REFERENCES Sections(id)
);

CREATE TABLE MetaSubpages(
    id int NOT NULL AUTO_INCREMENT,
    subpage int NOT NULL UNIQUE,
    name varchar(255) NOT NULL,
    path varchar(255) NOT NULL,
    title varchar(255) NOT NULL,
    description text NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (subpage) REFERENCES Subpages(id)
);

-- trochę testowych danych

INSERT INTO Layouts(is_template, alias, value) VALUES 
    (False,'test','{"key1": "value1", "key2": "value2"}'),
    (False,'test2','{"key1": "value1", "key2": "value2"}'),
    (True,'test3','{"key1": "value1", "key2": "value2"}'),
    (True,'test4','{"key1": "value1", "key2": "value2"}');

INSERT INTO Pages (layout, value) VALUES
    (1, '{"key1": "value1", "key2": "value2"}');

INSERT INTO MetaPages (page, domain, name) VALUES
    (1, 'test.com', 'test_page');

INSERT INTO Images(page, image, alt, title) VALUES
    (1, 'swagger_server/images/1/DSC_4551.jpg', 'some alt', 'some_title'),
    (1, 'swagger_server/images/1/DSC_4551.jpg', 'some alt', 'some_title');

INSERT INTO Subpages (page, value) VALUES
    (1, '{"key1": "value1", "key2": "value2"}'),
    (1, '{"key1": "value2", "key2": "value3"}');

INSERT INTO MetaSubpages (subpage, name, path, title, description) VALUES
    (1,'test', '/test', 'test_title', 'test_description'),
    (2,'test2', '/test2', 'test_title2', 'test_description2');

INSERT INTO Socials (page, alias, value) VALUES
    (1,'facebook', '{"key1": "value1", "key2": "value2"}');

INSERT INTO Sections(subpage,alias,pos,value) VALUES
    (1, 'section_2', 1, '{"key1": "value1", "key2": "value2"}'),
    (1, 'section_1', 2, '{"key1": "value1", "key2": "value2"}'),
    (2, 'section_1', 2, '{"key1": "value1", "key2": "value2"}'),
    (2, 'section_2', 1, '{"key1": "value1", "key2": "value2"}'),
    (2, 'section_2', 3, '{"key1": "value1", "key2": "value2"}');

INSERT INTO SectionImages (image_id, section_id, pos) VALUES
    (1,2,1),
    (2,2,2),
    (1,3,2),
    (2,3,1);



