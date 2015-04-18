(function(global) {
  'use strict';

  var eventEmitter = function(config) {
    this.init.apply(this, config);
  };

  eventEmitter.prototype = {

    constructor = eventEmitter,

    _events : null,

    init : function(config) {
      for ( var prop in config ) {
        this[prop] = config[prop];
      }
    },

    on : function (type, listener) {
      var listenerExists = false, listenersList, listenersSize;
      if ( !this._events ) this._events = {};
      if ( !this._events[type] ) this._events[type] = [];
      listenersList = this._events[type];
      listenersSize = listenersList.length;
      for ( var i=0; i<listenersSize; i++ ) {
        if ( listenersList[i] === listener ) {
          listenerExists = true;
          break;
        }
      }
      if ( !listenerExists ) this._events[type].push(listener);
      return this;
    },

    off : function (type, listener) {
      var listenerExists = false, listenersList, listenersSize;
      if ( !this._events ) this._events = {};
      if ( typeof listener == 'undefined' ) this._events[type] = [];
      listenersList = this._events[type];
      listenersSize = listenersList.length;
      for ( var i=0; i<listenersSize; i++ ) {
        if ( listenersList[i] === listener ) {
          listenerExists = true;
          break;
        }
      }
      if ( listenerExists ) this._events[type].splice(i, 1);
      return this;
    },

    emit : function(type) {
      var args, listenersList, listenerSize;
      if ( !this._events ) this._events = {};
      if ( typeof this._events[type] === 'undefined' ) return false;
      args = Array.prototype.slice.call(arguments, 1);
      listenersList = this._events[type] || [];
      listenersSize = listenersList.length;
      for ( var i=0; i<listenersSize; i++ ) {
        listenersList[i].apply(this, args);
      }
      return this;
    }

    global.EventEmitter = eventEmitter;

  };

})(window || this);