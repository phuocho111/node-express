
const Course = require('../models/Course')
const {mutipleMongooseToObject} = require('../../util/mongoose')

class SiteController {
  // [GET] / home
  index(red, res, next) {
    // lay du lieu tu mongodb
    // Course.find({}, function(err,courses){
    //   if(!err){
    //     res.json(courses);
    //   }else{
    //     next(err)
    //   }
    // });

    Course.find({})
    .then(courses => {
      
      res.render('home',{
        courses:mutipleMongooseToObject(courses)
      });
    })
    .catch( next)
    //res.render('home');
  }

  // [GET] /search
  search(red, res) {
    res.render('search');
  }
}

module.exports = new SiteController(); // xuat ra ngoai
