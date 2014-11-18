var app = {
  initialize: function() {
    var self = this;
    var adapter = new MemoryAdapter();
    adapter.initialize().done(function() {
      self.renderHomeView();
    });
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },

  renderHomeView(): function() {
    var html =
      "<h1>Directory</h1>" +
      "<input class='search-key' type='search' placeholder='Enter name'/>" +
      "<ul class='employee-list'></ul>";
    $('body').html(html);
  }

  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    console.log('Received Event: ' + id);
  }
};
