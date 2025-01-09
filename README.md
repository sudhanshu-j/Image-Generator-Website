# Image Generator

This project is an **Image Generator** web app that allows users to search and display images from **Unsplash** using their API. It also provides functionality to load more images dynamically as the user scrolls through the results. The app is responsive and designed to work on both desktop and mobile devices.

---

## Features

- **Search Functionality**: Users can search for images based on their query.

- **Load More**: After loading the initial results, users can click the "Load More" button to load more images.

- **Responsive Design**: The app is optimized for different screen sizes, including mobile and desktop.

- **Image Links**: Each image is linked to its Unsplash page for more information.

---

## Table of Contents

- [Technologies Used](#technologies-used)

- [Setup Instructions](#setup-instructions)

- [Project Structure](#project-structure)

- [How It Works](#how-it-works)

- [Contributing](#contributing)

---

## Technologies Used

- **HTML5** - Structure of the web page.

- **CSS3** - Styling and responsive design.

- **JavaScript** - Fetching and displaying images using the Unsplash API.

- **Unsplash API** - Source of the images.

---

## Setup Instructions

To set up the project on your local machine, follow these steps:

### Clone the repository

   ```bash
   git clone https://github.com/your-username/image-generator.git
   cd image-generator
   ```

### Create an Unsplash API Key:

1. Go to [Unsplash Developers](https://unsplash.com/developers).

2. Sign in or create an account.

3. Create a new application to get your API key.

4. Replace `YOUR_API_KEY` in `script.js` with your actual Unsplash API key.

### Open the Project:

You can open the project in any web browser directly by opening `index.html`:

1. Right-click on `index.html` and select **"Open with"** your browser.

**(Optional) If you're using a local server for development, you can use simple HTTP servers such as:**

- **Using Python (for Python 3.x):**
   ```bash
   python -m http.server
   ```

- **Using Node.js:**
  ```bash
  npm install -g http-server
  http-server
  ```
### Start searching for images:

- Enter a search term in the input box and hit "Search" to get results from Unsplash.

- Click "Load More" to load additional images.

---

## Project Structure

- The project has the following structure:

```bash
/image-generator
│
├── /css
│   └── style.css           # Styles for the app
│
├── /js
│   └── script.js           # JavaScript functionality to fetch and display images
│
├── /images
│   └── (optional folder for static assets like logos, icons, etc.)
│
├── index.html              # Main HTML file for the app
└── README.md               # This README file
```

---

### Key Files

- **index.html**: This is the main HTML file where the structure of the app is defined. It includes a search form, an image container, and a "Load More" button.

- **style.css**: The stylesheet used to style the app. It includes responsive design rules for mobile and desktop.

- **script.js**: Contains JavaScript code that handles fetching images from the Unsplash API based on the user's search input and displaying them in the image container.

---

## How It Works

### 1. **User Search**:
   
   - The user enters a search query in the input box and submits the form.
   
   - The JavaScript code retrieves the input value and makes a request to the Unsplash API.
   
   - The API returns a set of images based on the query.

### 2. **Displaying Images**:
   
   - The images are dynamically inserted into the page inside the `#imageContainer` element.
   
   - Each image is wrapped in an anchor (`<a>`) tag, linking to the Unsplash page for that image.

### 3. **Pagination**:
   
   - After the initial results are displayed, the "Load More" button becomes visible.
   
   - When clicked, it increments the `page` variable and fetches additional images from the API.
   
   - This process continues as the user clicks "Load More".

### 4. **Responsive Design**:
   
   - The app adjusts its layout based on the screen size using CSS media queries.
   
   - On smaller screens (like tablets or smartphones), the number of images displayed per row is reduced.

---

## Contributing

Contributions to the project are welcome! You can contribute by:

1. **Forking the repository**.

2. **Creating a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
   
3. **Making changes and committing them:**
   ```bash
   git commit -am 'Add new feature'
   ```

4. **Pushing the changes to your forked repository:**
   ```bash
   git push origin feature-branch
   ```

5. **Creating a pull request.**

---

Please ensure that any changes adhere to the project's coding style and pass any relevant tests (if applicable).
