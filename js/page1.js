// Page 1 

console.log('hi')


const movieBtn = document.getElementById('movie');
const showBtn = document.getElementById('show');
const pageTwo = document.getElementById("page2")


// function pageRedirect() {
//   document.getElementById("main-page").innerHTML = page2;
// }

// movieBtn.addEventListener('click', pageRedirect);


///////

// function pageRedirect() {
//   location.href = '/pages/page2.html';
// }


if(movieBtn) {
  movieBtn.addEventListener('pageshow', function(){
    document.getElementById("page1").innerHTML = pageTwo;
  });
}



// window.onload=function(){
//   const movieBtn = document.getElementById('movie');
//   movieBtn.addEventListener('click', pageRedirect);
// }





