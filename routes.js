var db = require('./db')

function getIndex (req, res) {
 res.redirect('/home') // when users type in localhost:3000 it redirects the user to localhost:3000/home
}

function getContents (req, res) {
 res.render('index') //once the /home route has been requested, the callback function renders, or produces, the index page.
}

function getContact (req, res) {
  res.render('contact')
}

function getMotivation (req, res) {
  db.randomMotivation()
  .then(motivation => {
      switch (motivation.motivate_type) {
      case 'text': res.render('motivate', motivation)
      break
      case 'image': res.render('motivateImage', motivation)
      break
      case 'video': res.render('motivateVideo', motivation)
    }
  })
}





module.exports = {
  getIndex,
  getContents,
  getMotivation,
  getContact
}
