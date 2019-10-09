var devToolsWindow = window.open("", "developerToolsWindow", "");
//^Possibly implement some window features
devToolsWindow.document.write("
	<html>
		<head>
			<title>
				Developer Tools
			</title>
			<style>
			
			</style>
		</head>
		<body>
			<div id="head">
				<button id="viewHtmlDom">
					HTML DOM
				</button>
				<button id="viewConsole">
					Console and JS
				</button>
			</div>
			<div id="body">
				<div id="htmlDom">
				
				</div>
				<div id="console">
				
				</div>
			</div>
		</body>
	</html>
");
