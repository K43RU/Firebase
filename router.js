const express = require("express");
const router = require("./api/usuarios/usuarios.controller");
const router = express.Router();

const usuarios = require("./api/usuarios/usuarios.controller");

router.use("/usuarios", usuarios);

module.exports = router;