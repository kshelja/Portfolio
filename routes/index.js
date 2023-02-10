var express = require('express');
var router = express.Router();


const app = express();
app.use(express.static('public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', content: 'This is a Home Page' });
});

// // Server setup
// app.listen(PORT, () => {
//   console.log(`Running server on PORT ${PORT}...`);
// })


// // We can also use same file to render
// router.get('/about', function(req, res, next) {
//   res.render('index', { title: 'About Me', content: 'This is about Me page' });
// });


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me', content: 'This is about Me page' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', content: 'This is projects page' });
});

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services', content: 'This is a services page' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me', content: 'This is a contact page' });
});


module.exports = router;
