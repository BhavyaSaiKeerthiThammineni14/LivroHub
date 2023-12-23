const books = [
  { title: "BEEE", author: "V.Hima Bindu", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", link: "https://www.griet.ac.in/nodes/BEEE.pdf" },
  { title: "Fluid Mechanics", author: "Frank M.White", cover: "https://0.academia-photos.com/attachment_thumbnails/92746734/mini_magick20221020-1-1o6rcrj.png?1666275372", link: "https://warwick.ac.uk/fac/sci/eng/staff/ymc/members/former/azimi/project/references/white_frank_m._-_fluid_mechanics_4th_ed_mcgraw_hill.pdf" },
  // ... (other book entries)
];

function displayResults(results) {
  const catalogSection = document.getElementById('catalog');
  catalogSection.innerHTML = '';

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

function handleSearch(event) {
  event.preventDefault();

  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  const results = books.filter(book => {
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);
  });

  displayResults(results);
}

const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', handleSearch);

const feedbackIcons = document.querySelectorAll('.feedback-icon');
feedbackIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const rating = icon.getAttribute('data-rating');
    handleFeedback(rating);

    feedbackIcons.forEach(otherIcon => otherIcon.classList.remove('selected'));
    icon.classList.add('selected');
  });
});

function handleFeedback(rating) {
  const feedbackText = document.querySelector('.feedback-text');
  const contactMessage = " Please contact us and give your feedback!";

  switch (rating) {
    case 'happy':
      feedbackText.textContent = `Thank You for your happy feedback. It makes us feel better and happy to give a good experience.${contactMessage}`;
      break;
    case 'neutral':
      feedbackText.textContent = `Thanks for the average feedback. We will surely try to give a good experience.${contactMessage}`;
      break;
    case 'sad':
      feedbackText.textContent = `Thank You for the sad feedback. We are so sorry for the inconvenience. We make sure that your next visit makes you happy.${contactMessage}`;
      break;
    default:
      break;
  }
}
