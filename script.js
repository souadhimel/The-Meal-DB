// const container = document.getElementById("search-result");

const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  //   console.log(searchText);
  searchField.value = "";

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displaySearchResult(data.meals));
};
const displaySearchResult = (meals) => {
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  if (meals == null) {
    searchResult.innerHTML = "please search the real food item";
  } else {
    meals.forEach((meal) => {
      searchResult.innerHTML += `<div class="m-3 rounded shadow card" >
      <img class="img-fluid" src="${meal.strMealThumb}"/>
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text">
               ${meal.strInstructions.slice(0, 100)}
             </p>
            </div>
           </div>`;
    });
  }
};
