// Page 1 

const movieBtn = document.getElementById('movie');
const showBtn = document.getElementById('show');

function pageRedirect() {
  location.href = '/pages/page2.html';
}

// movieBtn.addEventListener('click', pageRedirect);
// showBtn.addEventListener('click', pageRedirect); 

if(movieBtn) {
  movieBtn.addEventListener('click', function(){
    alert(87388398)
  });
}





// General redirect function -> 
// function pageRedirect(page) {
//   location.href = `'/pages/page${page}.html'`
// }; 

