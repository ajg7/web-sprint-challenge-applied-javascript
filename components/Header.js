// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const theHeaderDiv = document.createElement("div");
    theHeaderDiv.classList.add("header");
    
    const date = document.createElement("span");
    date.classList.add("date");

    const lambdaTimesHeader = document.createElement("h1");

    const temperature = document.createElement("span");
    temperature.classList.add("temp");

    const headerContainer = document.querySelector(".header-container");

    headerContainer.appendChild(theHeaderDiv);
    theHeaderDiv.appendChild(date);
    theHeaderDiv.appendChild(lambdaTimesHeader);
    theHeaderDiv.appendChild(temperature);

    return theHeaderDiv;
}

Header();