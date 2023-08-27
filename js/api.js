// Example - https://newsapi.org/v2/everything?q=bitcoin&apiKey=fcd54abe0

const API_KEY = "&apiKey=fcd54abe02854c54a8401ef2cd371646";

const endpoint = "https://newsapi.org/v2/top-headlines?";

const query = "q=";
const country = "&country=us";
const pageSize = "&pageSize=100";
const category = "&category=";

const categoryOptions = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

console.log(completeEndpoint2);

async function pullArticles() {
  return (await fetch(completeEndpoint2)).json();
}

document.addEventListener("DOMContentLoaded", async () => {
  // let results = []
  try {
    let articles = await pullArticles();
    addResults(articles);
    console.log(articles);
  } catch (e) {
    console.log("error");
    console.log(e);
  }
});
