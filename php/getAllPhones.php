<?php


  require 'connexion.php';

  $sql = 'SELECT * FROM tDevices d, tPhones p, tImages i WHERE d.idDevice=p.idPhone AND d.idImage=i.idImage ORDER BY d.idDevice';
  if (!$result = $mysqli->query($sql)) {
      // Oh no! The query failed.
    echo 'Sorry, the website is experiencing problems.';
      exit;
  }

  $rows = array();
  while ($r = $result->fetch_assoc()) {
      $rows[] = $r;
  }

  echo json_encode($rows);

  $result->free();
  $mysqli->close();
