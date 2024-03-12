const chai = require('chai');
const assert = chai.assert;
let text;
const Translator = require('../components/translator.js');
let translator=new Translator();
suite('Unit Tests', () => {
    test('1将 Mangoes are my favorite fruit. 转换成英式英语',(done)=>{
        text='Mangoes are my favorite fruit.';
        assert.equal(translator.toBritish(text).textNocol,'Mangoes are my favourite fruit.');
        done();
    })
    test('2I ate yogurt for breakfast.',(done)=>{
        text='I ate yogurt for breakfast.';
        assert.equal(translator.toBritish(text).textNocol,'I ate yoghurt for breakfast.');
        done();
    })
    test("3We had a party at my friend's condo.",(done)=>{
        text="We had a party at my friend's condo.";
        assert.equal(translator.toBritish(text).textNocol,"We had a party at my friend's flat.");
        done();
    })
    test("4Can you toss this in the trashcan for me?",(done)=>{
        text="Can you toss this in the trashcan for me?";
        assert.equal(translator.toBritish(text).textNocol,"Can you toss this in the bin for me?");
        done();
    })
    test("5The parking lot was full.",(done)=>{
        text="The parking lot was full.";
        assert.equal(translator.toBritish(text).textNocol,"The car park was full.");
        done();
    })
    test("6Like a high tech Rube Goldberg machine.",(done)=>{
        text="Like a high tech Rube Goldberg machine.";
        assert.equal(translator.toBritish(text).textNocol,"Like a high tech Heath Robinson device.");
        done();
    })
    test("7To play hooky means to skip class or work.",(done)=>{
        text="To play hooky means to skip class or work.";
        assert.equal(translator.toBritish(text).textNocol,"To bunk off means to skip class or work.");
        done();
    })
    test("8No Mr. Bond, I expect you to die.",(done)=>{
        text="No Mr. Bond, I expect you to die.";
        assert.equal(translator.toBritish(text).textNocol,"No Mr Bond, I expect you to die.");
        done();
    })
    test("9Dr. Grosh will see you now.",(done)=>{
        text="Dr. Grosh will see you now.";
        assert.equal(translator.toBritish(text).textNocol,"Dr Grosh will see you now.");
        done();
    })
    test("10Lunch is at 12:15 today.",(done)=>{
        text="Lunch is at 12:15 today.";
        assert.equal(translator.toBritish(text).textNocol,"Lunch is at 12.15 today.");
        done();
    })
    test("11We watched the footie match for a while.",(done)=>{
        text="We watched the footie match for a while.";
        assert.equal(translator.toAmerican(text).textNocol,"We watched the soccer match for a while.");
        done();
    })
    test("12Paracetamol takes up to an hour to work.",(done)=>{
        text="Paracetamol takes up to an hour to work.";
        assert.equal(translator.toAmerican(text).textNocol,"Tylenol takes up to an hour to work.");
        done();
    })
    test("13First, caramelise the onions.",(done)=>{
        text="First, caramelise the onions.";
        assert.equal(translator.toAmerican(text).textNocol,"First, caramelize the onions.");
        done();
    })
    test("14I spent the bank holiday at the funfair.",(done)=>{
        text="I spent the bank holiday at the funfair.";
        assert.equal(translator.toAmerican(text).textNocol,"I spent the public holiday at the carnival.");
        done();
    })
    test("15I had a bicky then went to the chippy.",(done)=>{
        text="I had a bicky then went to the chippy.";
        assert.equal(translator.toAmerican(text).textNocol,"I had a cookie then went to the fish-and-chip shop.");
        done();
    })
    test("16I've just got bits and bobs in my bum bag.",(done)=>{
        text="I've just got bits and bobs in my bum bag.";
        assert.equal(translator.toAmerican(text).textNocol,"I've just got odds and ends in my fanny pack.");
        done();
    })
    test("17The car boot sale at Boxted Airfield was called off.",(done)=>{
        text="The car boot sale at Boxted Airfield was called off.";
        assert.equal(translator.toAmerican(text).textNocol,"The swap meet at Boxted Airfield was called off.");
        done();
    })
    test("18Have you met Mrs Kalyani?",(done)=>{
        text="Have you met Mrs Kalyani?";
        assert.equal(translator.toAmerican(text).textNocol,"Have you met Mrs. Kalyani?");
        done();
    })
    test("19Prof Joyner of King's College, London.",(done)=>{
        text="Prof Joyner of King's College, London.";
        assert.equal(translator.toAmerican(text).textNocol,"Prof. Joyner of King's College, London.");
        done();
    })
    test("20Tea time is usually around 4 or 4.30.",(done)=>{
        text="Tea time is usually around 4 or 4.30.";
        assert.equal(translator.toAmerican(text).textNocol,"Tea time is usually around 4 or 4:30.");
        done();
    })
    test("21Mangoes are my favorite fruit.",(done)=>{
        text="Mangoes are my favorite fruit.";
        assert.equal(translator.toBritish(text).textColored.includes('"highlight"'),true);
        done();
    })
    test("22I ate yogurt for breakfast.",(done)=>{
        text="I ate yogurt for breakfast.";
        assert.equal(translator.toBritish(text).textColored.includes(`class="highlight"`),true);
        done();
    })
    test("23We watched the footie match for a while.",(done)=>{
        text="We watched the footie match for a while.";
        assert.equal(translator.toAmerican(text).textColored.includes(`<span class="highlight">`),true);
        done();
    })
    test("24Paracetamol takes up to an hour to work.",(done)=>{
        text="Paracetamol takes up to an hour to work.";
        assert.equal(translator.toAmerican(text).textColored.includes(`<span class="highlight">`),true);
        done();
    })
});
