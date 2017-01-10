function importHTML(id) {
  // get only one parameter and use it for both data-import and id value
  var idAsString = id.replace('#', '');
  var data = '[data-import="' + idAsString +'"]';
  var type = document.querySelector(data);

  // Clone the <template> in the import.
  var template = type.import.querySelector('template');
  var clone = document.importNode(template.content, true);

  document.querySelector(id).appendChild(clone);
}