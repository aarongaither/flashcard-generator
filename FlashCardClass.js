class ClozeCard {
    constructor(text, cloze) {
        if (this instanceof ClozeCard) {
            if (this.isValid(text, cloze)) {
                this.fullText = text;
                this.cloze = cloze;
                this.partial = this.getPartial(text, cloze);
            }
        } else {
            return new ClozeCard(text, cloze);
        }
    }

    isValid(text, cloze) {
        if (~text.indexOf(cloze)) {
            return true;
        } else {
            console.log(`Invalid card properties: '${text}' does not contain '${cloze}'.`);
            return false;
        }
    }

    getPartial(text, cloze) {
        return text.replace(cloze, '...');
    }

    logIt() {
        console.log(`Partial: ${this.partial} | Cloze: ${this.cloze}`)
    }
}

class BasicCard {
    constructor(front, back) {
        if (this instanceof BasicCard) {
            this.front = front;
            this.back = back;
        } else {
            return new BasicCard(front, back);
        }
    }

    logIt() {
        console.log(`Front: ${this.front} | Back: ${this.back}`)
    };
}

module.exports = {
    ClozeCard,
    BasicCard
}
