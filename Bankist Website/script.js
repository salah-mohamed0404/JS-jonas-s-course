"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
// Button scrolling
btnScrollTo.addEventListener("click", function () {
  // old way
  /*
  const s1coords = section1.getBoundingClientRect();

  Scrolling
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );

  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  */

  // Modern way
  section1.scrollIntoView({ behavior: "smooth" });
});

///////////////////////////////////////
// Page navigation
/*
document.querySelectorAll(".nav__link").forEach(el =>
  el.addEventListener("click", function (e) {
    e.preventDefault();

    const id = this.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  })
);
*/
// better way
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    // console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
