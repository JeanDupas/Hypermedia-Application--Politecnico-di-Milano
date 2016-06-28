<?php

  require 'connexion.php';

  $postdata = file_get_contents('php://input');
  $request = json_decode($postdata);
  $id = mysqli_real_escape_string($mysqli, $request->id);

  $sql = "SELECT * FROM tAssistance a WHERE a.idAssistance = $id";
  if (!$result = $mysqli->query($sql)) {
      // Oh no! The query failed.
    echo 'Sorry, the website is experiencing problems.';
      exit;
  }

  if ($result->num_rows > 1) {
    // The id must be unique
    echo "Internal database error";
    exit;
}

  $rows = array();
  while ($r = $result->fetch_assoc()) {
      $rows[] = $r;
  }

  echo json_encode($rows);

  $result->free();
  $mysqli->close();
