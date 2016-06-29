<?php

  require 'connexion.php';

  $sql = "SELECT * FROM tAssistance a WHERE a.hightlight = 1 ORDER BY a.idAssistance";
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
