const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;
// const {api,token}=require('./apiService/config.js')
// const axios=require('axios')
const questionRouter=require('./routes/router.js')

app.use(`/qa/questions`, questionRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "../public")));

app.use('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../public','index.html'))
})









app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

