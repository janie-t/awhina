var development = require('./knexfile')['development']
var knex = require('knex')(development)

function randomMotivation (){
  return knex('motivate')
  .select('*').limit(1)
}

module.exports = {
  randomMotivation: randomMotivation
}
