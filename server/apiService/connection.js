var axios=require('axios');
const config=require('./config.js')
axios.defaults.baseURL = config.api;
axios.defaults.headers.common['Authorization'] = config.token;

module.exports=axios