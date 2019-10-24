var n = 0;
window.addEventListener("keydown", function(e) {
	var key = e.key;
	var characterIndexes = ["v", "r", "o", "o", "m", "v", "r", "o", "o", "m"];
	if (characterIndexes[n] === key) {
		n++;
	} else {
		n = 0;
	};
	if (n === characterIndexes.length) {
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
			} else if (directionKey === "ArrowDown" || directionKey === "s") {
				imagePosition[1]++;
				image.style.top = String(imagePosition[1]) + "vh";
			} else if (directionKey === "ArrowLeft" || directionKey === "a") {
				imagePosition[0]--;
				image.style.left = String(imagePosition[0]) + "vh";
			} else if (directionKey === "ArrowRight" || directionKey === "d") {
				imagePosition[0]++;
				image.style.left = String(imagePosition[0]) + "vh";
			};
		});
	};
});
d
