var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});
router.get('/mainprofile', function(req, res, next) {
  res.render('mainprofile');
});
router.get('/mywallet', function(req, res, next) {
  res.render('mywallet');
});
router.get('/addcash', function(req, res, next) {
  res.render('addcash');
});
router.get('/orderhistory', function(req, res, next) {
  res.render('orderhistory');
});
router.get('/withdraw', function(req, res, next) {
  res.render('withdraw');
});
router.get('/profile', function(req, res, next) {
  res.render('profile');
});
router.get('/kyc', function(req, res, next) {
  res.render('kyc');
});
router.get('/refer', function(req, res, next) {
  res.render('refer');
});
router.get('/setamount', function(req, res, next) {
  res.render('setamount');
});
router.get('/rules', function(req, res, next) {
  res.render('rules');
});
router.get('/transaction', function(req, res, next) {
  res.render('transaction');
});
router.get('/gamehistory', function(req, res, next) {
  res.render('gamehistory');
});
router.get('/referall', function(req, res, next) {
  res.render('refferalhistory');
});
router.get('/penelty', function(req, res, next) {
  res.render('penelty history');
});



module.exports = router;
