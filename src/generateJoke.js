import * as XMLHttpRequest from "xhr2";

function tryparse(string) {
  try {
    return JSON.parse(string);
  } catch (error) {
    return null;
  }
}

function generateJoke() {
  return new Promise((resolve) => {
    try {
      let request = new XMLHttpRequest();
      request.open("GET", "https://icanhazdadjoke.com");
      request.setRequestHeader("Accept", "application/json");
      request.send();
      request.onload = () => {
        let response = tryparse(request.response);
        if (response && response.status == 200) {
          return resolve({ success: true, joke: response.joke });
        } else {
          return resolve({ success: false });
        }
      };
    } catch (error) {
      return resolve({ success: false, error });
    }
  });
}

export default generateJoke;
