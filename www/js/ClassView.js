var ClassView = function(store) {
  this.initialize = function() {
    this.el = $('<div/>');
  }
  this.render = function() {
    this.el.html(ClassView.homeTpl());
    return this;
  }
  this.initialize();
}
ClassView.homeTpl = Handlebars.compile($("#home-tpl").html());
ClassView.employeeLiTpl = Handlebars.compile($("#class-li-tpl").html());
ClassView.render();
