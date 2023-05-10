const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cookieParser = require('cookie-parser');
const db = require("../models");
const router = express.Router();

router.use(cors());
router.use(express.json());
router.use(cookieParser());

process.env.SECRET_KEY = "secret";

router.post("/api/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const pass = req.body.pass;

  db.Users.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(pass, 12, (err, hash) => {
          let aux = hash;
          const user = db.Users.build({
            name: name,
            email: email,
            pass: aux,
          });
          user
            .save()
            .then(() => {
              console.log
            })
            .catch((err) => {
              console.error
            });
          res.json({ msg: `Usuario creado con exito` });
        });
      } else {
        res.json({ error: "Usuario existente" });
      }
    })
    .catch((err) => {
      res.send(`error: ${err}`);
    });
});

router.post("/api/login", (req, res) => {
  try{
  const email = req.body.email;
  const pass = req.body.pass;

  db.Users.findOne({
    where: {
      email: email,
    },
  })
    .then((user) => {
      if (user) {
        const id = user.id;
        const uname = user.name
        const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);
        if (bcrypt.compareSync(pass, user.pass)) {
          const token = jwt.sign(
          {
            id: id,
            email: email,
            name: uname
          }, process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          });
          res.cookie("token",token,{
            httpOnly:true,
            expires: expires
          })
          /*res.json({
            msg:'cookie enviada',
            token: token,
            id: id,
            name: uname
          })*/
          res.send(token);

        } else {
          res.status(401).json({ err: "La contraseña es incorrecta" });
        }
      } else {
        res.status(404).json({ error: "El usuario no existe" });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
  }catch(err){
    console.error(`Ha ocurrido un error: ${err}`.red);
    next(err)
  }
  
});

router.get("/api/profile", (req, res) => {
  try{
    const decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET_KEY
    );
  
    user
      .findOne({
        where: {
          id: decoded.id,
        },
      })
      .then((user) => {
        if (user) {
          res.status(200).json(user);
        } else {
          res.send("El usuario no existe");
        }
      })
      .catch((err) => {
        res.send(`error:  + ${err}`);
      });
  }catch(err){
    console.error(`Ha ocurrido un error: ${err}`.red);
  }
  
});

module.exports = router;
