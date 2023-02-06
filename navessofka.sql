-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-02-2023 a las 09:30:32
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `navessofka`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `naves`
--

CREATE TABLE `naves` (
  `id_nave1` int(11) NOT NULL,
  `id_relacional_naves` varchar(200) NOT NULL,
  `dato_nuevo` text NOT NULL,
  `tipo_nave` text NOT NULL,
  `estado_nave1` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `naves`
--

INSERT INTO `naves` (`id_nave1`, `id_relacional_naves`, `dato_nuevo`, `tipo_nave`, `estado_nave1`) VALUES
(86, '46913', 'petroleo', 'nave1', 1),
(87, '31115', 'petroleo', 'nave1', 1),
(88, '54076', '500 TONELADAS', 'nave3', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vehiculos`
--

CREATE TABLE `vehiculos` (
  `id_v` int(11) NOT NULL,
  `nombre` text NOT NULL,
  `empuje` text NOT NULL,
  `destino` text NOT NULL,
  `combustible` text NOT NULL,
  `pais` text NOT NULL,
  `id_relacional_vehiculos` varchar(200) NOT NULL,
  `estado_vehiculos` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `vehiculos`
--

INSERT INTO `vehiculos` (`id_v`, `nombre`, `empuje`, `destino`, `combustible`, `pais`, `id_relacional_vehiculos`, `estado_vehiculos`) VALUES
(84, 'Falco X', '800 TONELADAS', 'Luna', '', 'RUSIA', '46913', 1),
(85, 'Apolo', '600 TONELADAS', 'Marte', '', 'EEUU', '31115', 1),
(86, 'Saturno V', '600 TONELADAS', 'Luna', '', 'EEUU', '54076', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `naves`
--
ALTER TABLE `naves`
  ADD PRIMARY KEY (`id_nave1`),
  ADD KEY `id_relacional_nave1` (`id_relacional_naves`);

--
-- Indices de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  ADD PRIMARY KEY (`id_v`),
  ADD KEY `id_relacional_vehiculos` (`id_relacional_vehiculos`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `naves`
--
ALTER TABLE `naves`
  MODIFY `id_nave1` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=90;

--
-- AUTO_INCREMENT de la tabla `vehiculos`
--
ALTER TABLE `vehiculos`
  MODIFY `id_v` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `naves`
--
ALTER TABLE `naves`
  ADD CONSTRAINT `naves_ibfk_1` FOREIGN KEY (`id_relacional_naves`) REFERENCES `vehiculos` (`id_relacional_vehiculos`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
