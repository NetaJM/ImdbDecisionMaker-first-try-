const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  // "/": "/index.html",
  "/pages/page1": "/pages/page1.html",
  "/pages/page2": "/pages/page2.html",
  "/pages/page3": "/pages/page3.html",
  "/pages/page4": "/pages/page4.html",
  "/pages/resultPage": "/pages/resultPage.html",
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