const express = require('express');
const designerController = require("../controllers/designerController")
const uploadImage = require("../middleware/uploadFile");
const router = express.Router();



// Ruta base: localhost:3000/designer


// Ruta base: localhost:3000/designer/register

router.get("/register", designerController.viewRegister);

// Ruta base: localhost:3000/designer/register

router.post("/register", uploadImage("designers"), designerController.register );

/* GET users listing. */

//localhost:3000/designer/login

router.get("/login", designerController.viewFormLogin);

router.post("/login", designerController.login);


//localhost:3000/designer/profile/:id

router.get("/profile/:id", designerController.getProfile);


//localhost:3000/designer/deleteDesigner/:id


router.get("/deleteDesigner/:id", designerController.deleteDesigner);




module.exports = router;
