const axios=require('axios')
const {api,token}=require('../apiService/config.js')


const updateYes=(req,res)=>{
    const qId= req.params.question_id
    axios.put(`${api}/qa/questions/${qId}/helpful`, {}, {
     headers: {
    Authorization: token
     }
   })
   .then(response=>{ 
     console.log(response)
     res.send(response
      )
   })
   .catch(err=>{
     console.log(err);
     res.send(err)})
   }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
   const addQ=(req,res)=>{
    console.log('-------------------------------------------------------',req.body)
   
    axios.post(`${api}/qa/questions`,req.body,{
      headers: {
      Authorization: token
       }})
    .then(response=>{
      console.log("response", response)
    res.send(response.statusText)
    })
    .catch(err=>{
      console.log(err);
      res.send(err)})
  }
  module.exports = { addQ, updateYes };
