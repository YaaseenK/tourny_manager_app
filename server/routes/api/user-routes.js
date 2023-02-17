const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/user-controller');

router.route('/').get(getUsers);
router.route('/').post(getSingleUser);
router.route('/:id').get(createUser);
router.route('/:id').put(updateUser);

module.exports = router;
