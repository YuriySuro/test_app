-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Час створення: Лют 07 2022 р., 00:38
-- Версія сервера: 10.4.22-MariaDB
-- Версія PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `test_app`
--

-- --------------------------------------------------------

--
-- Структура таблиці `images_bottom`
--

CREATE TABLE `images_bottom` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп даних таблиці `images_bottom`
--

INSERT INTO `images_bottom` (`id`, `name`) VALUES
(1, 'red_cartoon_bottom'),
(2, 'green_bottom'),
(3, 'yellow_cartoon_bottom');

-- --------------------------------------------------------

--
-- Структура таблиці `images_middle`
--

CREATE TABLE `images_middle` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп даних таблиці `images_middle`
--

INSERT INTO `images_middle` (`id`, `name`) VALUES
(1, 'red_cartoon_middle'),
(2, 'yellow_cartoon_middle');

-- --------------------------------------------------------

--
-- Структура таблиці `images_top`
--

CREATE TABLE `images_top` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп даних таблиці `images_top`
--

INSERT INTO `images_top` (`id`, `name`) VALUES
(1, 'yellow_cartoon_top'),
(2, 'ellipse_top'),
(3, 'map_top');

-- --------------------------------------------------------

--
-- Структура таблиці `socialnetworks`
--

CREATE TABLE `socialnetworks` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп даних таблиці `socialnetworks`
--

INSERT INTO `socialnetworks` (`id`, `name`) VALUES
(1, 'linkedin'),
(2, 'twitter'),
(3, 'facebook'),
(4, 'pinterest');

-- --------------------------------------------------------

--
-- Структура таблиці `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп даних таблиці `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `message`) VALUES
(1, 'Yurii Kovalenko', 'yuriikovalenko@mail.com', 'Hi, my name is Yurii!'),
(2, 'Gennadiy Korban', 'gena@mail.com', 'Hi, my name is Genadii!'),
(3, 'Leonid Danko', 'Leonid@mail.com', 'Hi my name Leonid!'),
(19, '111111', '111111@mail.com', '111111'),
(20, '2222', '2222@mail.com', '2222'),
(21, '1111111', '222222@mail.com', '444444444444444444444444');

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `images_bottom`
--
ALTER TABLE `images_bottom`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `images_middle`
--
ALTER TABLE `images_middle`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `images_top`
--
ALTER TABLE `images_top`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `socialnetworks`
--
ALTER TABLE `socialnetworks`
  ADD PRIMARY KEY (`id`);

--
-- Індекси таблиці `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `images_bottom`
--
ALTER TABLE `images_bottom`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `images_middle`
--
ALTER TABLE `images_middle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблиці `images_top`
--
ALTER TABLE `images_top`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблиці `socialnetworks`
--
ALTER TABLE `socialnetworks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT для таблиці `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
