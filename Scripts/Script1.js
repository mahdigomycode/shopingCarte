//  ****** Recuperation des data

const btnAddArray = Array.from(document.getElementsByClassName('btn-add'));
const prices = Array.from(document.getElementsByClassName('price'));
const qte = Array.from(document.getElementsByClassName('itemQte'));
const total = document.getElementById('total-price');
const card = document.getElementsByClassName('cart');
const btnCloseArray = Array.from(document.getElementsByClassName('close'));

const btnMinusArray = Array.from(document.getElementsByClassName('btn-minus'));

let result = 0;
// function add
const add = ind => {
  // console.log('TCL: btnAddArray[index]', btnAddArray[index]);

  for (let index in btnAddArray) {
    console.log('TCL: index', index);
    btnAddArray[index].addEventListener('click', function() {
      qte[index].innerHTML++;
      result += parseInt(prices[index].textContent);
      total.innerHTML = result;
    });
  }

  //  function minus

  for (let index in btnMinusArray) {
    btnMinusArray[index].addEventListener('click', function() {
      if (qte[index].textContent > 0) {
        qte[index].innerHTML--;
        result -= parseInt(prices[index].textContent);
        total.innerHTML = result;
      }
    });
  }

  const favFunction = s => {
    let item = document.getElementById(s);
    //   item.getAttribute('fill')
    item.setAttribute(
      'fill',
      item.getAttribute('fill') == 'grey' ? 'red' : 'grey'
    );
  };

  //  function remove item
  for (let index in btnCloseArray) {
    btnCloseArray[index].addEventListener('click', function() {
      card[index].removeChild(card[index]);
      console.log('TCL: card[index].parentNode', card[index].parentNode);
      console.log('TCL: card[index]', card[index]);
    });
  }
};
