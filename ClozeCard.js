function ClozeCard (text, cloze) {
    if (this instanceof ClozeCard){ 
        if (this.isValid(text, cloze)) {
            this.fullText = text;
            this.cloze = cloze;
            this.partial = this.getPartial(text, cloze);
        }
    } else {
        return new ClozeCard(text, cloze);
    }
}

ClozeCard.prototype = {
    isValid (text, cloze) {
        if (~text.indexOf(cloze)){
            return true;
        } else {
            console.log(`Invalid card properties: '${text}' does not contain '${cloze}'.`);
            return false;
        }
    },
    getPartial (text, cloze) {
        return text.replace(cloze, '...');
    },
    logIt() {
        console.log(`Partial: ${this.partial} | Cloze: ${this.cloze}`)
    }
};

module.exports = ClozeCard;