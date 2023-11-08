var buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', filterBooks));

function filterBooks(){
    var elementBtn = document.getElementById(this.id);
    var category = elementBtn.value;
    var filteredBooks = category == 'disponivel' ? filterByAvailability() : filterByCategory();
    displayBooksOnScreen(filteredBooks);
    
    if(category == 'disponivel'){
        var totalValue = calculateTotalValuesOfAvaliableBooks(filteredBooks)
        displayTotalValuesOfBooks(totalValue)
    }

    function filterByCategory() {
        return books.filter(book => book.categoria == category);
    }
    
    function filterByAvailability() {
        return books.filter(book => book.quantidade > 0);
    }
}


function displayTotalValuesOfBooks(totalValue){
    elementTotalValueOfBooksAvaliable.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
    `
}