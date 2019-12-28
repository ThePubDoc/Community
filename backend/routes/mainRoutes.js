const express = require('express');
const mainController = require('../controller/mainController');

const router = express.Router();
const app = express();

router.route('/user').get(mainController.user)

module.exports = router;