const bcrypt = require("bcrypt");
const connection = require ("../config/db");

class designerController {
    viewRegister = (req, res) => {
        res.render("register");
      };
    
      //   Registra un nuevo diseñador.
      register = (req, res) => {
        let { name, password, email, last_name, phone_number, description } = req.body;
        let img = req.file.filename;
    
        bcrypt.hash(password, 10, (error, hash) => {
          if (error) throw error;
          let sql = `INSERT INTO designer (name, last_name, email, password, phone_number, img, description) VALUES ('${name}', '${last_name}','${email}', '${hash}','${phone_number}', '${img}', '${description}')`;
          connection.query(sql, (error, result) => {
            console.log(result);
            if (error) throw error;

            res.redirect(`/designer/profile/${result.insertId}`);
           
          });
        });
      };

      viewFormLogin = (req, res) => {
        res.render("login");
      };


      login = (req, res) => {
        let { email, password } = req.body;
        let sql = `SELECT * FROM designer WHERE email = '${email}'`;
    
        connection.query(sql, (error, result) => {
          if (error) throw error;
          if (result.length == 1) {
            let hash = result[0].password;
    
            bcrypt.compare(password, hash, (err, resultCompare) => {
              if (err) throw err;
              if (resultCompare) {
                res.redirect(`/designer/profile/${result[0].designer_id}`);
              } else {
                res.send("Su correo y la contraseña no coinciden");
              }
            });
          } else {
            res.send("Su correo y la contraseña no coinciden");
          }
        });
      };

      getProfile = (req, res) => {
        let id = req.params.id;
        let sql = `SELECT * FROM designer WHERE designer_id = '${id}'`;
        let sql2 = `SELECT * FROM garment WHERE designer_id = '${id}'`;
        connection.query(sql, (error, resultDesigner) => {
          if (error) throw error;
          connection.query(sql2, (error, resultGarment) => {
            if (error) throw error;
    
            res.render("oneDesigner", { resultDesigner, resultGarment });
          });
        });
      };

      deleteDesigner = (req, res) => {
        let id = req.params.id;
        let sql = `DELETE FROM designer WHERE designer_id = '${id}'`;
        connection.query(sql, (error, result) => {
          if (error) throw error;
          res.redirect("/");
        });
      };
    



}




module.exports = new designerController();