<?php

  require 'connexion.php';

  $sql = "SELECT * FROM tPromotion pr, tDevices d, tPhones ph, tImages i WHERE pr.idDevice = d.idDevice AND d.idDevice = ph.idPhone AND d.idImage=i.idImage";
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
