const router = require('express').Router()
const DB = require('../db/dbInterface')

router.get('/',function(req,res,next){
  const db = new DB()

  res.render('notes',{notes:db.getAllNotes()})
})

module.exports = router