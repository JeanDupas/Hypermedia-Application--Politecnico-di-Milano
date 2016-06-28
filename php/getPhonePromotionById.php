<?php

  require 'connexion.php';

  $postdata = file_get_contents('php://input');
  $request = json_decode($postdata);
  $id = mysqli_real_escape_string($mysqli, $request->id);

  $sql = "SELECT * FROM tPromotion pr, tDevices d, tPhones ph, tImages i WHERE d.idDevice = $id AND pr.idDevice = d.idDevice AND d.idDevice = ph.idPhone AND d.idImage=i.idImage";
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
