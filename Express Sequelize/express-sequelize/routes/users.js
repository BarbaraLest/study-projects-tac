var express = require('express');
var router = express.Router();
const {User} = require('../database/models');

/* GET users listing. */
router.get('/', async function(req, res, next) {

 res.json(  await User.findAll());
});

router.get('/:id', async function(req, res, next) {
  const {id} = req.params;
  res.json(await User.findByPk(id));
});

//criar um user
router.post('/', async  (req,res) => {
  const userJson = req.body;

  try{
  const user = await User.create(userJson);
  res.status(201).json(user);

  }catch(err){

    console.log(err);
    res.status(400).json({message: "Falha..."});

  }
});


module.exports = router;
