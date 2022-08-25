// examlpe for next page

// const btn = document.querySelector('#btn');
// const currPage = document.querySelector('#page1');
// const nextPage = document.querySelector('#page2');

//   btn.addEventListener('click', (e) => {
//     currPage.innerHTML = nextPage.innerHTML
//   })




////////// ROUTER 1 ////////////////////

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "/pages/page1.html",
  "/page2": "/pages/page2.html",
  "/page3": "/pages/page3.html",
  "/page4": "/pages/page4.html",
  "/resultPage": "/pages/resultPage.html",
  404: "/pages/404.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes['/'];
  const html = await fetch(route).then((data) => data.text());
  document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

//////




















///////////////////////////////////

////////////// page 1 //////////////
// const movieBtn = document.getElementById('movie');
// const showBtn = document.getElementById('show');

// if(movieBtn) {
//   movieBtn.addEventListener('pageshow', function(){
//     location.href = '/pages/page2.html';
//   })
// }

// if(showBtn) {
//   showBtn.addEventListener('pageshow', function(){
//     location.href = '/pages/page2.html';
//   })
// }

// window.onload=function(){
//   const movieBtn = document.getElementById('movie');
//   if(movieBtn) {
//     movieBtn.addEventListener('click', function(){
//           location.href = '/pages/page2.html';
//        })
//   }
// }

// ////////////// page 2 //////////////
// const watchlistBtn = document.getElementById('watchlistPage');

// if(watchlistBtn) {
//   watchlistBtn.addEventListener('click', function() {
//     location.href = "/pages/page3.html"
//   })
// }

// if(watchlistBtn) {
//   watchlistBtn.addEventListener('click', function() {
//     location.href = "/pages/page3.html"
//   })
// }

// ////////////// page 3 //////////////
// const genresBtn = document.getElementById('genres-submit-btn');

// if(genresBtn) {
//     genresBtn.addEventListener('click', function() {
//       location.href = "/pages/page4.html"
//   })
//   }

// ////////////// page 4 //////////////
// const filteringBtn = document.getElementById('filtering-btn');

// if(filteringBtn) {
//     filteringBtn.addEventListener('click', function() {
//       location.href = "/pages/resultPage.html"
//     })
//   }

////////////// page result /////////////


