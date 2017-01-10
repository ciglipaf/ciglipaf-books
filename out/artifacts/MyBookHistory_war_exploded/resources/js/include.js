/*
  Load each book into books that returned from the server
 */

function loadBooks() {
  var books = $('#books');
  var book = '/components/books/book.html';

  // loop for each book
  $.get(book, function(data) {

    /* each is lodash library's function that easily iterates for every element
       in the given array and calls the function for each array  */

    _.forEach([1, 2, 3, 4, 5, 6], function() {

      books.append(data);

    });
  });

  booksOnlyOnceFunctions(books);
}

function loadAuthors() {
  var authors = $('#authors');
  var author = '/components/authors/author.html';

  $.get(author, function(data) {

    _.forEach([1, 2, 3, 4, 5, 6], function() {

      authors.append(data);

    });
  });

  authorsOnlyOnceFunctions(authors);
}

/*
  So i have designed this approach for one time functions. For each component, lets say 
  authors and books, there will be some functions that needs to be run one time. But instead of 
  rewrite those functions - like setCardAction - for each component, setCardAction is defined
  as a normal function, then it is called via one time functions which is defined by "_.once"
  function of lodash. So every component has their one time function scope and this scope
  is run one time, but the functions it is calling are not one time functions like setCardAction.
 */

var authorsOnlyOnceFunctions = _.once(function(element) {
  setCardAction(element);
  // other functions here which you want to call one time
});

var booksOnlyOnceFunctions = _.once(function(element) {
  setCardAction(element);
  // other functions here which you want to call one time
});

var setCardAction = (function(element) {
  element.on('click', '.card-footer .btn:nth-child(1)', function() {
    $(this).parent().parent().toggleClass('read-later');
  });

  element.on('click', '.card-footer .btn:nth-child(2)', function() {
    $(this).parent().parent().toggleClass('favorite');
  });
});


/*
  Load books when user scrolls to end
 */

$(window).scroll(function() {

 if($(window).scrollTop() + window.innerHeight == $(document).height() - 10) {

  // scroll for each page seperately

  if(document.URL.indexOf("books") >= 0)
    loadBooks();

  if(document.URL.indexOf("authors") >=0)
    loadAuthors();
 }

/*
  Load books when user scrolls to end in the mobile
 */

if($(window).scrollTop() + $(window).height() > $(document).height() - 10) {

  // scroll for each page seperately

  if(document.URL.indexOf("books") >= 0)
    loadBooks();

  if(document.URL.indexOf("authors") >=0)
    loadAuthors();
  }

});

window.onload = function() {

  // import common parts together
  importHTML("#header");
  importHTML("#footer");

  // import for each page seperately

  if(document.URL.indexOf("books") >= 0) {
    loadBooks();
    importHTML("#book");
  }

  if(document.URL.indexOf("authors") >=0) {
    loadAuthors();
    importHTML("#author");
  }


};


