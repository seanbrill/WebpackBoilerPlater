import generateJoke from "./generateJoke";
import "../styles/main.css";
import img from "./assets/laugh.png";

let imageElement = document.querySelector("#img");
imageElement.src = img;

let jokeButton = document.querySelector("button");
jokeButton.onclick = () => {
  generateJoke().then((response) => {
    if (response.success) {
      let jokeElement = document.querySelector("#joke");
      jokeElement.innerHTML = response.joke;
    } else {
      alert("error getting joke :(");
    }
  });
};
