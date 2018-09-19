var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');

const config = require('../config');

var User = require('../models/user');
console.log('init sequelize...');

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var now = Date.now();

  User.create({
    user_name: 'Gaffey',
    real_name:'Gaffey',
    sex: 1,
    mobile: '12345678',
    email: '111@163.com',
    note: '1'+now,
    position_id: 1
}).then(function (p) {
    console.log('created.' + JSON.stringify(p));
}).catch(function (err) {
    console.log('failed: ' + err);
});

res.send('respond with a resource');

});

router.post('/', function(req, res, next) {
    res.status(200).json({message:"11"});
});


router.get('/getUserList', function(req, res, next) {
    User.findAll({
        where: {
            user_name: 'Gaffey'
        }
    }).then(function (p) {
        res.status(200).json(p);
    }).catch(function (err) {
        console.log('failed: ' + err);
    });
});

router.get('/deleteUserList/:id', function(req, res, next) {
    const id = req.params.id;
    User.destroy({
        where: {
            id: id
        }
    }).then(function (p) {
        res.status(200).json(p);
    }).catch(function (err) {
        console.log('failed: ' + err);
    });
});


// PATCH single owner
// router.patch('/owner/:id', (req, res) => {
router.get('/updateUser/:id', (req, res) => {
    const id = req.params.id;
    //const updates = req.body.updates;
    User.find({
      where: { id: id }
    })
      .then(user => {
        // return user.updateAttributes(updates)
        return user.updateAttributes({user_name:'aaabbb'})
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });




module.exports = router;
