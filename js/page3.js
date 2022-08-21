// Page 3

const genresBtn = document.getElementById('genres-submit-btn');

function pageRedirect() {
    location.href = "/pages/page4.html"
}
  

if(genresBtn) {
    genresBtn.addEventListener('click', pageRedirect);
  }


//   genresBtn.addEventListener('click', pageRedirect)