onmessage = function (event) {
	tipp = event.data;
	var r = [0, 0, 0, 0, 0, 0, 0];

	var j = 0;
	for (j = 1; j <= 1000; j++) {

		var ziehung = [];
		var richtige = 0;

		for (i = 1; i <= 6; i++) {
			var eindeutig = false;
			while (!eindeutig) {
				var zufall = Math.round(Math.random() * 49 + 0.5);
				// Prüfen, ob diese Zahl bereits gezogen wurde
				if (ziehung.indexOf(zufall)==-1) {
					ziehung.push(zufall);
					eindeutig = true;

					if (tipp.indexOf(zufall)!=-1) richtige++;
				}
			}
		}

		r[richtige]++;
	}
	
	postMessage(r);
}

