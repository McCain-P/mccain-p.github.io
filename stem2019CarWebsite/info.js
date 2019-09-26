var n = 0;
window.addEventListener("keydown", function(e) {
	var key = e.key;
	var characterIndexes = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
	if (characterIndexes[n] === key) {
		n++;
	} else {
		n = 0;
	};
	if (n === 10) {
		var styleElement = document.createElement("style");
		styleElement.innerHTML = "@keyframes colorTransition { 0% { background-color: RGB(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "); } 100% { background-color: RGB(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "); } }";
		document.head.appendChild(styleElement);
		var popup = document.createElement("div");
		popup.style.height = "40vh";
		popup.style.width = "calc(160vh / 3)";
		popup.style.position = "fixed";
		popup.style.top = "30vh";
		popup.style.left = "50vw";
		popup.style.transform = "translateX(-50%)";
		popup.style.zIndex = "9999";
		popup.style.backgroundColor = "#ffff00";
		popup.style.animation = "0.2s linear 0s infinite alternate none running colorTransition";
		var popupText = document.createElement("p");
		popupText.style.fontFamily = '"Comic Sans MS", "Comic Sans", sans-serif';
		popupText.style.fontSize = "10vh";
		popupText.style.textAlign = "center";
		popupText.style.margin = "0";
		popupText.style.padding = "0";
		popupText.style.position = "absolute";
		popupText.style.left = "50%";
		popupText.style.top = "50%";
		popupText.style.transform = "translate(-50%, -50%)";
		var message = "FUCK TSA";
		for (var i = 0; i < message.length; i++) {
			var span = document.createElement("span");
			span.style.color = "RGB(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
			span.innerHTML = message.charAt(i);
			popupText.appendChild(span);
		};
		popup.appendChild(popupText);
		document.body.appendChild(popup);
	};
});
