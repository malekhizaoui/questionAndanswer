const app = require('express').Router();
const {addQ,updateYes}= require("../controllers/controller.js");



app.put('/:question_id/helpful',updateYes)
app.post('/',addQ)

module.exports = app;
