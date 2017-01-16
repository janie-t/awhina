const request = require('superagent')
require('superagent-as-promised')(request)

module.exports = function(model){
  const listeners = []

  return {
    subscribe: function(listener){
      listeners.push(listener)
    },

    getIndex: function(){
      console.log("This is the home page");
    }

    update: function(key, update){
      model[key] = update
      this.notify(model)
    },

    notify: function(model){
      listeners.forEach(function(listener){
        listener(model)
      })
    }
  }
}
