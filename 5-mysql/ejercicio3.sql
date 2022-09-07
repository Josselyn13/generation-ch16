USE tienda;

INSERT INTO clientes (nombre, apellido, telefono, direccion)
VALUES ('Pedro', 'Páramo', '555555234', 'Comala'),
('Raul', 'Sanchez', '555555234', 'Hidalgo'),
('Victor', 'Fernández', '555555234', 'Comala'),
('Magali', 'Quiroz', '555555234', 'CDMX'),
('María', 'Vargas', '555555234', 'CDMX'),
('Marina', 'Pardo', '555555234', 'CDMX');

SELECT * FROM tienda.clientes;

-- Inner join
-- Explícita
SELECT * FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

SELECT
clientes.orden_id,
clientes.nombre,
compra.*
FROM clientes
INNER JOIN compra
ON clientes.cliente_id = compra.cliente_id;

-- Union implícita
SELECT *
FROM clientes, compra
WHERE clientes.clientes_id = compra.cliente_id;

-- LEFT JOIN
SELECT *
FROM clientes
LEFT JOIN compra
ON clientes.clientes_id = compra.cliente_id;
