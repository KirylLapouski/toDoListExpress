const router = require('express').Router()
const DB = require('../../db/dbInterface')

// TODO: can add id parametr
router.post('/',function(req,res,next){
  const db = new DB()
  db.createNote(req.body.note)
  .then(()=>{
    res.status(201).send()
  })
})

router.route('/:id')
  .get(function(req,res,next){
    const db = new DB()
    const note = db.getNote(req.params.id)

    if(!note){
      next(`note with id: ${req.params.id} was not fount`)
      return 
    }

    res.status(200).send(note)
  })
  .delete(function(req,resp, next){
    const db = new DB()
    db.deleteNote(req.params.id)
    .then(()=>{
      resp.status(200).send()
    })
  })



router.get('/:id',function(err,req,res,next){
  res.status(404).send(err.message)
})

module.exports = router