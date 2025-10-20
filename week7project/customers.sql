CREATE TABLE Customers(
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  membership_level TEXT NOT NULL
);

CREATE TABLE Rentals(
  id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  movie_title TEXT NOT NULL,
  rental_price REAL NOT NULL,
  FOREIGN KEY(customer_id) REFERENCES Customers(id)
);

INSERT INTO Customers(id, name, membership_level) VALUES
(1, 'Jake', 'Gold'),
(2, 'Levi', 'Silver'),
(3, 'Ivy', 'Platinum'),
(4, 'Penny', 'Bronze'),
(5, 'Ethan', 'Gold');

INSERT INTO Rentals(id, customer_id, movie_title, rental_price)
(1, 1, 'Minions', 4.99),
(2, 2, 'Shrek', 3.99),
(3, 3, '20th Century Girl', 3.99),
(3, 3, 'Sing', 2.99),
(4, 4, 'Ponyo', 4.99),
(5, 5, 'Spirited Away', 4.99);

SELECT * FROM Customers;

SELECT * FROM Rentals;

SELECT name, membership_level FROM Customers;

SELECT
c.id AS customer_id,
c.name AS customer_name,
c.membership_level,
r.id AS rental_id,
r.movie_title,
r.rental_price
FROM Rentals r
JOIN Customers c
ON r.customer_id = c.id
ORDER BY c.id, r.id;
