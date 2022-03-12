const popup = document.querySelector('.window-hotel-search');
const openPopupBtn = document.querySelector('.btn-search-hotel');
const formHotelSearch = popup.querySelector('.form-hotel-search');
const inputArrivalDate = popup.querySelector('.arrival-date');
const inputDepartureDate = popup.querySelector('.departure-date');
const userGrownup = popup.querySelector('.grownup');
const userChildren = popup.querySelector('.children');
let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("user");
} catch (err) {
  isStorageSupport = false;
}

openPopupBtn.addEventListener('click', function () {
  popup.classList.toggle('window-hotel-search--disable');
  if (storage) {
    userGrownup.value = storage;
    userChildren.value = storage;
  }
  inputArrivalDate.focus();
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    popup.classList.add('window-hotel-search--disable');
  }
});

formHotelSearch.addEventListener('submit', function (evt) {
  if (!inputArrivalDate || !inputDepartureDate) {
    evt.preventDefault();
  }else {
    if (isStorageSupport) {
      localStorage.setItem('user', userGrownup.value);
      localStorage.setItem('user', userChildren.value);
    }
  }
})
