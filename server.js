const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(favicon(__dirname + '/build/favicon.ico'));
app.use(express.static(__dirname + '/dist/browser'));

app.get('/*', function(req,res) {
	res.sendFile(path.join(__dirname+'/dist/browser/index.html'));
});

app.listen(port, () => {
   console.log('Server is up :)');
});


