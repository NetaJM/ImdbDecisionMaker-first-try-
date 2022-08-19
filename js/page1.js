// Page 1 

const movieBtn = document.getElementById('movie');
const showBtn = document.getElementById('show');

function secondPageRedirect() {
  location.href = '/pages/page2.html';
}

movieBtn.addEventListener('click', secondPageRedirect);
showBtn.addEventListener('click', secondPageRedirect); 





// General redirect function -> 
// function pageRedirect(page) {
//   location.href = `${page}`
// }; 