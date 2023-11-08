var btnSortByPrice = document.getElementById('btnOrdenarPorPreco');
btnSortByPrice.addEventListener('click', sortBooksByPrice);

function sortBooksByPrice(){
    var sortBooks = books.sort((a,b) => a.preco - b.preco);
    displayBooksOnScreen(sortBooks);
}