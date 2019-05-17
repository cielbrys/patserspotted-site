<p><a href="index.php">Terug naar overzicht</a></p>
<?php

if (empty($todo)) {
  echo '<p>Deze todo kon niet gevonden worden</p>';
} else {
  foreach($todo as $todo){
  $timestamp = strtotime($todo['uur']);
  $uren = date("G", $timestamp);
  $min = date("i", $timestamp);

  $dag = date("d-F-Y", $timestamp);
if ($todo['text'] == 'startJob'){
  echo '<p>DAG: ' . $dag . '</p>';
}
  if($todo['text'] == 'startJob'){
  echo '<p class ="start">START UUR: ' . $uren . 'u' . $min . '</p>';
  } else if ($todo['text'] == 'stopJob'){
  echo '<p class ="stop">STOP UUR: ' . $uren . 'u' . $min . '</p>';
  }
}
}
?>
<p class ='betaalen'> </p>

<script src="./js/script.js"></script>


