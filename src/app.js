/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var ext = [".com", ".net", ".us", ".io"];

  let comb = "";
  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        for (let l of ext) {
          let message = i + j + k + l;
          comb += message + "</br>";
          console.log(message);
        }
      }
    }
  }

  document.getElementById("domain").innerHTML = comb;

  console.log("Hello Rigo from the console!");
};
