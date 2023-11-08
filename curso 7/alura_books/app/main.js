var books = [];
var apiEndPoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBooksFromApi()

async function getBooksFromApi(){
    var ans = await fetch(apiEndPoint);
    books = await ans.json();
    var discountedBooks = aplyDiscount(books);
    displayBooksOnScreen(discountedBooks);
}