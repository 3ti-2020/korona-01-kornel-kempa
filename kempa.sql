-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Czas generowania: 19 Maj 2020, 12:40
-- Wersja serwera: 5.7.23
-- Wersja PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `kempa`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `poziom_trudnosci`
--

DROP TABLE IF EXISTS `poziom_trudnosci`;
CREATE TABLE IF NOT EXISTS `poziom_trudnosci` (
  `id` int(11) NOT NULL,
  `nazwa` text COLLATE utf8_unicode_ci NOT NULL,
  `poziom` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `poziom_trudnosci`
--

INSERT INTO `poziom_trudnosci` (`id`, `nazwa`, `poziom`) VALUES
(1, 'kalkulator1', 'łatwy'),
(2, 'kalkulator2', 'średni'),
(3, 'kalkulator3', 'ciężki');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `spis`
--

DROP TABLE IF EXISTS `spis`;
CREATE TABLE IF NOT EXISTS `spis` (
  `id` int(11) NOT NULL,
  `nazwa` text COLLATE utf8_unicode_ci NOT NULL,
  `data_dodania` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Zrzut danych tabeli `spis`
--

INSERT INTO `spis` (`id`, `nazwa`, `data_dodania`) VALUES
(1, 'kalkulator1', '2020-05-19'),
(2, 'kalkulator2', '2020-05-19'),
(3, 'kalkulator3', '2020-05-19');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
