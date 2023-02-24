// let addParagraphBtn = document.querySelector('article');
// document.querySelector('#add-paragraph').addEventListener('click', function() {
//   let p = document.createElement("p");
//   p.textContent = "abcdefjhigklmnopqrstyvwxyz"
//   addParagraphBtn .append(p);
// });

// document.querySelector('#remove-paragraph').addEventListener('click', function() {
//   document.querySelector('p').remove();
// });

let textDiv = document.querySelector('.text');
document.querySelector('#text-hide').addEventListener('click', function() {
  // textDiv.className = "text hide";
  textDiv.classList.add("hide");
});

document.querySelector("#text-show").addEventListener("click", function() {
  // textDiv.className = ""
  textDiv.classList.remove("hide")
});
let tweet = document.querySelector('#tweet');
let tweetSubmitBtn = document.querySelector("#tweet-submit");
let feed = document.querySelector('#feed');

tweetSubmitBtn.addEventListener("click", function() {
  let p = document.createElement("p");

  p.textContent = tweet.value;
  tweet.value = "";

  feed.append(p);
});


let inp1 = document.querySelector('#firstname');
let inp2 = document.querySelector('#lastname');
let result = document.querySelector('fullname');
document.querySelector("fullname-submit").addEventListener("click", function() {
  fullname.textContent = inp1.value + " " + inp2.value;
});







document.querySelector("#open-sidebar").addEventListener("click", function() {
  document.querySelector("#sidebar").classList.add("show");
});
document.querySelector("#close-sidebar").addEventListener("click", function() {
  document.querySelector("#sidebar").classList.remove("show");
});