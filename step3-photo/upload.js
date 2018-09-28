var express = require('express');
var router = express.Router();

//require multer for the file uploads
var multer = require('multer');
// set the directory for the uploads to the uploaded to
var DIR = '../uploads/';


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    // let ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length);
    cb(null, Date.now() + "-"+file.originalname);
  }
})

//define the type of upload multer would be doing and pass in its destination, in our case, its a single file with the name photo
var upload = multer({storage: storage}).single('photo');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function (req, res, next) {
  res.send('respond with a resource');
});

//our file upload function.
router.post('/upload', function (req, res, next) {
  var path = '';
  upload(req, res, function (err) {
     if (err) {
       // An error occurred when uploading
       console.log(err);
       return res.status(422).send("an Error occured")
     }  
    // No error occured.
     path = req.file.path;
     console.log(path);
     return res.send("Upload Completed for "+path); 
});     
});
module.exports = router;
