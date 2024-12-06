const btn = document.getElementById("mobile__btn");
const menu = document.getElementById("mobile__nav");

window.onload = function () {
  menu.style.display = "none";
};

btn.addEventListener("click", function () {
  if (menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }

});
