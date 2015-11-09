var fs = require('fs');
var params 	= process.argv.slice(2),
	file 	= params[0];
	
fs.createReadStream(file).pipe(process.stdout);