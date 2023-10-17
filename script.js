"use strict";

import data from "./sample.json" assert { type: "json" };

const paragraph1 = document.getElementById("one");
const paragraph2 = document.getElementById("two");

let constellations = [];

for (let i = 0; i < data.length; i++) {
  constellations.push(data[i].name);
}
const parentDiv = document.getElementById("allConste");
for (let i = 0; i < constellations.length; i++) {
  let child = document.createElement("button");
  child.textContent = constellations[i];
  child.id = i;
  child.classList = "constEl";
  parentDiv.appendChild(child);
}
const button = document.querySelectorAll(".constEl");

for (let i = 0; i < constellations.length; i++) {
  button[i].addEventListener("click", function () {
    paragraph1.textContent = data[i].paragraph1;
    paragraph2.textContent = data[i].paragraph2;
  });
}
