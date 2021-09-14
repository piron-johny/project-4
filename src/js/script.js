
// document.querySelector('.products__btn').onclick = function () {
  
//   document.querySelector('.wrap-icecream__back').classList.toggle('active');
//   document.querySelector('.wrap-icecream__front').classList.toggle('super-active')
// }

const buttons = document.querySelectorAll('.products__btn');

for (let el of buttons) {
  el.addEventListener('click', function() {
    document.querySelector('.wrap-icecream__back').classList.toggle('active');
      document.querySelector('.wrap-icecream__front').classList.toggle('super-active');
  });
}