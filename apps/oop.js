module.exports = function Phone(name, model){
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

	Phone.prototype.call = function(){
	  return "Making a call"
	}

	Phone.prototype.message = function(){
		return "Sending a message"
	}

	Phone.prototype.addContact = function(contact){
		var newContact = contact;
		return newContact; 
	}
}
