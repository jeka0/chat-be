const router = require('express').Router();
const {celebrate} = require('celebrate');
const userSchem = require("../validation/userSchems");

const {getCurrentUser, getUser, updateUser, deleteUser} = require('../controllers/userController.js');

router.get('/:id', celebrate(userSchem.userId), getUser);
router.get('/', getCurrentUser);
router.put('/', celebrate(userSchem.update), updateUser);
router.delete('/',  deleteUser);


module.exports = router;