use tradodb;

CREATE TABLE product(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    description varchar(255),
    point_value int,
    image_name varchar(255),
    PRIMARY KEY(id),
    created TIMESTAMP NOT NULL DEFAULT NOW()
);