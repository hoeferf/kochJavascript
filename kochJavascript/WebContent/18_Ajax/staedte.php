<?php
	header("Content-Type: text/xml");

	$num = $_GET["value"];

	$stadt[1] = "Berlin"; $einwohner[1] = "3.397";
	$stadt[2] = "Hamburg"; $einwohner[2] = "1.774";
	$stadt[3] = "München"; $einwohner[3] = "1.330";
	$stadt[4] = "Köln"; $einwohner[4] = "998";
	$stadt[5] = "Frankfurt"; $einwohner[5] = "672";
	$stadt[6] = "Stuttgart"; $einwohner[6] = "602";
	$stadt[7] = "Hannover"; $einwohner[7] = "521";
	$stadt[8] = "Dresden"; $einwohner[8] = "517";
	$stadt[9] = "Kiel"; $einwohner[9] = "238";
	$stadt[10] = "Rostock"; $einwohner[10] = "201";

	$ausgabe = 	'<?xml version="1.0" encoding="UTF-8"?>' .
				'<stadt>' .
				'<name>' . $stadt[$num] . '</name>' .
				'<einwohner>' . $einwohner[$num] .
				'</einwohner></stadt>';

	echo utf8_encode($ausgabe);

?>