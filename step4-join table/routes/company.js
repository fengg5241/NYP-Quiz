var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const config = require('../config');

console.log('init sequelize...');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

console.log('init sequelize...');

/* GET users listing. */
router.get('/', function(req, res, next) {
   // 定义User模型
var User = sequelize.define('user', {
	id:{type: Sequelize.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
	name: { type: Sequelize.STRING, comment:'姓名' },
	sex: { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0, comment:'性别' },
	companyId: { type: Sequelize.BIGINT(11), field: 'company_id', allowNull: false, comment:'所属公司' },
	isManager: { type: Sequelize.BOOLEAN, field: 'is_manager', allowNull: false, defaultValue: false, comment:'是否管理员'}
}, 
{ charset: 'utf8',
	collate: 'utf8_general_ci'});

// 定义Company模型
var Company = sequelize.define('company', {
	id:{ type:Sequelize.BIGINT(11), autoIncrement:true, primaryKey : true, unique : true},
	name: { type: Sequelize.STRING, comment:'公司名称' }
}, 
{ charset: 'utf8',
	collate: 'utf8_general_ci'});

// 定义User-Company关联关系
User.belongsTo(Company, {foreignKey:'companyId'});

// sequelize.sync({force:true}).then(() => {
// 	process.exit();
// });

// Company.create({name:'某公司'}).then((result) => {
// 	return Promise.all([
// 		User.create({name:'何民三', sex:1, companyId:result.id, isManager: true}),
// 		User.create({name:'张老二', sex:1, companyId:result.id})
// 	])
// }).then((result) => {
// 	console.log('done');
// }).catch((err) => {
// 	console.error(err);
// });

var include = [{
	model: Company,
	as: 'company'
}];
User.findOne({include:include}).then((result) => {
	console.log(result.name + ' 是 '+result.company.name+' 的员工');
}).catch((err) => {
	console.error(err);
});

res.send('respond with a resource');

});

router.post('/', function(req, res, next) {
    res.status(200).json({message:"11"});
});


module.exports = router;
