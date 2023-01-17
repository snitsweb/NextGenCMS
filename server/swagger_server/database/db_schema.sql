-- Tworzenie nowego użytkownika
CREATE USER IF NOT EXISTS 'prog_zesp'@'%' IDENTIFIED BY 'prog_zesp';
ALTER USER 'prog_zesp'@'%' IDENTIFIED WITH mysql_native_password BY 'prog_zesp';

-- Tworzenie bazy danych
DROP DATABASE IF EXISTS foto_portfolio;
CREATE DATABASE foto_portfolio;

-- Przyznawanie uprawnień użytkownikowi
GRANT ALL PRIVILEGES ON foto_portfolio.* TO 'prog_zesp'@'%';

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
    pos INT NOT NULL,
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

DELIMITER //
CREATE TRIGGER before_page_delete
BEFORE DELETE
	ON Pages FOR EACH ROW
    BEGIN
    	DELETE FROM Subpages WHERE Subpages.page = old.id;
		DELETE FROM Socials WHERE Socials.page = old.id;
		DELETE FROM MetaPages WHERE MetaPages.page = old.id;
		DELETE FROM Images WHERE Images.page = old.id;
	END; //
DELIMITER ;


DELIMITER //
CREATE TRIGGER before_image_delete
BEFORE DELETE
	ON Images FOR EACH ROW
    BEGIN
		DELETE FROM SectionImages WHERE SectionImages.image_id = old.id;
	END; //
DELIMITER ;


DELIMITER //
CREATE TRIGGER before_subpage_delete
BEFORE DELETE
	ON Subpages FOR EACH ROW
    BEGIN
		DELETE FROM MetaSubpages WHERE MetaSubpages.subpage = old.id;
        DELETE FROM Sections WHERE Sections.subpage = old.id;
	END; //
DELIMITER ;


DELIMITER //
CREATE TRIGGER before_section_delete
BEFORE DELETE
	ON Sections FOR EACH ROW
    BEGIN
		DELETE FROM SectionImages WHERE SectionImages.section_id = old.id;
        
	END; //
DELIMITER ;

-- trochę testowych danych

INSERT INTO Layouts(is_template, alias, value) VALUES 
    (False,'theme-default','{}');

INSERT INTO Pages (layout, value) VALUES
    (1, '{}');

INSERT INTO MetaPages (page, domain, name) VALUES
    (1, 'http://localhost:8080', 'test_page');

INSERT INTO Images(page, image, alt, title) VALUES
    (1, 'swagger_server/images/1/Group-1-min.jpg', 'Alternative text', 'Title of image'), -- 1
    (1, 'swagger_server/images/1/Group-3-min.jpg', 'Alternative text', 'Title of image'), -- 2
    (1, 'swagger_server/images/1/Group-4-min.jpg', 'Alternative text', 'Title of image'), -- 3
    (1, 'swagger_server/images/1/Group-5-min.jpg', 'Alternative text', 'Title of image'), -- 4
    (1, 'swagger_server/images/1/Group-6-min.jpg', 'Alternative text', 'Title of image'), -- 5
    (1, 'swagger_server/images/1/Group-7-min.jpg', 'Alternative text', 'Title of image'), -- 6
    (1, 'swagger_server/images/1/Group-8-min.jpg', 'Alternative text', 'Title of image'); -- 7

INSERT INTO Subpages (page,pos, value) VALUES
    (1,1, '{}'),
    (1,2, '{}'),
    (1,3, '{}');

INSERT INTO MetaSubpages (subpage, name, path, title, description) VALUES
    (1,'Home', '/', 'It is a test title', 'It is a test description'),
    (2,'About', '/about', 'About', 'About description'),
    (3,'Contact', '/contact', 'It is a test title', 'It is a test description');

INSERT INTO Socials (page, alias, value) VALUES
    (1,'facebook', '{}');

INSERT INTO Sections(subpage,alias,pos,value) VALUES
    (1, 'slider_section', 1, '{}'),
    (1, 'gallery_section', 2, '{}'),
    (1, 'jumbotron_section', 3, '{"header": "header",  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}'),
    (1, 'textfield_section', 4, '{"header": "header",  "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}'),
    (2, 'gallery_section', 1, '{}');

INSERT INTO SectionImages (image_id, section_id, pos) VALUES
    (1,1,1),
    (2,1,2),
    (3,1,3),
    (4,1,4),
    (5,1,5),
    (6,1,6),
    (7,1,7),
    (1,2,1),
    (2,2,2),
    (3,2,3),
    (4,2,4),
    (5,2,5),
    (6,2,6),
    (7,2,7),
    (1,3,1);
    




