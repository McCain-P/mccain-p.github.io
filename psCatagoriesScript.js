var output = "";
var grades = document.getElementById("scoreTable").getElementsByTagName("tbody")[0];
var assignmentsHtmlCollection = grades.children;
var assignments = [];
for (var i = 0; i < assignmentsHtmlCollection.length; i++) {
	assignments[i] = assignmentsHtmlCollection[i];
}
for (var i = 0; i < assignments.length; i++) {
	if (!/ng-scope/.test(assignments[i].className)) {
		assignments.splice(i, 1);
	};
};
var catagories = [];
/*
Each array represents {a, b}, where
a: Numerator Summation
b: Denominator Summation
*/
var catagoryNames = [];
for (var i = 0; i < assignments.length; i++) {
	var catagory = /(?:\s*)(\S*)(?:\s*)/.exec(assignments[i].children[1].children[1].innerHTML)[1];
	var found = false;
	var position = 0;
	for (var j = 0; j < catagoryNames.length; j++) {
		if (catagoryNames[j] === catagory) {
			found = true;
			position = j;
			break;
		};
	}
	if (!found) {
		position = catagoryNames.length;
		catagoryNames[position] = catagory;
		catagories[position] = [0, 0];
	};
	var numerator = /((\d|\.)+|--)(?:\/(?:(?:\d|\.)+|--))/.exec(assignments[i].children[10].innerHTML)[1];
	var denominator = /(?:(?:(?:\d|\.)+|--)\/)((\d|\.)+|--)/.exec(assignments[i].children[10].innerHTML)[1];
	if (numerator === "--") {
		numerator = 0;
		denominator = 0;
	} else if (denominator === "--") {
		numerator = Number(numerator);
		denominator = 0;
	} else {
		numerator = Number(numerator);
		denominator = Number(denominator);
	}
	catagories[position][0] += numerator;
	catagories[position][1] += denominator;
};
for (var i = 0; i < catagories.length; i++) {
	output += catagoryNames[i] + " = " + (Math.round(10000 * catagories[i][0] / catagories[i][1]) / 100) + "%" + "\n";
};
console.log(output);
var externalWindow = window.open();
externalWindow.document.open();
externalWindow.document.write("<pre>" + output + "</pre>");
externalWindow.document.close();
/*
URL version:
javascript:var e = document.createElement("script");e.src = "https://stevestevenson.github.io/psCatagoriesScript.js";document.body.appendChild(e);
*/
