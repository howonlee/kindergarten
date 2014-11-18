var app = {
  initialize: function() {
    var self = this;
    var adapter = new MemoryAdapter();
    adapter.initialize(function() {
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

  renderHomeView: function() {
    var html =
      "<h1>Classes</h1>" +
      "<ul class='class-list'>" +
      "<li>CS110 Instructor</li>" +
      "</ul>" +
      '<button onclick="app.renderAddView()">Add Classes</button>';
    $('body').html(html);
  },

  renderAddView: function() {
    var html =
      "<h1>Add Classes</h1>" +
      "<input class='add-class' placeholder='Enter name'/>" +
      '<button onclick="app.renderHomeView()">Add Class</button>';
    $('body').html(html);
  },

  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    console.log('Received Event: ' + id);
  }
};
