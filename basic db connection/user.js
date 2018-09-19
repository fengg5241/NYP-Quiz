var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');

const config = require('../config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

var User = sequelize.define('t_user', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    user_name: Sequelize.STRING(255),
    real_name: Sequelize.STRING(255),
    sex: Sequelize.INTEGER,
    mobile: Sequelize.STRING(255),
    email: Sequelize.STRING(255),
    note: Sequelize.STRING(255),
    position_id:Sequelize.INTEGER
}, {
        timestamps: false,
        freezeTableName:true
    });


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
        return user.updateAttributes({user_name:'aaa'})
      })
      .then(updatedOwner => {
        res.json(updatedOwner);
      });
  });




module.exports = router;
