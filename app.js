document.getElementById("button").addEventListener("click", loadData);

function loadData() {
  //create XHR object
  const xhr = new XMLHttpRequest();
  console.log(`Ready State: ${xhr.readyState}`);
  //OPEN
  xhr.open("GET", "data.txt", true);

  //Optional, shows progress if using a spinner
  xhr.onprogress = function () {
    console.log(`Ready State: ${xhr.readyState}`);
  };

  //before the onload property, had to use onreadystatechange,
  //test for the readyState === 4
  xhr.onload = function () {
    if (this.readyState === 4) {
      // console.log(`Ready State: ${xhr.readyState}, ${this.responseText}`);
      document.getElementById(
        "output"
      ).innerHTML = `<h1>${this.responseText}</h1> <h2>Ready State: ${this.readyState}</h2>`;
    }
  };
  //in case of a server error
  xhr.onerror = function () {
    console.log("Request error...");
  };

  xhr.send();
}

// readyState Values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// HTTP Statuses
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
