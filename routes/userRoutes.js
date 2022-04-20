const {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers');

const router = require('express').Router();

router.route('/create').post(createUser);
router.route('/all-users').get(getAllUsers);
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
