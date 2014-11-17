var ClassView = function(store) {
  this.initialize = function() {
    this.el = $('<div/>');
    this.el.on('keyup', '.search-key', this.findByName);
  }
  this.render = function() {
    this.el.html(ClassView.template());
    return this;
  }
  this.initialize();
}
ClassView.homeTpl = Handlebars.compile($("#home-tpl").html());
ClassView.employeeLiTpl = Handlebars.compile($("#class-li-tpl").html());
