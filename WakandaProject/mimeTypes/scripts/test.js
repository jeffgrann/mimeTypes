function openFile (POSIXFilePath) {
	var theWorker;

	if (os.isWindows) {  // Windows platform
		theWorker = new SystemWorker('cmd.exe /C "' + toWindowsPath(POSIXFilePath) + '"');
		theWorker.wait(2000);
	}
	else {  // Mac or Linux platform
		theWorker = new SystemWorker('open ' + POSIXFilePath);
		theWorker.wait();
	}
}

function toWindowsPath (POSIXPath) {
	return POSIXPath.replace(/\//g, "\\");
}
	
var testCases = require('testCases');

var testCase = testCases.get();

var results = require("unitTest").run(testCase);

var htmlContent = results.getHtmlReport();

html = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\r\n'
html += '<html xmlns="http://www.w3.org/1999/xhtml">\r\n'
html += '<head>\r\n'
html += '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\r\n'
html += '<title>Test Cases</title>\r\n'
html += '</head>\r\n'
html += '<body>\r\n'
html += htmlContent + '\r\n'
html += '</body>\r\n'
html += '</html>\r\n'

var destinationFile = ds.getModelFolder().path + '/scripts/testResults.html';

var writeStream = TextStream(destinationFile, "Overwrite");

try {
	writeStream.write(html);
}
catch (error) {
	studio.alert("Could not create the results html file.");
	throw error;
}
finally {
	writeStream.close();
}

openFile(destinationFile);
results.getReport();
