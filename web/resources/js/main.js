$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

$('#newBook').click(function() {
  $('#createBook').toggle('slow');
});

$('#newAuthor').click(function() {
  $('#createAuthor').toggle('slow');
});

$('#addBook').click(function() {

  var data = JSON.stringify($('#createBook').serializeObject());


  $.post(serverURL + '/addAuthor', function( data ) {
  });
});

$('#addAuthor').click(function() {

});