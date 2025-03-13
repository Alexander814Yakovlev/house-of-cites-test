// mobile menu
const burgerButton = document.querySelector("#burger");
const mobileMenu = document.querySelector(".mobile__menu");

burgerButton.addEventListener("click", () => {
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "flex";
  } else {
    mobileMenu.style.display = "none";
  }
});

// Swiper init

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

// Accordion
let acc = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    for (let item of acc) {
      if (item !== this) {
        let vertical = item.querySelector(".vertical");
        item.classList.remove("active");
        item.nextElementSibling.style.display = "none";
        vertical.className = "vertical";
      }
    }
    this.classList.add("active");
    let panel = this.nextElementSibling;
    let vertical = this.querySelector(".vertical");
    if (panel.style.display === "block") {
      panel.style.display = "none";
      vertical.classList.remove("hidden-line");
    } else {
      panel.style.display = "block";
      vertical.classList.add("hidden-line");
    }
  });
  acc[i].addEventListener("mouseover", function () {
    let horizontal = this.querySelector(".horizontal");
    let vertical = this.children[1].children[1];
    vertical.classList.add("orange-line");
    horizontal.classList.add("orange-line");
  });
  acc[i].addEventListener("mouseleave", function () {
    let horizontal = this.querySelector(".horizontal");
    let vertical = this.children[1].children[1];
    vertical.classList.remove("orange-line");
    horizontal.classList.remove("orange-line");
  });
}

// buyLeads toggler

let buyLeadsToggler = document.querySelector(".buyLeads__text_toggler");
let buyLeadsAdd = document.querySelector(".buyLeads__text_additional");

buyLeadsToggler.addEventListener("click", function () {
  console.log(this.textContent);

  if (this.textContent === "Читать больше") {
    this.textContent = "Скрыть";
    buyLeadsAdd.style.display = "block";
  } else if (this.textContent === "Скрыть") {
    this.textContent = "Читать больше";
    buyLeadsAdd.style.display = "none";
  }
});
