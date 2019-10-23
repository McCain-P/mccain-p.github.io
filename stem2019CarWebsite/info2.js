var n = 0;
window.addEventListener("keydown", function(e) {
	var key = e.key;
	var characterIndexes = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
	if (characterIndexes[n] === key) {
		n++;
	} else {
		n = 0;
	};
	if (n === characterIndexes.length) {
		
	};
});
