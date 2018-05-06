
const fs = require('fs');

function fetchNotes(){
  try{
    return notes=JSON.parse(fs.readFileSync('notes-data.json'));
  }catch (e){
    return [];
  }
}

function saveNotes(notes){
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

// function addNote(title, body){//this also works
let addNote = (title, body) =>{
  let notes = fetchNotes();
  let note = {title, body};

  let duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length===0){
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let getAll = () =>{
  return fetchNotes();
};

let getNote = (title) =>{
  let notes = fetchNotes();
  let foundNote = notes.filter((note) => note.title === title);
  return foundNote[0];
};

let removeNote = (title) =>{
  let notes = fetchNotes();
  let tobeSavedNotes = notes.filter((note) => note.title !== title);
  saveNotes(tobeSavedNotes);

  return notes.length !== tobeSavedNotes.length;
};

let logNote = (note) =>{
  debugger
  console.log('----');
  console.log(`title - ${note.title}`);
  console.log(`body - ${note.body}`);
}

// function addNote2(title,body){
//   console.log('Adding note 2', title, body);
// }

// module.exports = addNote2 //this will export the whole module as a function addNote2
module.exports = {addNote, getAll, getNote, removeNote, logNote}; //this will export {'addNote' : addNote} object, an 'addNote' key with a function as value
//add can add multiple key value pairs object
// console.log(module);
