var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve('.', 'public')));
app.listen(4000);
