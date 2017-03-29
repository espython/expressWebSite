var multer = require('multer');

module.exports = function(app) {
    var storage = multer.diskStorage({

            destination: function(req, file, callback) {
                callback(null, './public/img');
            },

                fileName: function(req, file, callback) {
                    callback(null, file.originalname + '_' + Dat.now());
                }

        });

var upload = multer({
    storage: storage
}).single('images');

app.post('/image', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.send('Error uploading file');
        }
        res.send("File is uploaded");
    });

});




}
