var multer = require('multer');

module.exports = function(app) {
    // var saveImage = function() {
    //     var possible = 'abcdefghijklmnopqrstuvwxyz0123456789',
    //         imgUrl = '';
    //     for (var i = 0; i < 6; i += 1) {
    //         imgUrl += possible.charAt(Math.floor(Math.random() *
    //             possible.length));
    //     }
    //     var tempPath = req.files.file.path,
    //         ext = path.extname(req.files.file.name).toLowerCase(),
    //         targetPath = path.resolve('./public/upload/' + imgUrl + ext);
    //     if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext ===
    //         '.gif') {
    //         fs.rename(tempPath, targetPath, function(err) {
    //             if (err) throw err;
    //             res.redirect('/images/' + imgUrl);
    //         });
    //     } else {
    //         fs.unlink(tempPath, function() {
    //             if (err) throw err;
    //             res.json(500, {
    //                 error: 'Only image files are allowed.'
    //             });
    //         });
    //     }
    // };
    // saveImage()
    var storage = multer.diskStorage({

        destination: function(req, file, callback) {
            callback(null, './public/img');
        },

        fileName: function(req, file, callback) {
            callback(null, file.fieldName + '_' + Dat.now());
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
