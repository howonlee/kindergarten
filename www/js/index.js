var app = {
  initialize: function() {
    var self = this;
    this.homeTpl = Handlebars.compile($("#home-tpl").html());
    this.classLiTpl = Handlebars.compile($("#class-li-tpl").html());
    this.adapter = new MemoryAdapter();
    this.adapter.initialize(function() {
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
    $('body').html(this.homeTpl());
    $('.class-list').html(this.classLiTpl(this.adapter.classes));
  },

  renderAddView: function() {
  },

  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    console.log('Received Event: ' + id);
  }
};
