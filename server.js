var express = require('express');

var server = express();
server.use(express.static(path.join(__dirname , 'app')));
server.listen(80);