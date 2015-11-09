// var through = require('through2');
// var write = function(buffer, enoding, next) {
// 	this.push(buffer.toString().toUpperCase());
// 	next();
// };
// var end = function(done){
// 	done();
// };
// var stream = through(write, end);
// process.stdin.pipe(stream).pipe(process.stdout);

const through = require('through2'),
	  http = require('http'),
	  port = process.argv[2];

var write = function(buf, _, next) {
  this.push(buf.toString().toUpperCase());
  next();
};

var end = function(done) {
	done();
};

http.createServer(function (req, res) {
  if (req.method.toUpperCase() === 'POST') {
    req.pipe(through(write, end)).pipe(res);
  }
  else {
  	res.end('POST requests only!\n');
  }
}).listen(port);



