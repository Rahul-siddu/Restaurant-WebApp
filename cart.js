import { updateCart, fillFooter, fillHeader } from "./util.js";
fillFooter();
fillHeader();
// add event listeners to all add to card buttons

      function createCartItem(item){
        return `<div class="cart-item">
          <div class="cart-item-details-left">
              <img src="${item.imageUrl}" alt="${item.title}">
              <div class="cart-item-details">
                <h4>${item.title}</h4>
                <p>Price: ${item.price}</p>
                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <div class="controls-container">
                  <p>Quantity:</p>
                  <div class="quantity-selector">
                    <button onclick="handleQuantity(${item.id}, ${false})"> − </button>
                    <input type="number" id="quantity" value="${item.quantity}" min="1" readonly>
                    <button onclick="handleQuantity(${item.id}, ${true})"> + </button>
                  </div>
                  <div class="remove-button" onclick="removeItem(${item.id})">Remove</div>
                </div>
              </div>
          </div>
        </div>`
      }
      function renderCart(){
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        const cartContainer = document.getElementById("cart-container");
        cartContainer.innerHTML = "";
        let price = 0;
        localStorage.setItem("price", 0)
        if (!cart.length){
          const emptyMessage = document.getElementById("empty-message");
          emptyMessage.style.display = "block";
        }else{
          const childContainer = cart.map((item) => {
            price += item.quantity * item.price;
            return createCartItem(item)});
          cartContainer.innerHTML = childContainer.join("")

          localStorage.setItem("totalPrice", price.toFixed(2));
        }
        document.getElementById("total-price").innerText = price.toFixed(2)
        updateCart()
      }


      renderCart()

      function removeItem(id) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart()
      }


function handleQuantity(id, increment = false) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.map(item => {
        if (item.id === id) {
            if (increment) {
                return { ...item, quantity: item.quantity + 1 };
            } else {
                if (item.quantity === 1) {
                    return null;
                } else {
                    return { ...item, quantity: item.quantity - 1 };
                }
            }
        }
        return item;
    }).filter(item => item);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart()
}
window.handleQuantity =  handleQuantity;
window.renderCart = renderCart;
window.removeItem = removeItem