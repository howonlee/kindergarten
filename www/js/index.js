var app = {
  initialize: function() {
    var self = this;
    this.homeTpl = Handlebars.compile($("#home-tpl").html());
    this.classLiTpl = Handlebars.compile($("#class-li-tpl").html());
    this.adapter = new MemoryAdapter();
    this.adapter.initialize(function() {
      $("body").html(new HomeView(adapter, homeTpl, classLiTpl));
    });
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
