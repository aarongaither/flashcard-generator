let BasicCard = require('./BasicCard');
let ClozeCard = require('./ClozeCard');
let ClassCard = require('./FlashCardClass');

console.log('');
// test basic cards
console.log('Basic Test');
[
    ['frontText1', 'backText1'],
    ['frontText2', 'backText2'],
    ['frontText3', 'backText3']
].map(elem => {
    return new BasicCard.singleCard(...elem);
}).forEach(elem => elem.logIt());
console.log('');

// test cloze cards, last two should log error during instantiation
console.log('Cloze Test');
[
    ['this is example cloze text.', 'cloze'],
    ['Arnav is the best TA.', 'Arnav'],
    ['Actually, Ryan is the best TA.', 'Ryan'],
    ['Check for CASE sensitivity', 'case'], //should fail, from case mismatch
    ['Outright missing cloze.', 'fail'] //should fail, cloze word not in phrase
].map(elem => {
    return new ClozeCard.singleCard(...elem);
}).forEach(elem => elem.logIt());
console.log('');

//check scope safe
console.log('Scope Test');
let basicWithoutNew = BasicCard.singleCard('What keyword was omitted?', 'new');
basicWithoutNew.logIt();

let clozeWithoutNew = ClozeCard.singleCard('This was missing the new keyword.', 'new');
clozeWithoutNew.logIt();

let basicClassTest = new ClassCard.BasicCard('Class Front', 'Class Back');
basicClassTest.logIt();
console.log('')

//test generator method for basic module
console.log('Generator Tests')
console.log('Basic')
let genTestArrayBasic = [
    ['frontText4', 'backText4'],
    ['frontText5', 'backText5'],
    ['frontText6', 'backText6']
];

let generatedBasic = BasicCard.generator(genTestArrayBasic);
generatedBasic.forEach(elem => elem.logIt());

//test generator method for cloze module
console.log('Cloze')
let genTestArrayCloze = [
    ['This is example text.', 'example'],
    ['This is another example text', 'another'],
    ['This is yet another example text', 'text']
];

let generatedCloze = ClozeCard.generator(genTestArrayCloze);
generatedCloze.forEach(elem => elem.logIt());
