var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Beranda' });
});
router.get('/orderdetail', function(req, res, next) {
  res.render('orderdetail', { title: 'detail pemesanan paket wisata' });
});
router.get('/orderpaket', function(req, res, next) {
  res.render('orderpaket', { title: 'pemesanan paket wisata' });
});
router.get('/paketwisata', function(req, res, next) {
  res.render('paketwisata', { title: 'paketwisata' });
});
module.exports = router;
