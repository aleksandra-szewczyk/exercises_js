var add = document.getElementById('addElem');
var list = document.getElementById('list');
var itemNumber = 1;

function checkOnclickEvent(param) {
  list.innerHTML += '<li>item ' + param + '</li>'
}

add.addEventListener('click', function(e) {
    checkOnclickEvent(itemNumber);
    itemNumber++;
});
