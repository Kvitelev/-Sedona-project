const popup = document.querySelector('.window-hotel-search');
const openPopupBtn = document.querySelector('.btn-search-hotel');
const inputArrivalDate = popup.querySelector('.arrival-date');

openPopupBtn.addEventListener('click', function () {
  popup.classList.toggle('window-hotel-search--disable');
  inputArrivalDate.focus();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add('window-hotel-search--disable');
  }
});
