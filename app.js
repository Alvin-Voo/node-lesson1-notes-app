const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');


const titleOption
= {
  describe: 'Title of note',
  alias: 't',
  demandOption: true
}
const bodyOption
= {
  describe: 'Body of note',
  alias: 'b',
  demandOption: true
}

let args = yargs
.command('add','Add a new note',{
  title:titleOption,
  body:bodyOption
})
.command('list', 'List all notes')
.command('read', 'Read a note',{
  title:titleOption
})
.command('remove', 'Remove a note',{
  title:titleOption
})
.demandCommand(1,'You need at least one command before moving on')
.help()
.argv

switch (args._[0]){
  case 'add':
    let note = notes.addNote(args.title, args.body);
    if(_.isUndefined(note)){
      console.log(`note with ${args.title} cannot be created.`)
    }else{
      console.log("Note created");
      notes.logNote(note);
    }
  break;
  case 'list':
    let noteList = notes.getAll();
    if(noteList){
      noteList.forEach((note)=>{
        notes.logNote(note);
      })
    }else console.log('notes is empty');
  break;
  case 'read':
    let noteFound = notes.getNote(args.title);
    if(noteFound){
      console.log("Note found:");
      notes.logNote(noteFound);
    }else console.log('note not found');
  break;
  case 'remove':
    let message = notes.removeNote(args.title)? `Note ${args.title} was removed` : "Note not found";
    console.log(message);
  break;
  default:
    console.log('not recognized');
  break;
}
