var nr = 0;
var str = "";

onconnect = function (event) {
	nr++;
	var port = event.ports[0];
	port.start();
	port.postMessage("Connect Nr. " + nr);

	port.addEventListener("message", 
		function (e) { str += e.data; port.postMessage(str); }, 
		false);  	
}


