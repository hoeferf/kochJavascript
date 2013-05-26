function setzeCookie(name, wert) {
	var arg_wert = setzeCookie.arguments;
	var arg_laenge = setzeCookie.arguments.length;
	var expires = (arg_laenge > 2) ? arg_wert[2] : null;
	var path = (arg_laenge > 3) ? arg_wert[3] : null;
	var domain = (arg_laenge > 4) ? arg_wert[4] : null;
	var secure = (arg_laenge > 5) ? arg_wert[5] : false;
	document.cookie = name + "=" + encodeURIComponent(wert) +
		((expires == null) ? "" : ("; expires=" + 
			expires.toGMTString())) +
		((path == null) ? "" : ("; path=" + path)) +
		((domain == null) ? "" : ("; domain=" + domain)) +
		((secure == true) ? "; secure" : "");
}

function holeCookie(name) {
	name += "=";
	var laenge = name.length;
	var cookie_laenge = document.cookie.length;
	var i = 0;
	while (i < cookie_laenge) {
		var j = i + laenge;
		if (document.cookie.substring(i, j) == name) 
			return holeCookieWert(j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0)
			break;
	}
	return null;
}

function holeCookieWert(position) {
	var ende = document.cookie.indexOf(";", position);
	if (ende == -1) 
		ende = document.cookie.length;
	return decodeURIComponent(
		document.cookie.substring(position, ende));
}

function loescheCookie(name) {
	var exp = new Date();
	exp.setTime(exp.getTime() - 1);
	var cookie_wert = holeCookie(name);
	if (cookie_wert != null)
		document.cookie = name + "=" + cookie_wert + 
				"; expires=" + exp.toGMTString();
}