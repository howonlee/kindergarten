var ClassView = function(adapter, template, listItemTemplate) {
  this.initialize = function() {
    this.el = $('<div/>');
  }
  this.render = function() {
    this.el.html(template());
    $(".class-list").html(listItemTemplate());
    return this;
  }
  this.initialize();
}
