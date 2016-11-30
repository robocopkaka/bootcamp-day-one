var Phone = require('../apps/oop.js')
function SmartPhone(name, model){
	if(name === undefined){
		this.name = "Phone"
	}
	else{
		this.name = name
	}

	if(model === undefined){
		this.model = "Unknown Make"
	}
	else{
		this.model = model
	}
	var hidden = "Some specs"
}

SmartPhone.prototype = new Phone()

// add Specific Prototypes to the SmartPhone class


//demonstrating polymorphism by overwriting Phone's call method
SmartPhone.prototype.call = function(){
	return "Making a call using my " + this.name + " phone"
}
module.exports = SmartPhone;
// var me = new Phone();
// console.log(me.call());
// var kachi = new SmartPhone();
// console.log(kachi.call());