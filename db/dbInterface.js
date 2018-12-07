const db = require('./db')
const promisify = require('util').promisify
const path = require('path')
const writeFile = promisify(require('fs').writeFile)

class DB {
  getNote(id){
    return db.notes[id-1]
  }

  getAllNotes(){
    return db.notes
  }

  createNote(note){
    db.notes.push(note)
    return writeFile(path.join( __dirname,'db.json'),JSON.stringify(db))
  }

  deleteNote(id){
    db.notes.splice(id-1,1)
    return writeFile(path.join( __dirname,'db.json'),JSON.stringify(db))
  }
}

module.exports = DB