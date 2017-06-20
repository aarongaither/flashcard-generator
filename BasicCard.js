function BasicCard (front, back) {
	if (this instanceof BasicCard){
		this.front = front;
		this.back = back;
	} else {
		return new BasicCard(front, back);
	}
}

BasicCard.prototype.logIt = function(){
	    console.log(`Front: ${this.front} | Back: ${this.back}`)
};

module.exports = BasicCard;