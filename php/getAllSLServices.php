<?php


  require 'connexion.php';

  $sql = 'SELECT * FROM tSmartLifeServices s, tImages i WHERE s.idImage=i.idImage ORDER BY s.idSLService';

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
