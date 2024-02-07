var total = 0;
toClean();

function toAdd(){
    var product = document.getElementById('produto').value;
    var productName = product.split('-')[0];
    var unitaryValue = product.split('R$')[1];
    var amount = document.getElementById('quantidade').value;
    var price = amount * unitaryValue;
    var bag = document.getElementById('lista-produtos');
    bag.innerHTML = bag.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${amount}x</span> ${productName} <span class="texto-azul">R$${unitaryValue}</span>
    </section>`;
    total = total + price;
    var totalField = document.getElementById('valor-total');
    totalField.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = 0;

}

function toClean(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
}