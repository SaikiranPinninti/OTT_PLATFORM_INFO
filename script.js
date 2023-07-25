// Sample data for OTT platforms (you can replace this with real data)
const platformsData = [
    {
        name: "Netflix",
        description: "Stream popular TV shows and movies.",
        url: "https://www.netflix.com/",
        genres: ["Drama", "Comedy", "Thriller"],
        rating: 4.5
    },
    {
        name: "Amazon Prime Video",
        description: "Watch exclusive Amazon Originals and more.",
        url: "https://www.amazon.com/primevideo",
        genres: ["Drama", "Comedy", "Thriller","Action"],
        rating: 4.4
    },
    {
        name: "Disney+ Hotstar",
        description: "Stream Disney classics and new exclusives.",
        url: "https://www.disneyplus.com/",
        genres: ["Drama", "Comedy", "Thriller","Action","Kids","Sports"],
        rating: 4.3
    },
    {
        name: "Zee5",
        description: "Access a vast library of regional and international content.",
        url: "https://www.zee5.com/",
        genres: ["Drama","Comedy","Thriller","Romance"],
        rating: 4
    },
    {
        name: "SonyLIV",
        description: "Experience a mix of TV shows,movies and sports entertainment.",
        url: "https://www.sonyliv.com/",
        genres: ["Drama","Crime","Thriller","Comedy"],
        rating: 3.9
    },
    {
        name: "Voot",
        description: "Discover reality shows,TV dramas and kid's entertainment.",
        url: "https://www.voot.com/",
        genres: ["Drama","Reality TV","Comedy","Kids"],
        rating: 3.6
    },
    {
        name: "MX Player",
        description: "Enjoy a mix of original shows,movies,and TV programs.",
        url: "https://www.mxplayer.in/",
        genres: ["Drama","Comedy","Thriller"],
        rating: 3.8
    },
    {
        name: "Eros Now",
        description: "Watch Indian movies,music videos and original series.",
        url: "https://erosnow.com/",
        genres: ["Drama","Comedy","Romance"],
        rating: 3.6
    },
    {
        name: "JioCinema",
        description: "Access a diverse range of movies,TV shows and music videos.",
        url: "https://www.jiocinema.com/sports",
        genres: ["Drama","Comedy","Kids","Thriller"],
        rating: 4
    },
    {
        name: "AirtelXstream",
        description: "Stream live TV,movies,and TV series with Airtel's offering.",
        url: "https://www.airtelxstream.in/",
        genres: ["Drama","Comedy","Thriller","Action"],
        rating: 3.5
    },
    {
        name: "Hungama Play",
        description: "Enjoy Indian movies,original series and short films.",
        url: "https://www.hungama.com/tv-shows/",
        genres: ["Drama","Comedy","Romance","Thriller"],
        rating: 3.4
    },
    {
        name: "Viu",
        description: "Explore a variety of Asian dramas and originals.",
        url: "https://www.viu.com/ott/no-service/",
        genres: ["Drama","Comedy","Thriller","Romance"],
        rating: 3.6
    },
    {
        name: "Hoichoi",
        description: "Access Bengali movies,shows and exclusive content.",
        url: "https://www.hoichoi.tv/",
        genres: ["Drama","Comedy","Thriller","Romance"],
        rating: 3.8
    },
    {
        name: "Sun NXT",
        description: "Experience South Indian language movies and TV shows.",
        url: "https://www.sunnxt.com/",
        genres: ["Drama","Comedy","Action"],
        rating: 3.7
    },
    {
        name: "ShemarooMe",
        description: "Watch classic Bollywood movies and regional films.",
        url: "https://www.shemaroome.com/",
        genres: ["Drama","Comedy","Thriller","Devotional"],
        rating: 3.7
    },
    {
        name: "YuppTV",
        description: "Access live TV channels and on-demand content from South Asia.",
        url: "https://www.yupptv.com/",
        genres: ["Drama","Comedy","News"],
        rating: 3.9
    },
    {
        name: "Lionsgate Play",
        description: "Stream Hollywood movies and acclaimed TV shows.",
        url: "https://lionsgateplay.com/login",
        genres: ["Drama","Action","Thriller"],
        rating: 4
    },
    {
        name: "Discovery+",
        description: "Discover documentries ,reality shows and exclusive content.",
        url: "https://discoveryplus.in/",
        genres: ["Documentry","Reality","Nature"],
        rating: 4.1
    },



];

const platformsPerPage = 3; // Number of platforms to display per page
let currentPage = 1; // Current page (starts from 1)


function createPlatformCard(platform) {
    return `
        <div class="platform-card">
            <h2>${platform.name}</h2>
            <p>${platform.description}</p>
            <p><strong>Genres:</strong> ${platform.genres.join(", ")}</p>
            <p><strong>Rating:</strong> ${platform.rating}</p>
            <a href="${platform.url}" target="_blank">Visit</a>
        </div>
    `;
}


function displayPlatforms(pageNumber) {
    const platformsSection = document.getElementById("platforms");
    platformsSection.innerHTML = ""; // Clear previous content
  
    const startIndex = (pageNumber - 1) * platformsPerPage;
    const endIndex = startIndex + platformsPerPage;
  
    for (let i = startIndex; i < endIndex && i < platformsData.length; i++) {
      const platformCardHTML = createPlatformCard(platformsData[i]);
      platformsSection.insertAdjacentHTML("beforeend", platformCardHTML);
    }
  }
  
  function setupPagination() {
    const totalPages = Math.ceil(platformsData.length / platformsPerPage);
    const paginationContainer = document.getElementById("pagination");
    paginationContainer.innerHTML = ""; // Clear previous pagination buttons
  
    for (let page = 1; page <= totalPages; page++) {
      const button = document.createElement("button");
      button.textContent = page;
      if (page === currentPage) {
        button.classList.add("active");
      }
      button.addEventListener("click", () => {
        currentPage = page;
        displayPlatforms(currentPage);
        setupPagination();
      });
      paginationContainer.appendChild(button);
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayPlatforms(currentPage);
    setupPagination();
  });


  

// Function to filter platforms by genre
function filterPlatformsByGenre(genre) {
    return platformsData.filter(platform => platform.genres.includes(genre));
}

// Function to display filtered platforms
function displayFilteredPlatforms(filteredPlatforms) {
    const platformsSection = document.getElementById("platforms");
    platformsSection.innerHTML = ""; // Clear previous content

    if (filteredPlatforms.length === 0) {
        platformsSection.innerHTML = "<p>No platforms found for this genre.</p>";
    } else {
        filteredPlatforms.forEach(platform => {
            const platformCardHTML = createPlatformCard(platform);
            platformsSection.insertAdjacentHTML("beforeend", platformCardHTML);
        });
    }
}

// Event listener for search input
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredPlatforms = platformsData.filter(platform => platform.name.toLowerCase().includes(searchTerm));
    displayFilteredPlatforms(filteredPlatforms);
});

// Event listener for genre filter
const genreFilter = document.getElementById("genre-filter");
genreFilter.addEventListener("change", () => {
    const selectedGenre = genreFilter.value;
    if (selectedGenre === "all") {
        displayPlatforms();
    } else {
        const filteredPlatforms = filterPlatformsByGenre(selectedGenre);
        displayFilteredPlatforms(filteredPlatforms);
    }
});

// Call the displayPlatforms function when the page is fully loaded
 document.addEventListener("DOMContentLoaded", displayFilteredPlatforms);