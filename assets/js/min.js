


// adding a class in nav 
function toggleMenu() {
  var nav = document.querySelector('.nft-nav-menu');
  // add or remove class
  nav.classList.toggle('nft-nav-show');
}


// nav search desktop
var navSearchOpen = document.querySelector('.nav-search-icon');
navSearchOpen.addEventListener('click', () => {
  var searchbox = document.querySelector('.search-container')
  searchbox.classList.toggle('nft-Search-show')
})
// nav search mobile
var navSearchOpen = document.querySelector('.search-sm');
navSearchOpen.addEventListener('click', () => {
  var searchbox = document.querySelector('.search-container-sm')
  searchbox.classList.toggle('nft-Search-show')
})


// card like btn 
var likeBtn = document.querySelector('.likes-btn');
likeBtn.addEventListener('click', () => {
  var like = document.querySelector('.like');
  like.classList.toggle('bg-red');
});


// var likeBtn = document.querySelector('.likes-btn');

// likeBtn.addEventListener('click', (event) =>{
//   var like = document.querySelector('.like');
//   like.classList.toggle('bg-red');
// } )






// card watch 
function updateTime() {
  var now = new Date();

  var days = now.getUTCDate() - 1; // Subtract 1 as getUTCDate() returns day of the month
  var hours = now.getUTCHours();
  var minutes = now.getUTCMinutes();
  var seconds = now.getUTCSeconds();

  document.querySelector('.card-timer .days').textContent = days.toString().padStart(2, '0');
  document.querySelector('.card-timer .hours').textContent = hours.toString().padStart(2, '0');
  document.querySelector('.card-timer .minutes').textContent = minutes.toString().padStart(2, '0');
  document.querySelector('.card-timer .seconds').textContent = seconds.toString().padStart(2, '0');
}
// Update the time every second
setInterval(updateTime, 1000);



// owl carousel ini

var nftOwl = jQuery(".owl-main")
nftOwl.owlCarousel({
   navText: ["<img src='https://stfrancisxaviers.in/intern/paul/random-stuff/nft-world/assets/images/prev.png'>", "<img src='https://stfrancisxaviers.in/intern/paul/random-stuff/nft-world/assets/images/next.png'>"],
  items: 4,
  loop: true,
  margin: 15,
  // dots: true,
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
})





  // let owl_dots = document.querySelector('.owl-main .owl-dots');
  // owl_dots.style.cssText = 'display:black;';
  // owl_dots.classList.remove('disabled');