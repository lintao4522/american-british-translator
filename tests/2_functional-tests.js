const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {
    test('1翻译文本字段和本地化字段：POST 请求到 /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({
            text:'Tea time is usually around 4 or 4.30.',
            locale:"british-to-american",

        })
        .end((req,res)=>{
            assert.equal(res.body.translation,
                'Tea time is usually around 4 or <span class="highlight">4:30</span>.')
        });
        done();
    })
    test('2翻译文本字段和无效的本地化字段：POST 请求到 /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({
            text:'',
            locale:"",

        })
        .end((req,res)=>{
            assert.equal(res.body.error,
                'Required field(s) missing')
        });
        done();
    })
    test('3翻译缺失的文本字段：POST 请求到 /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({
            text:null,
            locale:"british-to-american",

        })
        .end((req,res)=>{
            assert.equal(res.body.error,
                'Required field(s) missing')
        });
        done();
    })
    test('4翻译缺失的本地化字段：POST 请求到 /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({
            text:'www',
            locale:"",

        })
        .end((req,res)=>{
            assert.equal(res.body.error,
                'Required field(s) missing')
        });
        done();
    })
    test('5翻译空的文本：POST 请求到 /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({
            text:'',
            locale:"british-to-american",

        })
        .end((req,res)=>{
            assert.equal(res.body.error,
                'No text to translate')
        });
        done();
    })
    test('6翻译无需翻译的文本：POST 请求到 /api/translate',(done)=>{
        chai.request(server)
        .post('/api/translate')
        .send({
            text:'qqq',
            locale:"british-to-american",

        })
        .end((req,res)=>{
            assert.equal(res.body.translation,
                'Everything looks good to me!')
        });
        done();
    })


});
