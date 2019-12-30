const express = require('express');
const mainController = require('../controller/mainController');
const formController = require('../controller/formController');
const updateForm = require('../controller/updateForm')
const deleteUser = require('../controller/deleteUser')

const router = express.Router();
const app = express();

router.route('/user').get(mainController.user)
router.route('/user').post(formController.form)

router.route('/editUser/:id').get(mainController.update)
router.route('/editUser').post(updateForm.update)

router.route('/deleteUser/:id').get(mainController.del)
router.route('/deleteUser').post(deleteUser.del);

router.route('/user/register').get(mainController.register)



module.exports = router;