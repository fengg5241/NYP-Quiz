var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');

const config = require('../config');

var User = require('../models/user');
var Product = require('../models/product');
Product.belongsTo(User,{foreignKey:'user_id'});

console.log('init sequelize...');

/* GET users listing. */

router.get('/', function(req, res, next) {
    // var include = [{
    //     model: User,
    //     as: 'user'
    // }];
    var include = [{
        association: Product.belongsTo(User, {foreignKey:'user_id', as:'user'})
        //where: {isManager:true}
    }]

    Product.findAll({include:include}).then((result) => {
        result.forEach(product => {
            console.log(product.product_name + ' 是 '+product.user.user_name+' 的产品');
        });
        res.status(200).json(result);
        
    }).catch((err) => {
        console.error(err);
    });
  


//res.send('respond with a resource');

});

router.post('/', function(req, res, next) {
    res.status(200).json({message:"11"});
});


module.exports = router;
