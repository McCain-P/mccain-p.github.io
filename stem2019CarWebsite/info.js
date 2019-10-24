var n = [0, 0];
var characterIndexes = [["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"], ["v", "r", "o", "o", "m", "v", "r", "o", "o", "m"]];
window.addEventListener("keydown", function(e) {
	var key = e.key;
	for (var i = 0; i < characterIndexes.length; i++) {
		if (characterIndexes[i][n][i] === key) {
			n[i]++;
		} else {
			n[i] = 0;
		};
		if (n[i] === characterIndexes[i].length) {
			if (i === 0) {
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
			} else {
				var image = document.createElement("img");
				image.src = "resources/testImage.png";
				image.style.height = "10vh";
				image.style.width = "auto";
				image.style.position = "fixed";
				image.style.top = "50vh";
				image.style.left = "50vw";
				var imagePosition = [50, 50];
				window.addEventListener("keydown", function(e) {
					var directionKey = e.key;
					if (directionKey === "ArrowUp" || directionKey === "w") {
						imagePosition[1]--;
						image.style.top = String(imagePosition[1]) + "vh";
						image.style.transform = "scale(-1, 1) rotate(90deg)";
					} else if (directionKey === "ArrowDown" || directionKey === "s") {
						imagePosition[1]++;
						image.style.top = String(imagePosition[1]) + "vh";
						image.style.transform = "scale(1, 1) rotate(270deg)";
					} else if (directionKey === "ArrowLeft" || directionKey === "a") {
						imagePosition[0]--;
						image.style.left = String(imagePosition[0]) + "vh";
						image.style.transform = "scale(-1, 1) rotate(0deg)";
					} else if (directionKey === "ArrowRight" || directionKey === "d") {
						imagePosition[0]++;
						image.style.left = String(imagePosition[0]) + "vh";
						image.style.transform = "scale(1, 1) rotate(0deg)";
					};
				});
			};
		};
});
