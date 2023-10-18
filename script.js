"use strict";

import data from "./output.json" assert { type: "json" };
const myKey = config.MY_KEY;

// Single constellation paragraph, more details, picture, button elements
const consImg = document.getElementById("image");
const single = document.getElementById("single");
const paragraph0 = document.getElementById("zero");
const paragraph1 = document.getElementById("one");
const paragraph2 = document.getElementById("two");
const details = document.getElementById("more");
const name = document.getElementById("name");
const engName = document.getElementById("engName");
const brightestStar = document.getElementById("brightestStar");
const apiStar = document.getElementById("apiStar");

// Hide details tag first
single.classList.add("hidden");

// Api Ninja
let options = {
  method: "GET",
  headers: { "x-api-key": myKey },
};

let url;

// Api call function

function apiCall(constel) {
  url = `https://api.api-ninjas.com/v1/stars?constellation=${constel}`;
  fetch(url, options)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      if (data.length === 0) {
        console.log("No response");
        apiStar.classList.add("hidden");
      } else {
        apiStar.classList.remove("hidden");
        apiStar.textContent =
          "Brightest star's distance from earth is : " +
          data[0].distance_light_year +
          " Light years." +
          " It's spectral class is: " +
          data[0].spectral_class;
      }
      console.log(data);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

// create an array from data with constellations name
let constellations = [];
for (let i = 0; i < data.length; i++) {
  constellations.push(data[i].name);
}

// Constellations name list element
const parentDiv = document.getElementById("allConste");

// Create 88 buttons for constellations under parentDiv
for (let i = 0; i < constellations.length; i++) {
  let child = document.createElement("button");
  child.textContent = constellations[i];
  child.id = i;
  child.classList = "constEl";
  parentDiv.appendChild(child);
}

// Select all buttons
const button = document.querySelectorAll(".constEl");

// add event for all buttons
for (let i = 0; i < constellations.length; i++) {
  button[i].addEventListener("click", function () {
    consImg.src = data[i].imgUrl;
    name.textContent = data[i].name;
    engName.textContent = data[i].englishName;
    brightestStar.textContent = "Brightest Star: " + data[i].brightestStar;
    paragraph0.textContent = data[i].paragraph0;
    paragraph1.textContent = data[i].paragraph1;
    paragraph2.textContent = data[i].paragraph2;
    details.href = data[i].url;

    // get information of first star from api call
    apiCall(data[i].name);

    single.classList.remove("hidden");
  });
}
