var development = require('./knexfile')['development']
var knex = require('knex')(development)

function randomMotivation (){
  return knex('motivate')
  .select('*')
  .where('motivate_id', '=', 1)
  .then(function(rows){
    return rows[0]
  })
}

module.exports = {
  randomMotivation: randomMotivation
}
