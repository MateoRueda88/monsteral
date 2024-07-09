-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-07-2024 a las 05:04:38
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monsteral`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `client`
--

CREATE TABLE `client` (
  `ID_client` int(11) NOT NULL,
  `clientName` varchar(50) NOT NULL,
  `CC` int(15) NOT NULL,
  `phone` int(14) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `client`
--

INSERT INTO `client` (`ID_client`, `clientName`, `CC`, `phone`, `address`) VALUES
(1, 'John Doe', 123456, 5551234, '123 Main St'),
(2, 'Jane Smith', 789012, 5555678, '456 Elm St'),
(3, 'Michael Johnson', 345678, 5559876, '789 Oak Ave'),
(4, 'Emily Davis', 901234, 5555432, '321 Pine Blvd'),
(5, 'Robert Brown', 567890, 5552345, '567 Cedar Ln'),
(6, 'Sophia Martinez', 234567, 5558765, '890 Maple Dr'),
(7, 'William Wilson', 678901, 5556543, '234 Birch Rd'),
(8, 'Olivia Taylor', 456789, 5553456, '678 Pinecrest Ave'),
(9, 'David Thomas', 890123, 5554321, '901 Elmwood Ln'),
(10, 'Isabella Garcia', 12345, 5557890, '345 Oakwood Ave');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `learn`
--

CREATE TABLE `learn` (
  `ID_course` int(11) NOT NULL,
  `courseName` varchar(50) NOT NULL,
  `courseDate` date NOT NULL,
  `place` varchar(100) DEFAULT NULL,
  `ID_client` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `learn`
--

INSERT INTO `learn` (`ID_course`, `courseName`, `courseDate`, `place`, `ID_client`) VALUES
(1, 'Introducción al cuidado de plantas de interior', '2024-07-02', 'Online', 1),
(2, 'Jardinería básica: Cómo empezar tu propio huerto', '2024-07-05', 'Local Garden Center', 2),
(3, 'Taller práctico de poda de rosales', '2024-07-08', 'Rose Garden Park', 3),
(4, 'Cuidado avanzado de plantas suculentas', '2024-07-10', 'Online', 4),
(5, 'Taller de diseño de jardines pequeños', '2024-07-12', 'Community Center', 5),
(6, 'Técnicas de propagación de plantas', '2024-07-15', 'Botanical Garden', 6),
(7, 'Cuidado de plantas carnívoras', '2024-07-18', 'Online', 7),
(8, 'Taller de bonsái para principiantes', '2024-07-20', 'Bonsai Studio', 8),
(9, 'Técnicas de riego eficiente para macetas', '2024-07-22', 'Home Improvement Store', 9),
(10, 'Taller de herbolaria: Cultivo y usos medicinales', '2024-07-25', 'Herbalist Shop', 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `news`
--

CREATE TABLE `news` (
  `ID_news` int(11) NOT NULL,
  `newsName` varchar(50) NOT NULL,
  `newsDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `news`
--

INSERT INTO `news` (`ID_news`, `newsName`, `newsDate`) VALUES
(1, 'Plantas que purifican el aire', '2024-07-02'),
(2, 'Decoración con plantas colgantes', '2024-07-03'),
(3, 'Macetas inteligentes para jardines', '2024-07-05'),
(4, 'Jardín vertical en tu balcón', '2024-07-07'),
(5, 'Plantas resistentes al sol', '2024-07-09'),
(6, 'Riego automatizado para jardines', '2024-07-11'),
(7, 'Beneficios del jardín vertical', '2024-07-13'),
(8, 'Plantas purificadoras de aire en oficinas', '2024-07-15'),
(9, 'Fertilizantes orgánicos para plantas', '2024-07-17'),
(10, 'Uso de luz LED en el crecimiento', '2024-07-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_shop`
--

CREATE TABLE `order_shop` (
  `ID_order` int(11) NOT NULL,
  `date_order` date NOT NULL,
  `ID_client` int(11) DEFAULT NULL,
  `ID_plants` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `order_shop`
--

INSERT INTO `order_shop` (`ID_order`, `date_order`, `ID_client`, `ID_plants`) VALUES
(1, '2024-01-15', 1, 5),
(2, '2024-02-20', 2, 12),
(3, '2024-03-10', 3, 23),
(4, '2024-04-05', 4, 34),
(5, '2024-05-18', 5, 45),
(6, '2024-06-22', 6, 56),
(7, '2024-07-14', 7, 28),
(8, '2024-08-30', 8, 39),
(9, '2024-09-11', 9, 50),
(10, '2024-10-25', 10, 61);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment`
--

CREATE TABLE `payment` (
  `ID_payment` int(11) NOT NULL,
  `date_pay` date NOT NULL,
  `ID_order` int(11) DEFAULT NULL,
  `statusPay` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `payment`
--

INSERT INTO `payment` (`ID_payment`, `date_pay`, `ID_order`, `statusPay`) VALUES
(1, '2024-01-16', 1, 'Paid'),
(2, '2024-02-21', 2, 'Pending'),
(3, '2024-03-11', 3, 'Paid'),
(4, '2024-04-06', 4, 'Failed'),
(5, '2024-05-19', 5, 'Paid'),
(6, '2024-06-23', 6, 'Pending'),
(7, '2024-07-15', 7, 'Paid'),
(8, '2024-08-31', 8, 'Failed'),
(9, '2024-09-12', 9, 'Pending'),
(10, '2024-10-26', 10, 'Paid');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plant`
--

CREATE TABLE `plant` (
  `ID_plants` int(11) NOT NULL,
  `plantName` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `ID_category` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plant`
--

INSERT INTO `plant` (`ID_plants`, `plantName`, `description`, `price`, `ID_category`) VALUES
(1, 'Crisantemo', 'Planta con flores variadas, ideal para interiores.', 60000.00, 1),
(2, 'Helecho Boston', 'Planta de follaje verde y frondoso, perfecta para interiores.', 50000.00, 1),
(3, 'Espatifilo', 'Planta de interior con hojas verdes y flores blancas.', 70000.00, 1),
(4, 'Sansevieria', 'Planta resistente que purifica el aire, ideal para interiores.', 45000.00, 1),
(5, 'Drácena', 'Planta con hojas largas y elegantes, adaptada a interiores.', 55000.00, 1),
(6, 'Pothos', 'Planta colgante de interior, fácil de cuidar y decorativa.', 48000.00, 1),
(7, 'Ficus lyrata', 'Árbol de hojas grandes y brillantes, adecuado para interiores luminosos.', 80000.00, 1),
(8, 'Cinta', 'Planta colgante con hojas rayadas, excelente para interiores.', 40000.00, 1),
(9, 'Monstera deliciosa', 'Planta con hojas grandes y perforadas, popular en interiores modernos.', 75000.00, 1),
(10, 'Pilea peperomioides', 'Planta de aspecto único con hojas redondas, perfecta para interiores.', 60000.00, 1),
(11, 'Rosa', 'Una planta de flores hermosas y fragantes', 45000.00, 2),
(12, 'Hortensia', 'Planta con grandes racimos de flores', 60000.00, 2),
(13, 'Lavanda', 'Planta aromática con flores púrpuras', 30000.00, 2),
(14, 'Jazmín', 'Planta trepadora con flores fragantes', 50000.00, 2),
(15, 'Geranio', 'Planta de flores coloridas y duraderas', 35000.00, 2),
(16, 'Buganvilla', 'Planta trepadora con flores brillantes', 55000.00, 2),
(17, 'Girasol', 'Planta alta con flores amarillas grandes', 20000.00, 2),
(18, 'Margarita', 'Planta con flores blancas y centro amarillo', 25000.00, 2),
(19, 'Crisantemo', 'Planta con una gran variedad de flores', 40000.00, 2),
(20, 'Azalea', 'Planta de arbusto con flores brillantes', 45000.00, 2),
(21, 'Aloe Vera', 'Planta suculenta utilizada para tratar quemaduras y heridas', 25000.00, 3),
(22, 'Manzanilla', 'Planta con flores blancas usada para infusiones relajantes', 15000.00, 3),
(23, 'Menta', 'Planta aromática utilizada para problemas digestivos', 12000.00, 3),
(24, 'Romero', 'Planta aromática con propiedades antiinflamatorias', 18000.00, 3),
(25, 'Lavanda', 'Planta aromática utilizada para aliviar el estrés', 20000.00, 3),
(26, 'Eucalipto', 'Planta con hojas que se usan para problemas respiratorios', 22000.00, 3),
(27, 'Salvia', 'Planta con propiedades antioxidantes y antiinflamatorias', 17000.00, 3),
(28, 'Hierbabuena', 'Planta similar a la menta, usada en problemas digestivos', 13000.00, 3),
(29, 'Calendula', 'Planta utilizada para curar heridas y tratar infecciones', 19000.00, 3),
(30, 'Jengibre', 'Planta con raíz usada para problemas digestivos y náuseas', 25000.00, 3),
(31, 'Echeveria', 'Planta suculenta con hojas carnosas en forma de roseta', 15000.00, 4),
(32, 'Sedum', 'Planta suculenta con pequeñas hojas redondeadas', 12000.00, 4),
(33, 'Aloe Vera', 'Planta suculenta utilizada para tratar quemaduras y heridas', 25000.00, 4),
(34, 'Haworthia', 'Planta suculenta con hojas verdes y puntiagudas', 18000.00, 4),
(35, 'Crassula', 'Planta suculenta con hojas gruesas y brillantes', 20000.00, 4),
(36, 'Kalanchoe', 'Planta suculenta con flores pequeñas y coloridas', 22000.00, 4),
(37, 'Graptopetalum', 'Planta suculenta con hojas en forma de estrella', 17000.00, 4),
(38, 'Agave', 'Planta suculenta con hojas largas y puntiagudas', 30000.00, 4),
(39, 'Sempervivum', 'Planta suculenta con rosetas de hojas compactas', 16000.00, 4),
(40, 'Pachyphytum', 'Planta suculenta con hojas gruesas y redondeadas', 19000.00, 4),
(41, 'Lengua de suegra', 'Planta resistente que purifica el aire', 30000.00, 5),
(42, 'Pothos', 'Planta colgante que elimina toxinas del aire', 25000.00, 5),
(43, 'Palma Areca', 'Planta elegante que mejora la calidad del aire', 40000.00, 5),
(44, 'Helecho de Boston', 'Planta frondosa que purifica el aire', 28000.00, 5),
(45, 'Lirio de paz', 'Planta con flores blancas que limpia el aire', 35000.00, 5),
(46, 'Ficus Elástica', 'Planta de hojas grandes que purifica el aire', 42000.00, 5),
(47, 'Palma de bambú', 'Planta que elimina toxinas del aire', 39000.00, 5),
(48, 'Dracaena', 'Planta que mejora la calidad del aire', 32000.00, 5),
(49, 'Aloe Vera', 'Planta suculenta que purifica el aire y trata heridas', 25000.00, 5),
(50, 'Filodendro', 'Planta de interior que limpia el aire', 27000.00, 5),
(51, 'Lavanda', 'Planta aromática con flores púrpuras que atraen polinizadores', 20000.00, 6),
(52, 'Girasol', 'Planta alta con flores amarillas grandes que atraen abejas', 18000.00, 6),
(53, 'Rosa', 'Planta de flores hermosas y fragantes que atraen abejas', 25000.00, 6),
(54, 'Salvia', 'Planta con flores coloridas que atraen mariposas', 22000.00, 6),
(55, 'Margarita', 'Planta con flores blancas y centro amarillo que atraen abejas', 15000.00, 6),
(56, 'Buganvilla', 'Planta trepadora con flores brillantes que atraen colibríes', 30000.00, 6),
(57, 'Hortensia', 'Planta con grandes racimos de flores que atraen abejas', 28000.00, 6),
(58, 'Manzanilla', 'Planta con flores blancas usada para infusiones relajantes y que atraen abejas', 15000.00, 6),
(59, 'Geranio', 'Planta de flores coloridas y duraderas que atraen abejas', 17000.00, 6),
(60, 'Jazmín', 'Planta trepadora con flores fragantes que atraen mariposas', 22000.00, 6),
(61, 'Bonsái de Pino', 'Pequeño árbol de pino cultivado en maceta', 150000.00, 7),
(62, 'Bonsái de Arce Japonés', 'Árbol de arce con hojas rojas cultivado en maceta', 200000.00, 7),
(63, 'Bonsái de Ficus', 'Árbol ficus en miniatura con hojas pequeñas', 130000.00, 7),
(64, 'Bonsái de Olmo Chino', 'Árbol de olmo cultivado en forma de bonsái', 170000.00, 7),
(65, 'Bonsái de Junípero', 'Árbol de junípero en miniatura', 140000.00, 7),
(66, 'Bonsái de Azalea', 'Árbol de azalea con flores cultivado en maceta', 180000.00, 7),
(67, 'Bonsái de Ciprés', 'Pequeño árbol de ciprés cultivado en maceta', 160000.00, 7),
(68, 'Bonsái de Granado', 'Árbol de granado en miniatura', 190000.00, 7),
(69, 'Bonsái de Cerezo', 'Árbol de cerezo con flores cultivado en maceta', 210000.00, 7),
(70, 'Bonsái de Ginkgo', 'Árbol de ginkgo biloba cultivado en forma de bonsái', 220000.00, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `plantscategory`
--

CREATE TABLE `plantscategory` (
  `ID_category` int(11) NOT NULL,
  `nameCategory` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `plantscategory`
--

INSERT INTO `plantscategory` (`ID_category`, `nameCategory`) VALUES
(1, 'plantasInteriores'),
(2, 'plantasExteriores'),
(3, 'plantasMedicinales'),
(4, 'suculentas'),
(5, 'plantasPurificadoras'),
(6, 'plantasPolinizadoras'),
(7, 'bonsais');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `client`
--
ALTER TABLE `client`
  ADD PRIMARY KEY (`ID_client`);

--
-- Indices de la tabla `learn`
--
ALTER TABLE `learn`
  ADD PRIMARY KEY (`ID_course`),
  ADD KEY `ID_client` (`ID_client`);

--
-- Indices de la tabla `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`ID_news`);

--
-- Indices de la tabla `order_shop`
--
ALTER TABLE `order_shop`
  ADD PRIMARY KEY (`ID_order`),
  ADD KEY `ID_client` (`ID_client`),
  ADD KEY `ID_plants` (`ID_plants`);

--
-- Indices de la tabla `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`ID_payment`),
  ADD KEY `ID_order` (`ID_order`);

--
-- Indices de la tabla `plant`
--
ALTER TABLE `plant`
  ADD PRIMARY KEY (`ID_plants`),
  ADD KEY `ID_category` (`ID_category`);

--
-- Indices de la tabla `plantscategory`
--
ALTER TABLE `plantscategory`
  ADD PRIMARY KEY (`ID_category`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `client`
--
ALTER TABLE `client`
  MODIFY `ID_client` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `learn`
--
ALTER TABLE `learn`
  MODIFY `ID_course` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `news`
--
ALTER TABLE `news`
  MODIFY `ID_news` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `order_shop`
--
ALTER TABLE `order_shop`
  MODIFY `ID_order` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `payment`
--
ALTER TABLE `payment`
  MODIFY `ID_payment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `plant`
--
ALTER TABLE `plant`
  MODIFY `ID_plants` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `plantscategory`
--
ALTER TABLE `plantscategory`
  MODIFY `ID_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `learn`
--
ALTER TABLE `learn`
  ADD CONSTRAINT `learn_ibfk_1` FOREIGN KEY (`ID_client`) REFERENCES `client` (`ID_client`);

--
-- Filtros para la tabla `order_shop`
--
ALTER TABLE `order_shop`
  ADD CONSTRAINT `order_shop_ibfk_1` FOREIGN KEY (`ID_client`) REFERENCES `client` (`ID_client`),
  ADD CONSTRAINT `order_shop_ibfk_2` FOREIGN KEY (`ID_plants`) REFERENCES `plant` (`ID_plants`);

--
-- Filtros para la tabla `payment`
--
ALTER TABLE `payment`
  ADD CONSTRAINT `payment_ibfk_1` FOREIGN KEY (`ID_order`) REFERENCES `order_shop` (`ID_order`);

--
-- Filtros para la tabla `plant`
--
ALTER TABLE `plant`
  ADD CONSTRAINT `plant_ibfk_1` FOREIGN KEY (`ID_category`) REFERENCES `plantscategory` (`ID_category`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
