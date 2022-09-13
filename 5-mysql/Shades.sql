-- Crear base de datos
CREATE DATABASE shades;
USE shades;

-- Crear tablas de bases de datos

CREATE TABLE usuario(
usuario_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
contrasenia VARCHAR(20) NOT NULL,
nombre VARCHAR(65) NOT NULL,
correo VARCHAR(40) NOT NULL,
direccion VARCHAR(70) NOT NULL,
telefono VARCHAR(12) NOT NULL
);

CREATE TABLE categoria (categoria_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre_categoria VARCHAR (50) NOT NULL,
maquillaje VARCHAR (50) NOT NULL,
skincare VARCHAR (50) NOT NULL,
cuidado_del_cabello VARCHAR (50) NOT NULL,
cuidado_corporal VARCHAR (50) NOT NULL
);

SELECT * FROM categoria;


CREATE TABLE producto( 
producto_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
nombre VARCHAR(250) NOT NULL,
precio DECIMAL(8,2) NOT NULL,
descripcion VARCHAR(100) NOT NULL,
wishlist BIT NOT NULL
);


CREATE TABLE carrito (
orden_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
usuario_id INT NOT NULL,
producto_id INT NOT NULL,
cantidad_productos INT NOT NULL,
fecha_compra DATE NOT NULL,
total DECIMAL(8,2) NOT NULL
);

DROP TABLE carrito;
DROP TABLE producto;
DROP TABLE usuario;

SELECT * FROM shades;

-- Agregar llaves foráneas
ALTER TABLE carrito
ADD CONSTRAINT fk_usuario_carrito
FOREIGN KEY (usuario_id)
REFERENCES usuario (usuario_id);

ALTER TABLE carrito
ADD CONSTRAINT fk_producto_carrito
FOREIGN KEY (producto_id)
REFERENCES producto (producto_id);

INSERT INTO carrito(orden_id, usuario_id, producto_id, cantidad_productos, fecha_compra, total)
VALUES(123, 1, 1, 1, '2022-09-03', 599),
(124, 2, 3, 2, '2022-09-04', 675),
(125, 3, 2, 3, '2022-09-05', 865),
(126, 4, 6, 4, '2022-09-06', 456),
(127, 5, 7, 5, '2022-09-07', 458);

INSERT INTO categoria(nombre_categoria)
VALUES('Maquillaje'),
('skin care'),
('cuidado de cabello'),
('cuidado corporal');

INSERT INTO metododepago(usuario_id, pago_id, banco, numcuenta, expanio, expmes)
VALUES(1, 1, 'BBVA', 1234567887654321, 23, 05),
(2, 2, 'SANTANDER', 1234567984654321, 24, 02),
(3, 3, 'BANAMEX', 1234567883654321, 25, 07),
(4, 4, 'BANCO AZTECA', 1234767887654321, 23, 11);





