const express = require('express');
const indexController = require("../controllers/indexController");
const router = express.Router();


/* GET home page. */

//ruta base del archivo localhost:3000/

router.get("/", indexController.showHome );




module.exports = router;
