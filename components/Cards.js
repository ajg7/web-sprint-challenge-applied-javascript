// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from "axios";

axios.get("https://lambda-times-api.herokuapp.com/articles")
    .then(response => {
        const articles = response.data.articles;
        Object.keys(articles).forEach(key => {
            const topicArticles = articles[key]
            topicArticles.forEach(article => {
                const card = articleMaker(article)
                const cardsContainer = document.querySelector(".cards-container");
                cardsContainer.appendChild(card);
            })
        })
    })
    .catch(error => {
        console.log(error);
    })



const articleMaker = articleObj => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", event => {
        console.log(articleObj.headline)
    })

    const headline = document.createElement("div");
    headline.classList.add("headline");
    headline.textContent = articleObj.headline;

    const author = document.createElement("div");
    author.classList.add("author");

    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = articleObj.authorPhoto;

    const byLine = document.createElement("span");
    byLine.classList.add("by-line");
    byLine.textContent = articleObj.authorName;

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(byLine);

    return card;
}

