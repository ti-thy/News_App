const apiKey = import.meta.env.VITE_NEWS_API_KEY; // ✅ Use VITE_ prefix

const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

async function fetchNews() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched Data:", data); // ✅ Check if API returns data
        displayNews(data.articles); // ✅ Pass articles to display function
    } catch (error) {
        console.error("There was an error fetching news:", error);
    }
}

function displayNews(articles) {
    const newsDiv = document.querySelector('#news');
    newsDiv.innerHTML = ''; // Clear previous news

    for (const article of articles) {
        const articleDiv = document.createElement('div');
        articleDiv.classList.add('article');

        const title = document.createElement('h3');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description;

        const image = document.createElement('img');
        image.src = article.urlToImage;
        image.alt = article.title;

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = "Read more";
        link.target = "_blank";

        articleDiv.appendChild(title);
        articleDiv.appendChild(image);
        articleDiv.appendChild(description);
        articleDiv.appendChild(link);
        newsDiv.appendChild(articleDiv);
    }
}

fetchNews();
console.log("Script loaded successfully!");


 
