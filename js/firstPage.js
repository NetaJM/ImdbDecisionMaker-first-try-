
const movieBtn = document.getElementById('movie');
const showBtn = document.getElementById('show');

function secondPageRedirect() {
  location.href = "secondPage.html";
}

movieBtn.addEventListener('click', secondPageRedirect);
showBtn.addEventListener('click', secondPageRedirect); 



// // General redirect function - 
// function pageRedirect(page) {
//   location.href = `${page}`
// }; 

