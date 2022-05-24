const bcrypt = require("bcrypt");
const connection = require ("../config/db");

class garmentController {

    showGarment = (req, res) => {
        let id = req.params.id;
        res.render("addGarment", { id });
      };
    
      addGarment = (req, res) => {
        let id = req.params.id;
        let { name, description, size } = req.body;
        let img = req.file.filename;
        let sql = `INSERT INTO garment (name, img, descrition, size, designer_id) VALUES ('${name}', '${img}', '${description}', '${size}', ${id})`;
        connection.query(sql, (error, result) => {
          if (error) throw error;
          res.redirect(`/designer/profile/${id}`);
        });
      };

      deleteGarment = (req, res) => {
        let { garment_id, designer_id } = req.params;
        let sql = `DELETE FROM garment WHERE garment_id = ${garment_id}`;
        connection.query(sql, (error, result) => {
          if (error) throw error;
          res.redirect(`/designer/profile/${designer_id}`);
        });
      };

      viewEdit = (req, res) => {
        let id = req.params.id;
        let sql = `SELECT * FROM garment WHERE garment_id = ${id}`;
        connection.query(sql, (error, result) => {
          if (error) throw error;
          res.render("editGarment", { result });
        });
      };
      editGarment = (req, res) => {
        let { garment_id, designer_id } = req.params;
        let { name, description, size,} = req.body;
        let sql = "";
        if (!size) {
          sql = `UPDATE garment SET name = '${name}', descrition = '${description}' WHERE garment_id = ${garment_id}`;
    
          connection.query(sql, (error, result) => {
            if (error) throw error;
    
            res.redirect(`/designer/profile/${designer_id}`);
          });

        }
        else if (!description) {
          sql = `UPDATE garment SET name = '${name}', size = '${size}' WHERE garment_id = ${garment_id}`;
    
          connection.query(sql, (error, result) => {
            if (error) throw error;
    
            res.redirect(`/designer/profile/${designer_id}`);
          });

        }
        else {
            sql = `UPDATE garment SET name = '${name}', descrition = '${description}',  size = '${size}'  WHERE garment_id = ${garment_id}`;
            console.log(sql);
            connection.query(sql, (error, result) => {
              if (error) throw error;
    
              res.redirect(`/designer/profile/${designer_id}`);
            });
          };

        }






        
}
      
    




    
    
    








module.exports = new garmentController();