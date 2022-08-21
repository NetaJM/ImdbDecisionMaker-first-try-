// Page 2

const watchlistBtn = document.getElementById('watchlistPage');

function pageRedirect() {
  location.href = "/pages/page3.html"
};

if(watchlistBtn) {
  watchlistBtn.addEventListener('click', pageRedirect);
}

// watchlistBtn.addEventListener('click', pageRedirect)