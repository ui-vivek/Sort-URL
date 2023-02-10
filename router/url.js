const express=require('express');
const {handleGenerateNewShortURL}=require('../controllers/url_Controller');

const router=express.Router;

router.post("/",handleGenerateNewShortURL)

module.exports=router;