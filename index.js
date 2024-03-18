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
  displayBagIcon();