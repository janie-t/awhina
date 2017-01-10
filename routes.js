var db = require('./db')

function getIndex (req, res) {
 res.redirect('/home') // when users type in localhost:3000 it redirects the user to localhost:3000/home
}

function getContents (req, res) {
 res.render('awhinaIndex') //once the /home route has been requested, the callback function renders, or produces, the awhinaIndex page. It also uses the info inside the data variable set at the top of the page.
}

function getMotivation (req, res) {
  db.randomMotivation()
  .then(motivation => {
    res.render('awhinaMotivate', {'motivate_item': motivate_item})
  })
}

module.exports = {
  getIndex,
  getContents,
  getMotivation
}
