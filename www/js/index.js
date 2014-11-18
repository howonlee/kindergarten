var app = {
  initialize: function() {
    var self = this;
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },

  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    console.log('Received Event: ' + id);
  }
};
