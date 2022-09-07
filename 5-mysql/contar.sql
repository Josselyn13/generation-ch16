USE sakila;
SELECT * FROM payment;

-- SUM(), AVG(), COUNT()

SELECT customer_id, amount FROM payment;

-- COUNT cuenta las filas de una tabla
SELECT COUNT(*) AS 'Cantidad de filas' FROM payment;
SELECT COUNT(*) AS 'Cantidad de paises' FROM world.country;

-- Cantidad de rentas que tuvo el trabajador 2
SELECT COUNT(*) FROM payment WHERE staff_id = 1;

-- Cantidad de clientes distintos
SELECT COUNT(DISTINCT customer_id) FROM payment;

-- SUM()

SELECT SUM(amount) AS 'Total de rentas' FROM payment;
SELECT SUM(amount) AS 'Total de rentas' FROM payment WHERE staff_id = 2;

-- ¿Cuál cliente realizó más rentas?
SELECT customer_id, COUNT(*) FROM payment GROUP BY customer_id ORDER BY COUNT(*) DESC;

-- GROUP BY - Agrupa solo si se usa con SUM, AVG y COUNT, pero omite los valores repetidos
-- ORDER BY - Ordena según la columna o función que le indiquemos ASC / DESC
SELECT * FROM payment ORDER BY staff_id;
SELECT * FROM payment GROUP BY staff_id;

-- ¿Cuál cliente gastó más?
SELECT customer_id, SUM(amount) AS total FROM payment GROUP BY customer_id ORDER BY total ASC;


