const db = require('../db');

var User = require('../models/user');

module.exports = db.defineModel('t_product', {
    id: {
        type: db.INTEGER,
        primaryKey: true
    },
    product_name: db.STRING(255),
    user_id: db.INTEGER
    // user_id: {
    //     type: db.INTEGER,
    //     references: {
    //       model: User,
    //       key: 'id'
    //     }
    //   }
    
});
