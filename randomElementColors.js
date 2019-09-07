var elements = document.getElementsByTagName("*");
for (var i = 0; i < elements.length; i++) {
	elements[i].style = "background-color: rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "); color: rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ");";
};