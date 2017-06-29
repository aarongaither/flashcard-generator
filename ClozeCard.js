function singleCard (text, cloze) {
    if (this instanceof singleCard){ 
        if (this.isValid(text, cloze)) {
            this.fullText = text;
            this.cloze = cloze;
            this.partial = this.getPartial(text, cloze);
        }
    } else {
        return new singleCard(text, cloze);
    }
}

singleCard.prototype.isValid = function (text, cloze) {
    if (~text.indexOf(cloze)){
        return true;
    } else {
        console.log(`Invalid card properties: '${text}' does not contain '${cloze}'.`);
        return false;
    }
};

singleCard.prototype.getPartial = function (text, cloze) {
        return text.replace(cloze, '...');
};

singleCard.prototype.logIt = function () {
        console.log(`Partial: ${this.partial} | Cloze: ${this.cloze}`);
};

function generator (arr) {
    return arr.map(elem => {return new singleCard(...elem);})
}

module.exports = {
    singleCard,
    generator
};