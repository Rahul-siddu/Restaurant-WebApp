      // Sample order data
  import { fillFooter, fillHeader, updateCart } from "./util.js";
  fillHeader();
  fillFooter();

      const orders = [
        {
          id: 1,
          items: [
            { name: "Pizza", quantity: 2 },
            { name: "Garlic Bread", quantity: 1 },
          ],
          totalPrice: 25.99,
          status: "Delivered",
        },
        {
          id: 2,
          items: [{ name: "Burger", quantity: 1 }],
          totalPrice: 10.99,
          status: "In Transit",
        },
        {
          id: 3,
          items: [
            { name: "Salad", quantity: 3 },
            { name: "Juice", quantity: 2 },
          ],
          totalPrice: 18.99,
          status: "Pending",
        },
      ];


      function createOrderCart(order){
        const orderCard = document.createElement("div");
        orderCard.classList.add("order-card");
        const orderHtml = `<div class="order-header">
                    <span class="order-number">Order #${order.id}</span>
                </div>
                <div class="order-details">
                    ${order.items.map((item)=>{
                        return `<div class="order-details-item">
                            <span>${item.name}</span>
                            <span>x${item.quantity}</span>
                        </div>`
                    })}
                        
                    
                </div>
                <div class="order-total">Total: $${order.totalPrice}</div>
                <span class="order-status status-delivered">
                    ${order.status}
                </span>`
        

        orderCard.innerHTML = orderHtml;
        return orderCard;
      }


      const orderCardsContainer = document.getElementById("order-cards");
      if (orders.length){
        orders.forEach((item)=>{
           const orderHtml = createOrderCart(item);
          orderCardsContainer.appendChild(orderHtml);
        })
       
      }
      updateCart()