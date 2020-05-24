-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 22, 2020 at 08:04 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;



-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

CREATE TABLE `personal_info` (
  `StudentID` int(11) NOT NULL,
  `Firstname` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `Lastname` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `DoB` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `personal_info`
--

INSERT INTO `personal_info` (`StudentID`, `Firstname`, `Lastname`, `DoB`) VALUES
(1, 'Robert', 'Dolls', '1985-01-10'),
(2, 'Peter', 'Jones', '1980-06-10'),
(3, 'Lily', 'James', '1991-10-20'),
(4, 'Harry', 'Potter', '1980-07-31'),
(5, 'Draco', 'Malfoy', '1980-06-05'),
(6, 'Hermione', 'Granger', '1979-07-19'),
(7, 'Ron', 'Weasley', '1980-03-01'),
(8, 'Fred', 'Weasley', '1978-04-01'),
(9, 'George', 'Weasley', '1978-04-01'),
(10, 'Ginny', 'Weasley', '1981-08-11'),
(11, 'Neville', 'Longbottom', '1980-07-30'),
(12, 'Bobby', 'Fisher', '1979-01-11'),
(13, 'Barnaby', 'Krueger', '1979-10-02'),
(14, 'Dimitri', 'Yang', '1980-10-08'),
(16, 'Sayed', 'Lester', '1982-02-25'),
(17, 'Donte', 'Franklin', '1982-08-10'),
(18, 'Martha', 'Bain', '1983-03-23'),
(19, 'Tanya', 'Hicks', '1984-04-11'),
(20, 'Linda', 'Gregory', '1984-12-26'),
(21, 'Mari', 'Navarro', '1986-05-09'),
(22, 'Neve', 'Chester', '1987-07-22'),
(23, 'Ayat', 'Mcdougall', '1987-10-21'),
(24, 'Claude', 'Molina', '1988-05-30'),
(25, 'Donnie', 'Mcloughlin', '1988-08-29'),
(26, 'Farhana', 'Shah', '1989-02-24'),
(27, 'Nichola', 'Gibson', '1989-09-15'),
(28, 'Lola-Mae', 'Hood', '1994-03-07'),
(29, 'Ryder', 'Carr', '1997-01-06'),
(30, 'Callam', 'Lim', '1997-02-13'),
(31, 'Igor', 'Cain', '1997-05-12'),
(32, 'Neal', 'Zuniga', '1999-07-20'),
(33, 'Malik', 'Ewing', '1999-10-29'),
(34, 'Ayva', 'Baxter', '1999-11-24'),
(35, 'Jimmie', 'Gamble', '2000-06-22'),
(36, 'Asia', 'Cuevas', '2000-12-01'),
(37, 'Kaylee', 'Simpson', '2001-05-18'),
(38, 'Tamera', 'Case', '1979-06-04'),
(39, 'Siddharth', 'Bean', '1979-11-30'),
(40, 'Catrin', 'Bright', '1981-01-27'),
(41, 'Claudia', 'Ashton', '1982-07-13'),
(42, 'Patrik', 'Wilcox', '1982-08-19'),
(43, 'Kiri', 'Traynor', '1982-10-26'),
(44, 'Finley', 'Mcdonnell', '1985-09-09'),
(45, 'Husnain', 'Pugh', '1986-02-04'),
(46, 'Magnus', 'Ellwood', '1986-05-22'),
(47, 'Kajol', 'Gale', '1987-04-24'),
(48, 'Debra', 'Regan', '1987-06-16'),
(49, 'Dollie', 'Shannon', '1987-07-20'),
(50, 'Betsy', 'Swan', '1987-11-05'),
(51, 'Zayaan', 'Hatfield', '1988-12-14'),
(52, 'Nikki', 'Sargent', '1989-03-02'),
(53, 'Taliah', 'Bouvet', '1990-05-09'),
(54, 'Jak', 'Dyer', '1991-09-20'),
(55, 'James', 'Mellor', '1995-02-24'),
(56, 'Maariyah', 'Moody', '1995-09-19'),
(57, 'Zack', 'Bains', '1996-03-26'),
(58, 'Rares', 'Rees', '1997-05-13'),
(59, 'Vicki', 'Osborn', '1998-01-30'),
(60, 'Aariz', 'Trujillo', '1998-02-26'),
(61, 'Raya', 'Cote', '1999-03-24'),
(62, 'Johnnie', 'Summers', '1982-01-07'),
(63, 'Raul', 'Wilkerson', '1982-06-21'),
(64, 'Aoife', 'Mcgrath', '1984-06-14'),
(65, 'Jillian', 'Fleming', '1985-01-07'),
(66, 'Suzanna', 'Sheppard', '1985-07-11'),
(67, 'Britany', 'Wallace', '1985-09-05'),
(68, 'Darrel', 'Palmer', '1986-03-31'),
(69, 'Jibril', 'Donnelly', '1987-06-25'),
(70, 'Zhane', 'Zavala', '1987-08-10');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
