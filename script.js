const apiKey = 'YOUR_NEWSAPI_KEY';  // Replace with your API key
const newsContainer = document.getElementById('news-container');

// Fetch news data
async function fetchNews() {
    try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=a2c70f797942441fbb737efb483fa211');
        const data = await response.json();

        displayNews(data.articles);
    } catch (error) {
        console.error("Error fetching news:", error);
    }
}

// Display news articles
function displayNews(articles) {
    newsContainer.innerHTML = '';  // Clear existing news
    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.classList.add('news-article');

        newsItem.innerHTML = `
            <img src="${article.urlToImage}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;

        newsContainer.appendChild(newsItem);
    });
}

// Fetch news on page load
fetchNews();
