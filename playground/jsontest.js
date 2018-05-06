// let obj={
//   name:'Alvin',
//   someArr: [1,2,4,5],
//   someNumber: 1.24343234234
// }
// console.log(typeof obj);
// console.log(obj);
//
// let stringObj = JSON.stringify(obj);
//
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require('fs');

let originalNote ={
  title: 'some tities',
  body: 'some booty'
}

fs.writeFileSync('notes.json', JSON.stringify(originalNote));

let note = JSON.parse(fs.readFileSync('notes.json'));

console.log(typeof note);
console.log(note.title);
