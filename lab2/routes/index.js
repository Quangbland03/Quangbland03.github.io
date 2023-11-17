const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index')
})
router.get('/green', (req, res) => {
  res.render('green')
})
router.get('/demo', (req, res) =>{
  var city = 'hanoi';
  var district = 'cau giay';
  var vf = "https://www.youtube.com/embed/3Iez4UcKujE?si=vCZN775dhI6yMoG0";
  res.render('demo', {city, duong: district, vf, } )
})
router.get('/test', (req, res) =>{
  var countries = ['Vietnam', 'Singapore'];
  res.render('country', {countries})
})
module.exports = router;