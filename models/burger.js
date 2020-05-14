var orm = require('../config/orm.js');

var burger = {
	//selectall  to select all burgers from database using orm selectall a
	selectAll: function (cb) {
		orm.selectAll('burgers', cb);
	},
	//insertone to insert burger with burgername from database using insertOne orm 
	insertOne: function (burger_name, cb) {
		orm.insertOne('burgers', 'burger_name', burger_name, cb);
	},
	//updateOne to update burger_id to devoured. (true) uses orm updateOne        
	updateOne: function (burger_id, cb) {
		orm.updateOne('burgers', 'devoured', true, burger_id, cb);
	},
	//restoreone to update burger_id to not devoured (false) uses updateOne orm
	restoreOne: function (burger_id, cb) {
		orm.updateOne('burgers', 'devoured', false, burger_id, cb);
	}
};
//exports burger
module.exports = burger;