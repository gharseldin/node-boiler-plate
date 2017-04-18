// colors does not need to be attached to a variable
// colors will automatically attach to String.prototype
require('colors')
var _ = require('lodash')

var config = require('../config/config')

// Create a no opperation 'noop' function to use as a logging disabler
var noop = function(){}

// check to see if logging is enabled in our configuration
// if its enabled use the console.log, else use the noop
var consoleLog = config.logging ? console.log.bind(console) : noop

var logger = {
    log: function(){
        // arguments is an array like object with all the passed in
        // arguments to this function. 
        var args = _.toArray(arguments)
            .map(function(arg){
                if(typeof arg === 'object'){
                    // turn the object to a string so we can 
                    // log all the properties and color it
                    var string = JSON.stringify(arg, 2)
                    return string.magenta
                } else {
                    // change to string to color
                    
                    arg += ''
                    return arg.magenta
                }
            })
        console.log('----- We Reach Here :) ---------' + '\n' + config.logging)
        consoleLog.apply(console, args)
    }
}

module.exports = logger