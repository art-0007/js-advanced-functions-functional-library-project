const fi = (function() {

  function getArray (collection) {
      if (Array.isArray(collection) === true) {
        return collection
      } else if (Array.isArray(collection) === false) {
        return Object.values(collection)
      }
  }

  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) { 
      getArray(collection).map(e => callback(e))
      return collection
    },

    map: function() {

    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
