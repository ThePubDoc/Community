const express = require('express');
const mainController = require('../controller/mainController');
const formController = require('../controller/formController');

const router = express.Router();
const app = express();

router.route('/user').get(mainController.user)
router.route('/user').post(formController.form)

router.route('/editUser/:id').get(mainController.update)

router.route('/user/register').get(mainController.register)



module.exports = router;