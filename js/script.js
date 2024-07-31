const imageForm = document.getElementById("imageForm");
const searchBoxContainer = document.getElementById("search-box");
const imageContainer = document.getElementById("imageContainer");
const loadMoreBtn = document.getElementById("load-more-btn");

const API_Key = `YOUR_API_KEY`;

let perPage = 15;
let page = 1;
let searchQuery = "";

async function fetchImages() {
  searchQuery = searchBoxContainer.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchQuery}&client_id=${API_Key}&per_page=${perPage}`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    imageContainer.innerHTML = "";
  }

  const results = data.results;

  results.map((result) => {
    const img = document.createElement("img");
    img.src = result.urls.regular;

    const imgLink = document.createElement("a");
    imgLink.href = result.links.html;
    // imgLink.target = "_blank";

    imgLink.appendChild(img);
    imageContainer.appendChild(imgLink);
  });

  loadMoreBtn.style.display = "block";
}

imageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  fetchImages();
  searchBoxContainer.textContent = "";
});

loadMoreBtn.addEventListener("click", () => {
  page++;
  fetchImages();
});
