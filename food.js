document.getElementById('search-button').addEventListener('click', function () {
    const p = document.getElementById('error');
    p.style.display = "none"

    const input= document.getElementById('search-input');
    const inputText = input.value

    if(!inputText){
       const p = document.getElementById('error');
       p.style.display = "block"
       return
    }

    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
            .then(res => res.json())
            .then(data => {
                if (!data.meals) {
                    const uiDiv = document.getElementById('foods');
                    uiDiv.innerHTML = `<p class="text-red-500 text-xl col-span-3 text-center">"Oops! We can’t find that dish. 🍽️<br>But don’t worry, there’s a whole world of flavors waiting — try another delicious search! 😊"</p>`;
                    const singleFoodDetails = document.getElementById("single-food-details");
                    singleFoodDetails.textContent = "";
                    return;
                }
                displayData(data.meals);
            });
        input.value = "";
    }
})

const displayData = (foods) => {
console.log(foods);

    const uiDiv = document.getElementById('foods');
    uiDiv.innerHTML = ''

     const singleFoodDetails = document.getElementById("single-food-details");
     singleFoodDetails.textContent = ""



    foods.forEach(food => {
        const div = document.createElement("div");
        div.classList.add('shadow-xl')
        div.innerHTML = `
        <div onclick="loadSingleFood(${food.idMeal})" class="p-4 cursor-pointer">
            <img class="h-52 w-full " src="${food.strMealThumb}" alt="">
            <div class="card-body">
                <h4 class="text-2xl my-3">${food.strMeal}</h4>
                <p class="text-justify">${food.strInstructions.slice(0,230)}</p>
            </div>
        </div>
        `
        uiDiv.appendChild(div)
    })

}

const loadSingleFood =(id)=>{
     fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => displaySingleFood(data.meals[0]))
}

const displaySingleFood=(food)=>{
    window.scrollTo(0, 0);
    const singleFoodDetails = document.getElementById("single-food-details")
    singleFoodDetails.innerHTML = `
         <div class="p-4 ">
            <img class="w-full " src="${food.strMealThumb}" alt="">
            <div class="card-body">
                <h4 class="text-4xl my-3">${food.strMeal}</h4>
                <h4 class="text-2xl my-3">${food.strCategory}</h4>
                <p class="text-justify">${food.strInstructions}</p>
                <a href="${food.strYoutube} target="_blank">Go to Youtube</a>
            </div>
        </div>
    `
//   const {strMeal,strMealThumb,strInstructions,strCategory} = food    

}

function loadAPI() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        .then(response => response.json())
        .then(json => displayInfo(json));
}

loadAPI();

function displayInfo(foods) {
    const postsDiv = document.getElementById('foods');

    // The correct array is foods.categories
    for (const food of foods.categories) {
        const div = document.createElement('div');
        div.classList.add('food');
        div.innerHTML = `
            <p><strong>ID:</strong> ${food.idCategory}</p> 
            <h2>${food.strCategory}</h2>
            <img src="${food.strCategoryThumb}" alt="${food.strCategory}" width="200"/> 
            <p>${food.strCategoryDescription.slice(0, 200)}...</p>
        `;
        postsDiv.appendChild(div);
    }
}