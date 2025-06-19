const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");
const mealsContainer = document.querySelector(".mealsContainer");
console.log(mealsContainer);

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const searchTerm = searchInput.value.trim();
  console.log(searchTerm);
  if (searchTerm) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        mealsContainer.innerHTML = data.meals
          .map((meal) => {
            return `
               <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
            `;
          })
          .join("");
        search.value = "";
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    alert("please enter a search value");
  }
});

// toggling functionalities
const toggleBtn = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

window.addEventListener("load", () => {
  console.log("load ho gya h bro");
});
