const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({
  dest: 'tmp/',
  limits: {
    fileSize: 3000000,
  },
});
const fs = require("fs");


/* GET home page. */
router.get("/", function(req, res, next) {
res.render("index", { title: "Express" });
});


router.post("/uploaddufichier", upload.array("monfichier"), function(req,res,next) {
  for(let i = 0; i < req.files.length; i++) {
  fs.rename(req.files[i].path, "public/images/" + req.files[i].originalname, function(err) {
    if (err) {
      res.send("problème durant le déplacement");
    } else {
      res.send("Fichier uploadé avec succès");
    }

  });
}
});


module.exports = router;