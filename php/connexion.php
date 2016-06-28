<?php


  $mysqli = new mysqli('127.0.0.1', 'root', 'root', 'tim');

  if ($mysqli->connect_errno) {
      // The connection failed.
      echo 'Sorry, this website is experiencing problems.';
      exit;
  }

  mysqli_set_charset($mysqli, 'utf8');
