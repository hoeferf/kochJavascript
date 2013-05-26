function erstesInterval() {
	var anfang = new Date().getTime();

	for (var i = 0; i < 5000000; i++) {
		var j = i * i;
	}

	var ende = new Date().getTime();

	postMessage([anfang, ende]);
}

// interval1 starten
var interval1 = setInterval(erstesInterval, 100);