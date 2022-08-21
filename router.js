// Router 

// const route = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   window.history.pushState({}, "", event.target.href);
//   handleLocation();
// };



// const routes = {
//   404: "/pages/404.html",
//   "/movie-or-a-show": "/pages/page1.html",
//   "/watchlists": "/pages/page2.html",
//   "/genres": "/pages/page3.html",
//   "/filtering": "/pages/page4.html",
//   "/result": "/pages/resultPage.html",
// };

// const handleLocation = async () => {
//   const path = window.location.pathname;
//   const route = routes[path] || routes[404];
//   const html = await fetch(route).then((data) => data.text());
//     document.getElementById("main-page").innerHTML = html;
// };

// window.onpopstate = handleLocation;
// window.route = route;

// handleLocation();

///////////////////////

// Redirect 

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};



const routes = {
  404: "/pages/404.html",
  "/": "/pages/page1.html",
  "/page2": "/pages/page2.html",
  "/page3": "/pages/page3.html",
  "/page4": "/pages/page4.html",
  "/resultPage": "/pages/resultPage.html",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();