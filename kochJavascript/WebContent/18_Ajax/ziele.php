<?php
	header("Content-Type: text/plain");

	$abflug = $_GET["value"];

	$ziele["Frankfurt"] = "London+Paris+Rom+Stockholm";
	$ziele["London"] = "Frankfurt+Paris+Stockholm";
	$ziele["Paris"] = "Frankfurt+London";
	$ziele["Rom"] = "Frankfurt+Stockholm";
	$ziele["Stockholm"] = "Frankfurt+London+Rom";

	echo $ziele[$abflug];
?>