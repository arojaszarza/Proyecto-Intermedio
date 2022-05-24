const bcrypt = require("bcrypt");
const connection = require ("../config/db");

class indexController {

    showHome = (req, res) => {
        let sql = `SELECT * FROM designer`;
     
    
        connection.query(sql, (error, resultDesigner) => {
          if (error) throw error;
          
            res.render("home", { resultDesigner });
          });
        };
      
  


}




module.exports = new indexController();