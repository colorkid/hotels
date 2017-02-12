//крываем свойства, если их больше 6, добавляем кнопку плюс/минус
var propertiesWrapper = document.querySelectorAll(".properties__wrapper");
var propertiesTitle = document.querySelectorAll(".properties__title");

for(var w = 0; w < propertiesWrapper.length; w++){
	var properties = propertiesWrapper[w].querySelectorAll(".properties__wrapper .property");

	for(var i = 0; i < properties.length; i++){
		if(i > 5){
			var plusMinus = document.createElement('div');
			plusMinus.className = "properties__plus";
			propertiesTitle[w].insertBefore(plusMinus, propertiesTitle[w].firstChild);

			for(var j = 0; j < properties.length; j++){
				if(j > 5){
					properties[j].classList.add("property--hidden");
				}
			}
			break;
		}
	}
}

var plusMinus = document.querySelectorAll(".properties__plus");

for(var e = 0; e < plusMinus.length; e++){
	plusMinus[e].addEventListener('click', function() {
		this.classList.toggle("show__plus--minus");
		var properties = this.parentElement.nextElementSibling.querySelectorAll(".property");
		for(var m = 0; m < properties.length; m++){
			if(m > 5){
				properties[m].classList.toggle("property--hidden");
			}
		}		
	});
}


//Программируем отображение выбранных свойств
var allProperties = document.querySelectorAll(".property__checkbox");
var search = document.querySelector(".search");
var searchInput = document.querySelector(".search__input");
var searchWrapper = document.createElement('div');
searchWrapper.className = "search__wrapper";
search.appendChild(searchWrapper);

for(var q = 0; q < allProperties.length; q++){
	allProperties[q].addEventListener('change', function() {

		if(this.checked){
			var propertyInSearch = document.createElement('div');
			propertyInSearch.className = "search__roperty";
			propertyInSearch.innerHTML = this.getAttribute("id");
			propertyInSearch.dataset.value = this.getAttribute("id");
			searchWrapper.appendChild(propertyInSearch);

			var propertyInSearchClose = document.createElement('div');
			propertyInSearchClose.className = "close";
			propertyInSearch.appendChild(propertyInSearchClose);


		}
		else{
			var allPropertiesInSearch = document.querySelectorAll(".search__roperty");

			for(var z = 0; z < allPropertiesInSearch.length; z++){
				if(this.getAttribute("id") == allPropertiesInSearch[z].dataset.value){
					searchWrapper.removeChild(allPropertiesInSearch[z])
				}
			}
		}

		if(search.getElementsByClassName("search__roperty").length < 1){
			searchWrapper.classList.remove("search__wrapper--active");
			searchInput.setAttribute("placeholder", "enter the names of amenities that you need in apartment");
		}

		else{
			searchWrapper.classList.add("search__wrapper--active");
			searchInput.removeAttribute("placeholder");
		}

		var allClose = document.querySelectorAll(".close");

		for(var x = 0; x < allClose.length; x++){
			allClose[x].addEventListener('click', function() {

				for(var u = 0; u < allProperties.length; u++){
					if(allProperties[u].id == this.parentElement.dataset.value){
						allProperties[u].checked = false;
						this.parentElement.parentElement.removeChild(propertyInSearch);
					}
				}

				if(search.getElementsByClassName("search__roperty").length < 1){
					searchWrapper.classList.remove("search__wrapper--active");
					searchInput.setAttribute("placeholder", "enter the names of amenities that you need in apartment");
				}

				else{
					searchWrapper.classList.add("search__wrapper--active");
					searchInput.removeAttribute("placeholder");
				}

			});
		}

	});
}


//Программируем табы
var tabHotels = document.querySelector(".tab--accommodations");
var results = document.querySelector(".results");

var tabMap = document.querySelector(".tab--map");
var map = document.querySelector(".map");

tabHotels.classList.add("tab--active");

tabMap.addEventListener('click', function() {
	tabHotels.classList.remove("tab--active");
	tabMap.classList.add("tab--active");
	map.classList.remove("hidden");
	results.classList.add("hidden");
});

tabHotels.addEventListener('click', function() {
	tabMap.classList.remove("tab--active");
	tabHotels.classList.add("tab--active");
	results.classList.remove("hidden");
	map.classList.add("hidden");
});


var propertiesGeneral = document.querySelectorAll(".properties");
var amenitiesShow = document.querySelector(".show .show__plus");
amenitiesShow.classList.add("show__plus--minus");

amenitiesShow.addEventListener('click', function() {
	amenitiesShow.classList.toggle("show__plus--minus");

	for(var p = 0; p < propertiesGeneral.length; p++){
		propertiesGeneral[p].classList.toggle("hidden");
	}
});


