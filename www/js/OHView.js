var OHView = function(adapter, template, _class) {
  this.initialize = function() {
    this.el = $('<div/>');
  }
  this.render = function() {
    this.el.html(template(_class));
    return this;
  }
  this.initialize();
}
