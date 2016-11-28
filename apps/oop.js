module.exports = function Phone(name, model){
	if(name === undefined){
		this.name = undefined
	}
	else{
		this.name = name
	}
	if(this.model === undefined){
		this.model = undefined
	}
	else{
		this.model = model
	}
}
