const express = require('express');
const garmentController = require("../controllers/garmentController");
const uploadImage = require("../middleware/uploadFile");
const router = express.Router();

/* GET home page. */

// ruta base del archivo localhost:3000/garment


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});

// localhost:3000/garment/viewGarment/:id

router.get("/viewGarment/:id", garmentController.showGarment);


// localhost:3000/garment/addGarment/:id
router.post("/addGarment/:id", uploadImage("garments"), garmentController.addGarment);


// localhost:3000/garment/deleteGarment/:garment_id/:designer_id 

router.get("/deleteGarment/:garment_id/:designer_id", garmentController.deleteGarment);


// localhost:3000/garment/editGarment/:id
router.get("/editGarment/:id", garmentController.viewEdit);

// localhost:3000/garment/editGarment/:id
router.post("/editGarment/:garment_id/:designer_id", garmentController.editGarment);




module.exports = router;
