'use strict';

const Translator = require('../components/translator.js');


module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      const text=req.body.text;
      let translation;
      const locale=req.body.locale;
      if (text==undefined||!locale){res.json({ error: 'Required field(s) missing' })}
      else if (text==""){res.json({ error: 'No text to translate' })}
      else if(locale!="american-to-british"&&locale!="british-to-american"){
        res.json({ error: 'Invalid value for locale field' })
      }
      if(locale=="american-to-british") {
        translation=translator.toBritish(text).textColored;
      }else if(locale=="british-to-american") {
        translation=translator.toAmerican(text).textColored;    
      }
      return res.json({text,translation});
      
    });
};
