const btnAddArray = Array.from(document.getElementsByClassName('btn-add'));
const btnMinusArray = Array.from(document.getElementsByClassName('btn-minus'));
const btnCloseArray = Array.from(document.getElementsByClassName('close'));
const cardDivArray = document.getElementsByClassName('cart');
const unitPrice = document.getElementsByClassName('price');
let result = 0;
// ****** btn add
for (let index in btnAddArray) {
  btnAddArray[index].addEventListener('click', function() {
    btnAddArray[index].nextElementSibling.innerHTML++;
    result += parseInt(unitPrice[index].textContent);
    document.getElementById('total-price').innerHTML = result;
  });
}

// **** btn minus
for (let index in btnMinusArray) {
  btnMinusArray[index].addEventListener('click', function() {
    if (btnMinusArray[index].previousElementSibling.textContent > 0) {
      btnMinusArray[index].previousElementSibling.innerHTML--;
      result -= parseInt(unitPrice[index].textContent);
    }
    document.getElementById('total-price').innerHTML = result;
  });
}
const favFunction = s => {
  let itemColor = document.getElementById(s).getAttribute('fill');
  document
    .getElementById(s)
    .setAttribute('fill', itemColor == 'grey' ? 'red' : 'grey');
};

for (let index in btnCloseArray) {
  btnCloseArray[index].addEventListener('click', function() {
    cardDivArray[index].parentNode.removeChild(cardDivArray[index]);
  });
}
