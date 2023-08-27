// Date function

// takes UTC time of article publishing and subtracts the local
// time zone offset to UTC from it to get age of article in minutes
// then converts it into either mins, hours, or days
function findAgeOfArticle(dateString) {
  const currTime = new Date();
  // console.log("curr Time " + currTime);
  const utcDate = new Date(dateString);
  // console.log("utc date " + utcDate);
  // Get the local time zone offset in minutes
  const localTimeZoneOffset = new Date().getTimezoneOffset();
  // Calculate the local time by adding the offset
  const localTime = new Date(
    utcDate.getTime() + localTimeZoneOffset * 60 * 1000
  );

  let diff = (currTime - localTime) / 60 / 1000;
  // console.log("diff " + diff);

  if (diff < 60) {
    if (diff > 1) {
      return Math.trunc(diff) + " mins";
    } else {
      return Math.trunc(diff) + "1 min";
    }
  } else if (diff >= 60 && diff < 1440) {
    return Math.trunc(diff / 60) + " hrs";
  } else {
    if (Math.trunc(diff / (60 * 24)) > 1) {
      return Math.trunc(diff / (60 * 24)) + " days";
    } else {
      return "1 day";
    }
  }
}

// Fill out card content

// Function prints out the results to the cards
let indexLoc = 0;
const cards = document.querySelectorAll(".card");

function addResults(searchedArticles) {
  const newList = sortArticlesWithPic(searchedArticles);
  console.log("new list = ", newList);
  cards.forEach((card) => {
    const pic = card.querySelectorAll("img");
    const title = card.querySelectorAll("h2");
    const sourceName = card.querySelectorAll(".source-name");
    const ageOfArticle = card.querySelectorAll(".age-of-article");
    const resultIndex = card.querySelector(".resultIndexHolder");
    console.log("result index " + resultIndex);

    pic.forEach((pic) => {
      pic.src = newList[indexLoc].urlToImage;
    });
    title.forEach((title) => {
      title.innerText = newList[indexLoc].title;
    });
    sourceName.forEach((sourceName) => {
      sourceName.innerText = newList[indexLoc].source.name;
    });
    ageOfArticle.forEach((articleAge) => {
      articleAge.innerText = findAgeOfArticle(newList[indexLoc].publishedAt);
    });
    resultIndex.innerText = indexLoc;
    if (!card.classList.contains("duplicate")) {
      indexLoc++;
    }
  });
}

// This function opens the modal and fills out the modal with the content of the article clicked
const articleModalButton = document.getElementById("article-modal-btn");

function openArticleModal(elem) {
  const position = elem.querySelector(".resultIndexHolder").innerText;
  const newArticles = sortArticlesWithPic(articles);
  const article = newArticles[position];
  const articleModal = document.querySelector(".article-modal");

  const title = articleModal.querySelector("#article-title");
  const img = articleModal.querySelector("#article-img");
  const desc = articleModal.querySelector("#article-desc");
  const content = articleModal.querySelector("#article-content");
  const outlet = articleModal.querySelector("#outlet-name");
  const timeOld = articleModal.querySelector("#time-old");
  const link = articleModal.querySelector("#article-link");

  title.innerText = article.title;
  img.src = article.urlToImage;
  desc.innerText = article.description;
  content.innerText = article.content;
  outlet.innerText = article.source.name;
  link.href = article.url;
  timeOld.innerText = findAgeOfArticle(article.publishedAt);

  articleModalButton.click();
}

// Api stuff

// Returns a string that gets rid of extra white spaces around words and in between words
function removeSpaces(q) {
  let split = q.split("");
  let newArr = [];
  let prev = "";
  while (split[0] == " ") {
    split.shift();
  }
  split.forEach((char) => {
    if (!(char == prev && char == " ")) {
      newArr.push(char);
    }
    prev = char;
  });
  if (newArr[newArr.length - 1] == " ") {
    newArr.pop();
  }
  return newArr.join("");
}

// Returns a string where the spaces between words are replaced with "%20"
function encode(q) {
  let encoded = [];
  let query = removeSpaces(q);
  let querySplit = query.split(" ");
  for (let i = 0; i < querySplit.length; i++) {
    encoded.push(querySplit[i]);
    encoded.push("%20");
  }
  encoded.pop();
  encoded = encoded.join("");
  return encoded;
}

// Sorts articles that have images to the front of array
function sortArticlesWithPic(articlesArr) {
  let newArticlesList = [];

  articlesArr.forEach((article) => {
    if (article.urlToImage != null) {
      newArticlesList.push(article);
    }
  });
  return newArticlesList;
}

let articles;
let articles2;
let sortedArticles;
let sortedArticles2 = [];

let searchedArticles = {};

const API_KEY = "&apiKey=fcd54abe02854c54a8401ef2cd371646";
const topHeadlinesEndpoint = "https://newsapi.org/v2/top-headlines?";
const everythingEndpoint = "https://newsapi.org/v2/everything?";

const pageSize = "pageSize=100";
const query = "&q=";
const country = "&country=us";
const category = "&category=";
const language = "&language=en";

let queryTerm = "";
let currCat = "";

const categoryOptions = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const generalEndpoint =
  "https://newsapi.org/v2/top-headlines?pageSize=100&country=us&category=general&apiKey=fcd54abe02854c54a8401ef2cd371646";
const businessEndpoint =
  "https://newsapi.org/v2/top-headlines?pageSize=100&country=us&category=business&apiKey=fcd54abe02854c54a8401ef2cd371646";

const lessCards = document.querySelector(".lessCards");
const lessCards2 = document.querySelector(".lessCards2");
const moreCards = document.querySelector(".moreCards");

async function pullArticles(endpoint) {
  lessCards.style.display = "block";
  lessCards2.style.display = "block";
  moreCards.style.display = "none";
  indexLoc = 0;
  return (await fetch(endpoint)).json();
}

async function searchArticles(endpoint) {
  try {
    response = await pullArticles(endpoint);
    articles = sortArticlesWithPic(response.articles);
    addResults(articles);
  } catch (e) {
    console.log("error");
    console.log(e);
  }
}

async function searchArticlesWithQuery(endpoint) {
  try {
    response = await pullArticles(endpoint);
    articles = sortArticlesWithPic(response.articles);
    addResults(articles);
  } catch (e) {
    console.log("error");
    console.log(e);
  }
}

function searchCategory(cat) {
  const displayName = document.getElementById("top-display-name");
  currCat = categoryOptions[cat];
  let categoryEndpoint =
    topHeadlinesEndpoint + pageSize + category + currCat + country + API_KEY;
  searchArticles(categoryEndpoint);
  displayName.innerText =
    categoryOptions[cat][0].toUpperCase() + categoryOptions[cat].slice(1);
  const searchCriteria = document.getElementById("search-criterea");
  searchCriteria.innerText = "";
}

function searchGeneral() {
  const displayName = document.getElementById("top-display-name");
  searchArticles(generalEndpoint);
  displayName.innerText = "GENERAL";
  const searchCriteria = document.getElementById("search-criterea");
  searchCriteria.innerText = "";
}

function updateQueryTerm(inputBox) {
  queryTerm = inputBox.value;
}

function searchQuery(inputType) {
  if (queryTerm.length > 0) {
    const noSpaceQuery = removeSpaces(queryTerm);
    const encodedQueryTerm = encode(queryTerm);
    const queryEndpoint =
      everythingEndpoint +
      pageSize +
      query +
      encodedQueryTerm +
      language +
      API_KEY;
    console.log(queryEndpoint);
    searchArticlesWithQuery(queryEndpoint);
    const displayName = document.getElementById("top-display-name");
    displayName.innerText = "POPULAR";
    const searchCriteria = document.getElementById("search-criterea");
    searchCriteria.innerText = 'Showing results for "' + noSpaceQuery + '"';
  }
  const inputBox = document.querySelector(inputType);
  inputBox.value = "";
  queryTerm = "";
}

document.addEventListener("DOMContentLoaded", async () => {
  try {
    response = await pullArticles(generalEndpoint);
    // const sortedArticles = sortArticlesWithPic(articles);
    const genArticles = response.articles;
    // addResults(sortedArticles);
    addResults(genArticles);
  } catch (e) {
    console.log("error");
    console.log(e);
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  try {
    response2 = await pullArticles(businessEndpoint);
    articles2 = response2.articles;
    createNewsTickers(articles2);
  } catch (e) {
    console.log("error");
    console.log(e);
  }
});

function createNewsTickers(articles) {
  const newsTicker = document.getElementById("news-ticker");
  for (let i = 0; i < 10; i++) {
    const ticker = document.createElement("li");
    ticker.innerHTML = `
  <a href="${articles[i].url}" target="_blank">
  ${articles[i].title}
  </a>`;
    const spacer = document.createElement("p");
    spacer.innerHTML = "|";
    newsTicker.appendChild(ticker);
    newsTicker.appendChild(spacer);
  }
  const width = newsTicker.scrollWidth;
  const style = document.createElement("style");
  style.innerHTML = `
  @keyframes scroll {
    from {
      transform: translateX(100%);
    } 
    to {
      transform: translateX(-${width}px);
    }
  }
  `;
  document.head.appendChild(style);
}

let currentPageNumber = 1;

// 8 extra cards
function changePage(elem, pageNumber) {
  if (pageNumber == 1) {
    indexLoc = 0;
    currentPageNumber = 1;
    lessCards.style.display = "block";
    lessCards2.style.display = "block";
    moreCards.style.display = "none";
  } else if (pageNumber == 2) {
    indexLoc = 16;
    lessCards.style.display = "none";
    lessCards2.style.display = "none";
    moreCards.style.display = "block";
  } else if (pageNumber == 3) {
    indexLoc = 36;
    lessCards.style.display = "none";
    lessCards2.style.display = "none";
    moreCards.style.display = "block";
  } else if (pageNumber == 4) {
    indexLoc = 56;
    lessCards.style.display = "none";
    lessCards2.style.display = "none";
    moreCards.style.display = "block";
  } else {
    indexLoc = 76;
    lessCards.style.display = "none";
    lessCards2.style.display = "none";
    moreCards.style.display = "block";
  }
  // let pages = document.querySelectorAll(".pageNum");
  // pages.forEach((page) => {
  //   page.classList.remove("active");
  // });

  if (typeof elem == "number") {
    elem.classList.add("active");
  }
  // const newList = sortArticlesWithPic(articles);
  // addResults(newList);
  addResults(articles);
}

function nextPrevBtns(prevTrue) {
  if (prevTrue) {
    changePage(null, currentPageNumber - 1);
  } else {
    changePage(null, currentPageNumber + 1);
  }
}
