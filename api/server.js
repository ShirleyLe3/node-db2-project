const express = require("express");

const server = express()

server.use(express.json())

const carRouter = require("../carRouter")

server.use(carRouter)

module.exports = server