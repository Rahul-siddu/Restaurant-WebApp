import { updateCart, fillFooter, fillHeader } from "./util.js";
fillFooter();
fillHeader();

function createCard(item, count, title){
    const parentCardContaner = document.createElement("div")
    parentCardContaner.classList.add("menu-card")
    const card = `<img src=${item.imageurl} alt=${item.title}>

            <div class="menu-card-content" >

              <h4>${title} ${count+1}</h4>

             <p class="description">${item.description}</p>

              <span>Price: <strike class="strike-price">$${item.actual_price}</strike> $${item.selling_price} <span style="color:rgb(243, 57, 57); font-size: 13px;">10% off</span></span>

            </div>

            <div class="add-to-cart-btn">

              <button class="cta-button">Add to Cart</button>

            </div>`
    parentCardContaner.innerHTML = card;
    return parentCardContaner
}

let foodItems = []
const categorized = {
    "Best Seller" : [],
    "Combos" : [],
    "Trending" : [],
    "Starters" : [],
    "Bewerages" : []


}
async function renderHomePage(){
    const response = await fetch("foodItems.json");

        if (!response.ok){
            throw new Error("Netweok response was not OK")
        }
        foodItems= await response.json();

        foodItems.forEach(element => {
            if(element.best_seller === "yes"){
                categorized["Best Seller"].push(element)
            }
            else if(element.trending === "yes"){
                categorized["Trending"].push(element)
            }
            else if(element.category === "main course"){
                categorized["Combos"].push(element)
            }
            else if(element.category === "starter"){
                categorized?.Starters.push(element)
            }
            else if(element.category === "beverages"){
                categorized?.Bewerages.push(element)
            }
            
        });
        
        const parentContainers = document.querySelectorAll(".menu-category")
        parentContainers.forEach((children)=>{
            const title = children.querySelector(".category-header h3").innerText;
            const elements = categorized?.[title] || []
            const childrenContainer = children.querySelector(".menu-items");
            elements.slice(0, 3).forEach((item,index)=>{
                childrenContainer.appendChild( createCard(item,index, title))
            }
            );
        })


}
renderHomePage()


function expandItems(tabName){
    const activeTabChildren = categorized[tabName]
    const parentContainer = document.querySelectorAll(".menu-category")
    parentContainer.forEach((element)=>{
        const title = element.querySelector(".category-header h3").innerText;
        const button = element.querySelector(".category-header .view-all-btn");
        const buttonactive = button.classList.contains("active");
        button.classList.remove("active");
        const childrenContainer = element.querySelector(".menu-items");
        if (title === tabName && !buttonactive){
            button.classList.add("active");
           
            activeTabChildren.slice(3).forEach((item,index)=>{
                childrenContainer.appendChild( createCard(item,index, title))
            })
        }
        else if(buttonactive){
            const currentTabChildren = categorized[title]
            childrenContainer.replaceChildren();
            currentTabChildren.slice(0,3).forEach((item,index)=>{
                childrenContainer.appendChild( createCard(item,index, title))
            })
        }

    })
}

window.expandItems =  expandItems