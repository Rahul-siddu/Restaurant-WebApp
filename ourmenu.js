import { fillFooter, fillHeader, updateCart } from "./util.js";
fillFooter();
fillHeader();
let foodItems = [];
fetchFoodItems()

async function fetchFoodItems() {
    try{

        const response = await fetch("foodItems.json");

        if (!response.ok){
            throw new Error("Netweok response was not OK")
        }
        foodItems= await response.json();
        populateMenu(foodItems)
    }
    catch(error){
        console.error("error",error)
    }
}

function populateMenu(foodItems){
    const categories = {
        "bestSellars" : [],
        "trending" : [],
        "starter" : [],
        "beverages" : [],
        "main-course" : []
    }
    foodItems.forEach(element => {
        if (element?.best_seller === "yes"){
            categories?.bestSellars.push(element)
        }
        if (element?.trending === "yes"){
            categories?.trending.push(element)
        }
        const itemCategory = element?.category.toLowerCase().replace(" ", "-"); 
        categories[itemCategory].push(element);
        
    });
    for (const category in  categories){
        const categryContainer = document.getElementById(category);
        const innerHTML = categories[category].map((item)=>
            createMenuItem(item))

        categryContainer.querySelector(".ourmenu-items").innerHTML = innerHTML.join("")
    }
    updateCart();
}


function createMenuItem(item){
    const html = `
    <div class="ourmenu-card">
            <img
              src="${item.imageurl}"
              alt="${item.title}"
            />
            <div class="menu-card-content">
              <h4>${item.title}</h4>
              <p>${item.description}</p>
              <span
                >Price: <strike class="strike-price">$${item.actual_price}</strike> ${item.selling_price}
              </span>
            </div>
            <div onClick="addToCart(${item.id}, '${item.selling_price}', '${item.title}', '${item.imageurl}')" class="add-to-cart-btn">
              <button class="cta-button">Add to Cart</button>
            </div>
          </div>
    `
    return html
}


function addToCart(itemId, sellingPrice, itemTitle, imageUrl){
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const itemIndex = cart.findIndex(item => item.id == itemId)
    if(itemIndex > -1){
        cart[itemIndex].quantity += 1;
    }else{

        cart.push({id : itemId,price: sellingPrice, title : itemTitle,imageUrl, quantity : 1})
    }
    localStorage.setItem("cart",JSON.stringify(cart))
    updateCart()
  }

// handle search functionality
function searchItems(query){
    const searchContainer = document.getElementById("search-items").querySelector(".ourmenu-items");
    searchContainer.innerHTML = ""; // Clear previous results
    if (query.length< 2){
        return
    }
    
    const filteredItems = foodItems.filter((item)=> item["title"].toLowerCase().includes(query.toLowerCase())
    )
    if (filteredItems.length){
        const childContainer = filteredItems.map((item)=>
        createMenuItem(item));
        searchContainer.innerHTML = childContainer.join("")
    }
    else{
        searchContainer.innerHTML = "<p>No Items found";
    }
    
}
let searchTimeout = null;
document.querySelector(".search-input").addEventListener("input", (event)=>{
    const query = event.target.value;
    if (query){
        if (searchTimeout) clearTimeout(searchTimeout);
        searchTimeout - setTimeout(()=>searchItems(query),1000);
    }
    
})




function handleButtonActive(event) {
  const allButtons = document.querySelectorAll(".button-group button");
  allButtons.forEach((button) => {
    if (button.classList.length > 0) {
      button.classList.remove("active");
    }
    
  if (button.innerText === event){
    button.classList.add("active")
  }
});
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button-group button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", ()=>handleButtonActive(btn.innerText))
  });
  buttons[0].classList.add("active")
});

// window.searchItems = searchItems;
window.addToCart = addToCart