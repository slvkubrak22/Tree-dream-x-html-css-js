"use strict";

const circles = document.querySelectorAll(".circle");
const contents = document.querySelectorAll(".content");



circles.forEach(circle => circle.addEventListener('click', function(e) {
  e.preventDefault();
  const clickedCircle = e.target;
  console.log(clickedCircle);
  if(!clickedCircle) return;
  // contents.forEach(content => content.classList.toggle('hidden'));
  document.querySelector(`.circle__content--${clickedCircle.dataset.circle}`).classList.toggle('hidden');
}));




