const popup=document.querySelector(".window-hotel-search"),openPopupBtn=document.querySelector(".btn-search-hotel"),formHotelSearch=popup.querySelector(".form-hotel-search"),inputArrivalDate=popup.querySelector(".arrival-date"),inputDepartureDate=popup.querySelector(".departure-date"),userGrownup=popup.querySelector(".grownup"),userChildren=popup.querySelector(".children");let isStorageSupport=!0,storage="";try{storage=localStorage.getItem("user")}catch(e){isStorageSupport=!1}openPopupBtn.addEventListener("click",function(){popup.classList.toggle("window-hotel-search--disable"),storage&&(userGrownup.value=storage,userChildren.value=storage),inputArrivalDate.focus()}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),popup.classList.add("window-hotel-search--disable"))}),formHotelSearch.addEventListener("submit",function(e){inputArrivalDate&&inputDepartureDate?isStorageSupport&&(localStorage.setItem("user",userGrownup.value),localStorage.setItem("user",userChildren.value)):e.preventDefault()});