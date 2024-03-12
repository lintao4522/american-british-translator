const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const aToBSpelling=Object.entries(americanToBritishSpelling);
const aOnly=Object.entries(americanOnly);
const bOnly=Object.entries(britishOnly);
const aToBTitles=Object.entries(americanToBritishTitles);

class Translator {
    
    toBritish(text){
        const regex=/\d?\d:\d\d/g;
        const wordArray=[];
        const translatedArray=[];
        const textLowerCase=text.toLowerCase();
        const timeArray=text.match(regex);
        let textNocol=text;
        let textColored=text;
        if (timeArray){
            timeArray.map(time=>{
            wordArray.push(time);
            translatedArray.push(time.replace(':','.'));
            })
        }
        aOnly.map(item=>{
            if(textLowerCase.includes(item[0])&&textLowerCase.match(`\\b${item[0]}\\b`)){
                const start=textLowerCase.indexOf(item[0]);
                const length=item[0].length;
                wordArray.push(text.slice(start,start+length));
                translatedArray.push(item[1]);
            }});
        aToBSpelling.map(item=>{
            if(textLowerCase.includes(item[0])&&textLowerCase.match(`\\b${item[0]}\\b`)){
                const start=textLowerCase.indexOf(item[0]);
                const length=item[0].length;
                wordArray.push(text.slice(start,start+length));
                translatedArray.push(item[1]);
            }            
        })
        aToBTitles.map(item=>{
            if(textLowerCase.includes(item[0])){
                const start=textLowerCase.indexOf(item[0]);
                const length=item[0].length;
                wordArray.push(text.slice(start,start+length));
                const temp=item[1];
                translatedArray.push(temp.replace(temp[0],temp[0].toUpperCase()));
            }            
        })
        if (wordArray.length==0){return {textColored:'Everything looks good to me!'}}
        for(let i=0;i<wordArray.length;i++){
            textNocol=textNocol.replace(wordArray[i],translatedArray[i])
            textColored=textColored.replace(wordArray[i],`<span class="highlight">${translatedArray[i]}</span>`);

        }
        
        return {textNocol,textColored};
    }
    toAmerican(text){
        const regex=/\d?\d.\d\d/g;
        const wordArray=[];
        const translatedArray=[];
        const textLowerCase=text.toLowerCase();
        const timeArray=text.match(regex);
        let textNocol=text;
        let textColored=text;
        if(timeArray){
            timeArray.map(time=>{
            wordArray.push(time);
            translatedArray.push(time.replace('.',':'));
            })
        }
        bOnly.map(item=>{
            if(textLowerCase.includes(item[0])&&textLowerCase.match(`\\b${item[0]}\\b`)){
                const start=textLowerCase.indexOf(item[0]);
                const length=item[0].length;
                wordArray.push(text.slice(start,start+length));
                translatedArray.push(item[1]);
            }
        });
        aToBTitles.map(item=>{
            if(textLowerCase.includes(item[1])&&textLowerCase.match(`\\b${item[1]}\\b`)){
                const start=textLowerCase.indexOf(item[1]);
                const length=item[1].length;
                wordArray.push(text.slice(start,start+length));
                const temp=item[0];
                translatedArray.push(temp.replace(temp[0],temp[0].toUpperCase()));
            }            
        })
        aToBSpelling.map(item=>{
            if(textLowerCase.includes(item[1])&&textLowerCase.match(`\\b${item[1]}\\b`)){
                const start=textLowerCase.indexOf(item[1]);
                const length=item[1].length;
                wordArray.push(text.slice(start,start+length));
                translatedArray.push(item[0]);
            }            
        })
        if (wordArray.length==0){return {textColored:'Everything looks good to me!'}}

        for(let i=0;i<wordArray.length;i++){
            textNocol=textNocol.replace(wordArray[i],translatedArray[i])
            textColored=textColored.replace(wordArray[i],`<span class="highlight">${translatedArray[i]}</span>`);

        }
        
        return {textNocol,textColored};
    }

}

module.exports = Translator;