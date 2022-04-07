const menuBtn = document.querySelector(".c-menu");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    nav.style.display = "block";
    navOn = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    nav.style.display = "none";
    navOn = false;
  }
});

// const nav = document.querySelector(".c-navigation");
// navOn = false;


