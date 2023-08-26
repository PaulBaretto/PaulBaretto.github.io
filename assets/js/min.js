


// slideIn navbar 
function toggleMenu() {
  var nav = document.querySelector('.nft-nav-menu');
  // add or remove class
     nav.classList.toggle('nft-nav-show')

     let body = document.querySelector('body');
         body.addEventListener('click', () => {
           if(nav.classList.contains ('nft-nav-show')){
            body.style.cssText = 'overflow:hidden';
          } else{
             body.style.cssText = 'overflow:auto';
           }
         })
};

// nav search desktop
var navSearchOpen = document.querySelector('.nav-search-icon');
navSearchOpen.addEventListener('click', () => {
  var searchbox = document.querySelector('.search-container')
  searchbox.classList.toggle('nft-Search-show')

  window.addEventListener('scroll', () => {
    if (searchbox.classList.contains('nft-Search-show')) {
        searchbox.classList.remove('nft-Search-show');
    }
  });

});
// nav search mobile
var navSearchOpen = document.querySelector('.search-sm');
navSearchOpen.addEventListener('click', () => {
  var searchbox = document.querySelector('.search-container-sm')
  searchbox.classList.toggle('nft-Search-show')
});

// light/dark mode toggler  start
let toggleBtn = document.querySelectorAll('.toggle');

  toggleBtn.forEach(changeBg => {
      changeBg.addEventListener('click', () => {
      let bodyTag = document.querySelector('body');
      bodyTag.classList.toggle('morning');
    });
    });

// card like btn 
let test1 = document.querySelectorAll('.likes-btn');

  test1.forEach(test2 => {
    test2.addEventListener('click', () => {
    let like = test2.querySelector('.like');
    like.classList.toggle('bg-red');
});
})


// card watch 
function updateTime() {
  let now = new Date();

  let days = now.getUTCDate() + 1 ; // added 1 as getUTCDate() returns day of the month
  let hours = now.getUTCHours();
  let minutes = now.getUTCMinutes();
  let seconds = now.getUTCSeconds();

  let cardTimer = document.querySelectorAll('.card-timer');
  cardTimer.forEach(timer => {
       timer.querySelector('.card-timer .days').textContent = days.toString().padStart(2, '0');
       timer.querySelector('.card-timer .hours').textContent = hours.toString().padStart(2, '0');
       timer.querySelector('.card-timer .minutes').textContent = minutes.toString().padStart(2, '0');
       timer.querySelector('.card-timer .seconds').textContent = seconds.toString().padStart(2, '0');
});

}
// Update the time every second
setInterval(updateTime, 1000);



// owl carousel 
let nftOwl = jQuery(".owl-main")
nftOwl.owlCarousel({
   navText: ["<img src='assets/images/prev.png'>", "<img src='assets/images/next.png'>"],
  items: 4,
  loop: true,
  margin: 15,
  nav:true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      dots: true,

    },
    600: {
      items: 2,
      dots: true,

    },
    1000: {
      items: 3,
      dots: true

    }
  }
});


let accordions = document.querySelectorAll('.accordion');

  accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
     
      let accordionBtn = accordion.querySelector('.accordionbtn');
          accordionBtn.classList.toggle('rotate');
     
     accordion.classList.toggle('active');  

     accordions.forEach(function(unActiveItem) {
      if (unActiveItem !== accordion) {
        unActiveItem.classList.remove('active');
      }
     })

    })
  });
