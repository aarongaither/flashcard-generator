function singleCard (front, back) {
	if (this instanceof singleCard){
		this.front = front;
		this.back = back;
	} else {
		return new singleCard(front, back);
	}
}

singleCard.prototype.logIt = function(){
	    console.log(`Front: ${this.front} | Back: ${this.back}`)
};

function generator (arr) {
	return arr.map(elem => {return new singleCard(...elem);})
}

module.exports = {
	singleCard,
	generator
};