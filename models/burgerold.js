const orm = require('../config/orm.js');

const burger = {

  selectAll: function(cb){
    orm.selectAll( 'burgers',function(res){

      cb(res);
    });     
  	},
  

  		insertOne: function(burger_name, cb){
   		orm.insertOne('burgers','burger_name' , burger_name, function(res) {
   			
   			cb(res);
   			
   		});     

  	},
     
  		updateOne: function( burger_id, cb){
  		orm.updateOne('burgers','devoured',true, burger_id, function(res) {
  			
  			cb(res)

  		});
	}, restoreOne: function(burger_id, cb) {
  		orm.updateOne('burgers','devoured',false, burger_id, function(res) {
  			
  			cb(res)

  		});

	}
};

module.exports = burger;