const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/config");

const ctrl = require("../controller/post");

router.get('/', ctrl.getAll);
router.post('/', ctrl.make);
router.get('/:id', ctrl.receive);
router.put('/:id', ctrl.modify);
router.delete('/:id', ctrl.delete);

module.exports = router;