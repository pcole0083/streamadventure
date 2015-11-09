var split = require('split');
var through2 = require('through2');
var odd = true;
var tr = through2(function(line, _, next) {
	var str = line.toString();
	this.push(!!odd
		? str.toLowerCase() + '\n'
		: str.toUpperCase() + '\n'
	);
	odd = !odd;
    next();
});
process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);

// var through = require('through2');
// var split = require('split');

// var lineCount = 0;
// var tr = through(function (buf, _, next) {
//     var line = buf.toString();
//     this.push(lineCount % 2 === 0
//         ? line.toLowerCase() + '\n'
//         : line.toUpperCase() + '\n'
//     );
//     lineCount ++;
//     next();
// });
// process.stdin
//     .pipe(split())
//     .pipe(tr)
//     .pipe(process.stdout);