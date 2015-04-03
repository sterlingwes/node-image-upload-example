var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var multer = require('multer');

/*
 * static middleware serves all files in the /public & /uploads sub folders
 */
app.use(express.static('public'));

// for the uploads folder, make all files within available at the "/uploads"
// path, ie: localhost:8080/uploads/
app.use('/uploads', express.static('uploads'));

/*
 * setup the request body parser "plugin" that will handle the form data,
 * and specify where the file should be stored
 */
app.use(multer({ dest: './uploads' }));

/*
 * handles saving uploaded images
 */
app.post('/upload', function (req, res) {
    var savePath = req.files.file.path;
    console.log('file saved to ' + savePath);
    res.json({ ok: true, filename: savePath });
});

var port = 9000;
app.listen(port, '0.0.0.0');
console.log('Server running on port ' + port);