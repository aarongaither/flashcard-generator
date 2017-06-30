let BasicCard = require('./BasicCard');
let ClozeCard = require('./ClozeCard');
let ClassCard = require('./FlashCardClass');

//tests from homework
console.log('Tests from assignment.')
let firstPresident = new BasicCard.singleCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

let firstPresidentCloze = new ClozeCard.singleCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
let brokenCloze = new ClozeCard.singleCard("This doesn't work", "oops");

// test basic cards
console.log('\nBasic Test');
[
    ['frontText1', 'backText1'],
    ['frontText2', 'backText2'],
    ['frontText3', 'backText3']
].map(elem => {
    return new BasicCard.singleCard(...elem);
}).forEach(elem => elem.logIt());

// test cloze cards, last two should log error during instantiation
console.log('\nCloze Test');
[
    ['this is example cloze text.', 'cloze'],
    ['Arnav is the best TA.', 'Arnav'],
    ['Actually, Ryan is the best TA.', 'Ryan'],
    ['Check for CASE sensitivity', 'case'], //should fail, from case mismatch
    ['Outright missing cloze.', 'fail'] //should fail, cloze word not in phrase
].map(elem => {
    return new ClozeCard.singleCard(...elem);
}).forEach(elem => elem.logIt());

// scope safe checks (except class, obv)
console.log('\nScope Test');
BasicCard.singleCard('What keyword was omitted?', 'new').logIt();
ClozeCard.singleCard('This was missing the new keyword.', 'new').logIt();

console.log('\nClass Test')
new ClassCard.BasicCard('Class Front', 'Class Back').logIt();

//test generator method for basic module
console.log('\nGenerator Tests')
console.log('Basic')
let genTestArrayBasic = [
    ['frontText4', 'backText4'],
    ['frontText5', 'backText5'],
    ['frontText6', 'backText6']
];

BasicCard.generator(genTestArrayBasic).forEach(elem => elem.logIt());

//test generator method for cloze module
console.log('\nCloze')
let genTestArrayCloze = [
    ['This is example text.', 'example'],
    ['This is another example text', 'another'],
    ['This is yet another example text', 'text']
];

ClozeCard.generator(genTestArrayCloze).forEach(elem => elem.logIt());
