var net = require('net');

var delimiter = '\n';

var server = net.createServer(function(socket){

	socket.on('data', function(data){
		console.log('got data from client');
		console.log(data.toString().replace(new RegExp(delimiter.replace('/', "\/") + '$'), '').split(delimiter));
		socket.write('\n');
	});
});

server.listen(9999, function(){
	console.log('test server listening on port 9999');
});