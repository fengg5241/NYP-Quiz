const db = require('../db');

module.exports = db.defineModel('t_user', {
    id: {
        type: db.INTEGER,
        primaryKey: true
    },
    user_name: db.STRING(255),
    real_name: db.STRING(255),
    sex: db.INTEGER,
    mobile: db.STRING(255),
    email: db.STRING(255),
    note: db.STRING(255),
    position_id:db.INTEGER
});
