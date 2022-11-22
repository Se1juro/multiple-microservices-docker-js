CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(250) NOT NULL,
  lastname varchar(250) NOT NULL,
  address varchar(250) NOT NULL,
  email varchar(250) NOT NULL,
  phone varchar(250) NOT NULL
);

insert into users (name, lastname, address, email, phone) values ('Rakel', 'Coombs', '0 Superior Street', 'rcoombs0@omniture.com', '951-919-8016');
insert into users (name, lastname, address, email, phone) values ('Husein', 'Guswell', '85 Eagle Crest Center', 'hguswell1@hubpages.com', '551-173-3811');
insert into users (name, lastname, address, email, phone) values ('Mureil', 'Tolhurst', '206 Debs Hill', 'mtolhurst2@imdb.com', '406-912-6946');
insert into users (name, lastname, address, email, phone) values ('Ferd', 'Benardeau', '10742 6th Drive', 'fbenardeau3@wikimedia.org', '866-991-1256');
insert into users (name, lastname, address, email, phone) values ('Dante', 'Wynett', '931 Spaight Junction', 'dwynett4@360.cn', '589-392-8813');
insert into users (name, lastname, address, email, phone) values ('Goober', 'McGuinley', '52707 Monterey Center', 'gmcguinley5@vimeo.com', '610-452-0712');
insert into users (name, lastname, address, email, phone) values ('Harmony', 'MacMickan', '03 Shoshone Plaza', 'hmacmickan6@ted.com', '443-416-5964');
insert into users (name, lastname, address, email, phone) values ('Basilio', 'Limpricht', '0 Farwell Junction', 'blimpricht7@ihg.com', '180-956-1841');
insert into users (name, lastname, address, email, phone) values ('Sorcha', 'Deverose', '12152 High Crossing Terrace', 'sdeverose8@apache.org', '513-219-7994');
insert into users (name, lastname, address, email, phone) values ('Correy', 'Kerr', '744 John Wall Way', 'ckerr9@upenn.edu', '574-112-5398');

CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name varchar(250) NOT NULL,
  price int
);

insert into products (name, price) values ('Basil - Dry, Rubbed', 2.08);
insert into products (name, price) values ('Prunes - Pitted', 3.7);
insert into products (name, price) values ('Nantucket - Carrot Orange', 9.73);
insert into products (name, price) values ('Sprouts - Baby Pea Tendrils', 9.01);
insert into products (name, price) values ('Butter Sweet', 1.3);
insert into products (name, price) values ('Nut - Walnut, Pieces', 9.71);
insert into products (name, price) values ('Banana - Leaves', 6.16);
insert into products (name, price) values ('Chocolate - Semi Sweet', 6.37);
insert into products (name, price) values ('Sugar - Brown', 1.26);
insert into products (name, price) values ('Flour - Buckwheat, Dark', 1.29);

CREATE TABLE IF NOT EXISTS shops (
  id SERIAL PRIMARY KEY,
  name varchar(250) NOT NULL,
  address varchar(250) NOT NULL
);

insert into shops (name, address) values ('Einti', '30815 Judy Avenue');
insert into shops (name, address) values ('Bubbletube', '86315 Duke Park');
insert into shops (name, address) values ('Photobug', '25734 Sundown Lane');
insert into shops (name, address) values ('Rhyloo', '637 Rusk Trail');
insert into shops (name, address) values ('Minyx', '5231 Jenifer Center');
insert into shops (name, address) values ('Twitterbeat', '9429 Fairview Center');
insert into shops (name, address) values ('Centizu', '00817 Banding Point');
insert into shops (name, address) values ('Twitterwire', '2 Springs Plaza');
insert into shops (name, address) values ('Edgeify', '7579 Village Green Terrace');
insert into shops (name, address) values ('Tazzy', '420 Bartelt Hill');