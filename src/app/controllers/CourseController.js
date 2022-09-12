
const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')



class CourseController {
  // [GET] / courses/:slug
  show(req, res,next) {
    Course.findOne({slug: req.params.slug})
    .then(course =>{
        res.render('courses/show',{course: mongooseToObject(course)})
    })
    .catch(next)
  }
  //[GET] /courses/create
  create(req,res,next){
    res.render('courses/create')
  }


  //[POST] /courses/store
  store(req,res,next){
    // res.json(req.body)
    const formData = req.body;
    //request image tu videoId
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData)
    course.save()//luu du lieu data
    .then(()=> res.redirect('/'))
    .catch(error =>{
        
    });
    
  }
  //[GET]/courses/:id/edit
  edit(req,res,next){
    Course.findById(req.params.id)
    .then(course => res.render('courses/edit',{
      course:mongooseToObject(course)
    }))
    .catch(next)
  }
  //[PUT]/courses/:id]
  update(req,res,next){
    Course.updateOne({_id: req.params.id}, req.body)
    .then(()=> res.redirect('/me/stored/courses'))
    .catch(next)
  }

  //[DELETE]/courses/:id
   destroy(req, res, next){
    Course.delete({ _id: req.params.id})
    .then(()=> res.redirect('back'))
    .catch(next);
   }
}

//GET: gửi yêu cầu lên server, trả lại dữ liệu cho client
// POST: gửi yêu cầu lên server lưu lại và tạo mới dữ liệu
//PUT, PATCH: chỉnh sửa dữ liệu 
//DELETE, OPTIONS, HEAD

module.exports = new CourseController(); // xuat ra ngoai
