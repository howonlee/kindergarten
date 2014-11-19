var app = {
  initialize: function() {
    var self = this;
    this.homeTpl = Handlebars.compile($("#home-tpl").html());
    this.classLiTpl = Handlebars.compile($("#class-li-tpl").html());
    this.ohTpl = Handlebars.compile($("#oh-tpl").html());
    this.ohUrl = /^#oh\/(\d{1,})/;
    this.adapter = new MemoryAdapter();
    this.adapter.initialize(function() {
      this.route();
    });
    this.bindEvents();
  },

  bindEvents: function() {
    document.addEventListener('deviceready', this.onDeviceReady, false);
    $(window).on("hashchange", this.route);
  },
  
  onDeviceReady: function() {
    app.receivedEvent('deviceready');
  },

  route: function() {
    var hash = window.location.hash;
    if (!hash) {
      var classView = new ClassView(self.adapter, self.homeTpl, self.classLiTpl);
      $("body").html(classView.render().el);
      classView.renderList();
      return;
    }
    var match = hash.match(this.ohUrl);
    if (match) {
      //implement findById now
      adapter.findById(Number(match[1]), function(_class) {
        $('body').html(new OHView(adapter, this.ohTpl, _class).render().el);
      });
    }
  },

  receivedEvent: function(id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');
    console.log('Received Event: ' + id);
  }
};
