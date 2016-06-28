<?php

  require 'connexion.php';

  $postdata = file_get_contents('php://input');
  $request = json_decode($postdata);
  $cat = mysqli_real_escape_string($mysqli, $request->category);

  $sql = "SELECT * FROM tSmartLifeServices s, tImages i WHERE s.category = '$cat' AND s.idImage=i.idImage ORDER BY s.idSLService";
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
