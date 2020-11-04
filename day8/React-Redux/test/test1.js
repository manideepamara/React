var http = require('http')
var assert = require('assert')
var calc = require('../JS/calc.js')
var server = require('../server.js')




var should = require('chai').should()
foo = 'bar'

beverages = {'tea':[1,2,3]}

describe('my test suite',()=>{

    it('check using chai',() => {
        foo.should.be.a('string')
        foo.should.equal('bar')
        foo.should.have.length(3)
        beverages.should.have.property('tea').have.length(3)
    });

});





// describe('HTTP server test', () => {
//     before(function() {
//         server.listen(5555)
//     });

//     describe('/', () => {
//         it('should return Hello React Message', () => {
//             http.get('http://localhost:5555', function(response) {
//                 assert.equal(response.statusCode, 200)
//             })
//         });

//         it('should return body message', () => {
//             http.get('http://localhost:5555', function(response) {
//                 var body = '';
//                 response.on('data', function(d) {
//                     body += d
//                     console.log(body)
//                 })

//                 response.on('end', function() {
//                     assert.equal(body, 'Hello React')
//                 })
//             })

//         });

//     });

//     after(function() {
//         server.close();
//     })
// });












// // var calc = require('../js/calc')
// // var assert = require('assert')
// // describe('Array Execution',()=> {
// //     it('#indexOf',()=> {
// //             assert.equal([1,2,3].indexOf(4),-1)
// //     });
// //     it('#add ',()=> {
// //         assert.equal(calc.add(10,20),30)
// //     })
// //     before(() => {
// //         console.log('befroe called')
// //     })
// //     beforeEach(() => {
// //         console.log('before each')
// //     })
// //     after(() => {
// //         console.log('after called')
// //     })
// //     afterEach(() => {
// //         console.log('after each')
// //     })
// // });