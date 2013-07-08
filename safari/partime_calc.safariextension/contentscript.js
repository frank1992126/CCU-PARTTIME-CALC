if( document.URL.match('xa2.php') != null) {
	var total_time = 0;
	var list = document.getElementsByTagName("table").item(0);

	for(var i=1; i < list.rows.length; i++) {
		var num = parseFloat(list.rows[i].getElementsByTagName("td").item(3).innerText);
		total_time += num;
	}
	document.getElementsByTagName("table")[0].parentElement.innerHTML += "總時數："+total_time+"小時";
}