class SiteController {
  // [GET] / home
  index(red, res) {
    res.render('home');
  }

  // [GET] /search
  search(red, res) {
    res.render('search');
  }
}

module.exports = new SiteController(); // xuat ra ngoai
