//product view 
// product view array
const productViews = ["./images/image-product-1.jpg", "./images/image-product-2.jpg", "./images/image-product-3.jpg", "./images/image-product-4.jpg"]


//select prodduct view elements
const nextView = document.querySelector('.next-view');
const prevView = document.querySelector('.prev-view')
const productFocus = document.querySelector('.product-focus')

//select add to cart elements
let productCount = document.querySelector('.product-count')
let count = document.querySelector('.count')
const btns = document.querySelectorAll('.btn')
const cartQuantity = document.querySelector('.cart-quantity')
const addToCart = document.querySelector('.add-to-cart-btn')
let total = document.querySelector('.total')
const productPrice = document.querySelector('.product-price')
const cart = document.querySelector('.cart')
const cartItemImg = document.querySelector('.cart-item-img')
const cartInfo = document.querySelector('.cart-item-info')
const cartIcon = document.querySelector('.cart-icon')
const empty = document.querySelector('.empty')
//select sidebar elements
const closeNav = document.querySelector('.close-nav');
const navLinks = document.querySelector('.nav-links')
const menuIcon = document.querySelector('.menu-icon')
const overlayFocus = document.querySelector('.focus')
// product view images 
const lightBoxes = document.querySelectorAll('.lightbox')
//set current view
let currentView = 0;
//over;ay
const overlay = document.querySelector('.overlay')
const closeBtn = document.querySelector('.close-overlay')
const overlayContainer = document.querySelector('.overlay-container')

//switch view feature based on lightbox click 
lightBoxes.forEach(function(box){
    // const boxImage = box.getAttribute('src')
    box.addEventListener('click', function(){
       if (box.classList.contains('image-1')){
        productFocus.setAttribute('src', productViews[0])
        overlayFocus.setAttribute('src', productViews[0])
       }
       if (box.classList.contains('image-2')){
        productFocus.setAttribute('src', productViews[1])
        overlayFocus.setAttribute('src', productViews[1])
       }
       if (box.classList.contains('image-3')){
        productFocus.setAttribute('src', productViews[2])
        overlayFocus.setAttribute('src', productViews[2])
       }
       if (box.classList.contains('image-4')){
        productFocus.setAttribute('src', productViews[3])
        overlayFocus.setAttribute('src', productViews[3])
       }

        
    })
})


/* start of sidebar */
menuIcon.addEventListener('click', function(){
    navLinks.classList.add('show-sidebar')
})
closeNav.addEventListener('click', function(){
    navLinks.classList.remove('show-sidebar')  
})
/*end of sidebar */



//load default view
window.addEventListener('DOMContentLoaded', function(){
    productViews[currentView]
})

//show next view 
nextView.addEventListener('click', function(){
    currentView++;
    if(currentView > productViews.length -1) {
        currentView = 0
    }
    console.log(productViews[currentView])
    productFocus.setAttribute('src', productViews[currentView]) 
})

//show prev view 
prevView.addEventListener('click', function(){
    currentView--;
    if(currentView < 0) {
        currentView = productViews.length - 1;
    }
    console.log(productViews[currentView])
    productFocus.setAttribute('src', productViews[currentView]) 
})



// add or remove iten
let currentCount = 0
btns.forEach(function(btn){
    btn.addEventListener('click', function(){
        if (btn.classList.contains('add')){
            currentCount++;
            count.innerHTML = currentCount;
        } else if (btn.classList.contains('minus') && currentCount > 0) {
            currentCount--;
            count.innerHTML = currentCount;
        }
    })
})


// add to cart
cartIcon.addEventListener('click', function(){
    cart.classList.toggle('show-cart')
    console.log(cart)

})
function showOrderSummary(){
    // cart.productCount = count.innerHTML;
    if (count.innerHTML > 0){ 
        let productPrice = 125.00
        productCount = count.innerHTML
        total = ` $${productPrice * productCount}.00`

        cartQuantity.innerHTML = productCount;
        cartQuantity.style.display = "block"
        if (productCount > 0) {
            cart.innerHTML = `<div class="cart-item">
                <div class="cart-item-img">
                    <img src="./images/image-product-1-thumbnail.jpg" alt="Cart Item Img" class="item-img">
                </div>
                <div class="cart-item-info">
                        <p class="product-name">Fall Limited Edition Sneakers</p>
                        <p class="product-price">$125.00 x <span class="product-count">${productCount} </span><span class="total">${total}</span></p>
                </div>
                <div class="delete-icon">
                        <svg class="delete-item" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/></defs><use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/></svg>
                </div>
    
            </div>
            <div class="checkout">
                <button class="checkout-btn">Checkout</button>
            </div>`
            
        }
    }

      
    
}





addToCart.addEventListener('click', function(e){
  showOrderSummary()
})



productFocus.addEventListener('click', function(){
    if (overlay.style.display = 'none') {
        overlay.style.display = 'flex'
        console.log(overlay)
        
    }
    if (window.innerWidth <= 760){
        overlay.style.display = 'none'
        console.log(overlay)
    }
})

closeBtn.addEventListener('click', function(){
    overlay.style.display = 'none'
})

