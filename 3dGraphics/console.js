var consoleWindow = window.open();
var consoleElement = consoleWindow.document.createElement("p");
consoleElement.style.backgroundColor = "RGB(0,0,0)";
consoleElement.style.color = "RGB(255,255,255)";
consoleElement.style.fontFamily = "Consolas, Menlo, Monaco, monospace";
consoleElement.style.fontSize = "12px";
consoleElement.style.height = "100vh";
consoleElement.style.width = "100vw";
consoleWindow.document.appendChild(consoleElement);
