// nav

const activee = document.querySelector(".activee");
const navToggler = document.querySelector(".nav-toggler");
const cross = document.querySelector(".cross");

navToggler.addEventListener("click", () => {
  activee.classList.add("activ");
});

cross.addEventListener("click", () => {
  activee.classList.remove("activ");
});

// typing animation

var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Application Developer",
    "",
    "Mobile Application Developer",
    "",
    "Retrieval Augmented Generation Developer",
    "",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// aside add active class on click any nav item

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navList[j].querySelector("a").classList.remove("active");
      activee.classList.remove("activ");
    }
    this.classList.add("active");
  });
}
