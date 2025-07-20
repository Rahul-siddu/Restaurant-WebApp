

function headerContent(){
  const activeTab = localStorage.getItem("activeTab") || 0;
  const tabs = {
    "Home" : {"file" :"index.html" },
    "Our Menu" :  {"file" :"menupage.html" },
    "Our Offers" : {"file" :"" },
    "Know Us More" : {"file" :"knowus.html" },
    "Your Order" : {"file" :"orders.html" },
    "Cart" :  {"file" : "cart.html", "id" : "cart-count"}
  
  }
  console.log("activeTab", typeof(activeTab))
    return `
        <nav class="navbar">
            <div class="logo">
            <img
                src="https://placehold.co/200x80?text=ShopLogo"
                alt="shop-logo"
                class="shop-logo"
            />
            </div>
            <div class="nav-items">
                    <ul>
                    ${Object.keys(tabs)
                      .map((item,index) => {
                        const { file, id } = tabs[item];
                        const isActive = index === Number(activeTab) ? "active" : "";
                        return `<li onclick="updateTab('${index}')" class="${isActive}">
                          <a href="${file}" ${id ? `id="${id}"` : ""}>${item}</a>
                        </li>`;
                      })
                      .join("")}
                  </ul>
                <button type="button" class="login"><a href="signup.html">Sign Up/Login</a></button>
            </div>
            
        </nav>`
}


function fillHeader(){
    const body = document.getElementsByTagName("body")[0];
    const header = document.createElement("header");

    header.innerHTML = headerContent(); 
    
    body.prepend(header);
    updateCart();
    
    
}

function footerContent(){
    return `

      <div class="footer-content">

        <!-- Logo Section -->

        <div class="footer-section logo-section">

          <img src="https://via.placeholder.com/150x50?text=ShopLogo" alt="Shop Logo" class="footer-logo" />

        </div>

    

        <!-- Quick Links Section -->

        <div class="footer-section links-section">

          <h3>Quick Links</h3>

          <ul class="footer-links">

            <li><a href="#menu">Our Menu</a></li>

            <li><a href="#offers">Our Offers</a></li>

            <li><a href="#about">Know What We Have Achieved</a></li>

          </ul>

        </div>
        <!-- Social & Subscription Section -->

        <div class="footer-section social-subscribe">

          <h3>Wanna Get Updated with Our Exciting Offers?</h3>

          <div class="social-links">

            <p>Follow us on:</p>

            <a href="#" class="social-link">Instagram</a> |

            <a href="#" class="social-link">Facebook</a> |

            <a href="#" class="social-link">Twitter</a>

          </div>

          <hr />

          <div class="subscribe-form">

            <input type="email" placeholder="Subscribe for daily exciting offers" />

            <button type="button">Subscribe</button>

          </div>

        </div>

      </div>

      <div class="footer-bottom">

        <p>

          <a href="#terms">Terms & Conditions</a> |

          <a href="#privacy">Privacy Policy</a>    |

          <a href="#reserved">All Rights Reserved</a>

        </p>

       

      </div>
    `
}

function fillFooter(){
    const body = document.body;
    const footer = document.createElement("footer");
    footer.classList.add("footer");
    footer.innerHTML = footerContent()
    body.appendChild(footer)
    
}
function updateCart(){
    const cart = JSON.parse(localStorage.getItem("cart")) || []
    const cartContainer = document.getElementById("cart-count");
    cartContainer.innerText = `Cart (${cart.length || 0})`
}
function updateTab(tabIndex){
    localStorage.setItem("activeTab", Number(tabIndex))
}
window.updateTab = updateTab
export {fillFooter, fillHeader, updateCart}