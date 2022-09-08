class NewsController {
  // [GET] / news
  index(red, res) {
    res.render('news');
  }

  // [GET] /news/:slug (child routes)
  show(red, res) {
    res.send('New Detail!!!');
  }
}

module.exports = new NewsController(); // xuat ra ngoai
