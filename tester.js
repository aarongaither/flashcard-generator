let BasicCard = require('./BasicCard');
let ClozeCard = require('./ClozeCard');

console.log('')
// test basic cards
console.log('Basic Test');
[['frontText1', 'backText1'],
	['frontText2', 'backText2'],
	['frontText3', 'backText3']
	].map(elem => {return new BasicCard(...elem);
	}).forEach(elem => elem.logIt()
);
console.log('');

// test cloze cards, last two should log error during instantiation
console.log('Cloze Test');
[['this is example cloze text.', 'cloze'],
	['Arnav is the best TA.', 'Arnav'],
	['Actually, Ryan is the best TA.', 'Ryan'],
	['Check for CASE sensitivity', 'case'],		//should fail, from case mismatch
	['Outright missing cloze.', 'fail']         //should fail, cloze word not in phrase
	].map(elem => {return new ClozeCard(...elem);
	}).forEach(elem => elem.logIt()
);
console.log('');

//check scope safe
console.log('Scope Test');
let basicWithoutNew = BasicCard('What keyword was omitted?', 'new');
basicWithoutNew.logIt();

let clozeWithoutNew = ClozeCard('This was missin the new keyword.', 'new');
clozeWithoutNew.logIt();