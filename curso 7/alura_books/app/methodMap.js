function aplyDiscount(books){
    var discount = 0.3;
    discountedBooks = books.map(book => {
        return {...book, preco: book.preco - (book.preco * discount)}
    })
    return discountedBooks;
}