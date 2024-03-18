//Main Function Call : 

function OnLoad(params) {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  //Function Calling :

Add_Puma_item();
Add_Adidas_item();
}


// localStorage.clear();

function Add_Puma_item() {
let PumaElement = document.querySelector(".Puma-card-container");
if (!PumaElement) {
  return;
}
let innerHtml_Puma = "";
  Puma.forEach((item) => {
    //Discount Automatic Calculation
    let Discount_percent = 60;
    let Current_price =
      item.Original_price - (item.Original_price * Discount_percent) / 100;
    innerHtml_Puma += `
   <div class="card-container">
        <img src="${item.item_image}" alt="item-image" class="img-item-card">
        <div class="rating-div">
            <span class="rating-1">${item.rating.stars} ⭐</span>
            <span class="rating-divider"> | </span>
            <span class="rating-count"> ${item.rating.reviews}</span>
        </div>
        <div class="company-details-card">${item.company_name}</div>
        <div class="item-details">${item.Item_name}</div>
        <div class="price-card">
            <span class="current-price-card">Rs ${Current_price}</span>
            <span class="original-price-card">Rs ${item.Original_price}</span>
            <span class="discount-percent-card">(${Discount_percent}% off)</span>
        </div>
        <div class="butt-div">
        <button class="button-add" onclick = "Add_To_Bag(${item.id})">Add To Bag</button>
        </div>
        
    </div>
    `;
  });
  PumaElement.innerHTML = innerHtml_Puma;
}
function Add_Adidas_item() {
  
  let AdidasElement = document.querySelector(".Adidas-card-container");
  if (!AdidasElement) {
    return;
  }
let innerHtml_Adidas = "";
  Adidas.forEach((item) => {
    let Discount_percent = 20;
    let Current_price =
      item.Original_price - (item.Original_price * Discount_percent) / 100;
    innerHtml_Adidas += `
   <div class="card-container">
        <img src="${item.item_image}" alt="item-image" class="img-item-card">
        <div class="rating-div">
            <span class="rating-1">${item.rating.stars} ⭐</span>
            <span class="rating-divider"> | </span>
            <span class="rating-count"> ${item.rating.reviews}</span>
        </div>
        <div class="company-details-card">${item.company_name}</div>
        <div class="item-details">${item.Item_name}</div>
        <div class="price-card">
            <span class="current-price-card">Rs ${Current_price}</span>
            <span class="original-price-card">Rs ${item.Original_price}</span>
            <span class="discount-percent-card">(${Discount_percent}% off)</span>
        </div>
        <div class="butt-div">
        <button class="button-add" onclick = "Add_To_Bag(${item.id})">Add To Bag</button>
        </div>
    
    </div>
    `;
  });

  AdidasElement.innerHTML = innerHtml_Adidas;
}




//Add-to-Bag option on click
let bagItems=[];
function Add_To_Bag(ItemId) {
  bagItems.push(ItemId);
  localStorage.setItem('bagItems',JSON.stringify(bagItems));
  displayBagIcon();
}

//Adding superscript count to bag icon
function displayBagIcon() {
  let bagcount = document.querySelector('.bag-item-count');
  if (bagItems.length != 0) {
    bagcount.style.visibility = 'visible';
    bagcount.innerText = bagItems.length;
  }
  
  else{
    bagcount.style.visibility = 'hidden';
  }
};
OnLoad();
displayBagIcon();