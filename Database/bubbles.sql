-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 16, 2022 at 02:45 AM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bubbles`
--

-- --------------------------------------------------------

--
-- Table structure for table `bb_users`
--

CREATE TABLE `bb_users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `contact_number` varchar(11) DEFAULT NULL,
  `fk_role_id` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `status` enum('Active','Inactive') NOT NULL DEFAULT 'Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `bb_users`
--

INSERT INTO `bb_users` (`id`, `name`, `email`, `password`, `contact_number`, `fk_role_id`, `created_at`, `status`) VALUES
(3, 'Dinesh', 'dinesh@gmail.com', '123', '989878908', 1, '2022-08-14 18:07:51', 'Active'),
(5, 'ram km', 'hh@gmail.com', '5289df737df57326fcdd22597afb1fac', '09958845564', 4, '2022-08-14 18:13:49', 'Active'),
(6, 'Dinesh', 'dinesh@gmail.com', '5289df737df57326fcdd22597afb1fac', '989878908', 1, '2022-08-14 18:14:46', 'Active'),
(8, 'Dinesh', 'dinesh@gmail.com', '202cb962ac59075b964b07152d234b70', '989878908', 4, '2022-08-14 22:20:48', 'Active');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bb_users`
--
ALTER TABLE `bb_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bb_users`
--
ALTER TABLE `bb_users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
