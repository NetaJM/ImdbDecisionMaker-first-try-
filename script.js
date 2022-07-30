

const movieBtn = document.getElementById('movie');
const showBtn = document.getElementById('show');

function secondPageRedirect() {
  location.href = "second.html";
}

movieBtn.addEventListener('click', () => {
  location.href = "second.html";
  })


showBtn.addEventListener('click', secondPageRedirect)


// SPA approach ? 

//  location.assign("second.html") ? 
  

