var development = require('./knexfile')['development']
var knex = require('knex')(development)

function getMotivation (){
  return knex('motivate')
}
