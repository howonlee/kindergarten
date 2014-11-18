var ClassView = function(adapter, template, listItemTemplate) {
  this.initialize = function() {
    this.el = $('<div/>');
  }
  this.render = function() {
    this.el.html(template());
    return this;
  }
  this.renderList = function() {
    $(".class-list").html(listItemTemplate(adapter.classes));
    return this;
  }
  this.initialize();
}
