const books = [
  { title: "Embedded Systems", author: "Baerkley", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf"},

  // Add more book objects as needed
];

// Function to display the search results
function displayResults(results) {
  const catalogSection = document.getElementById('catalog');
  catalogSection.innerHTML = ''; // Clear previous results

  if (results.length === 0) {
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = 'No matching books found.';
    catalogSection.appendChild(noResultsMessage);
  } else {
    results.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');

      const coverImage = document.createElement('img');
      coverImage.src = book.cover;
      coverImage.classList.add('book-cover');
      bookCard.appendChild(coverImage);

      const titleElement = document.createElement('h3');
      titleElement.textContent = book.title;
      titleElement.classList.add('book-title');
      bookCard.appendChild(titleElement);

      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${book.author}`;
      authorElement.classList.add('book-author');
      bookCard.appendChild(authorElement);

      const bookLink = document.createElement('a');
      bookLink.href = book.link;
      bookLink.textContent = 'View Book';
      bookCard.appendChild(bookLink);

      catalogSection.appendChild(bookCard);
    });
  }
}

// Function to handle the search
function handleSearch(event) {
  event.preventDefault(); // Prevent form submission to avoid page reload

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const results = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
  });

  displayResults(results);
}

// Attach the handleSearch function to the form's submit event
const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);
