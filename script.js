const books = [
  
  { title: "BEEE", author: "V.Hima Bindu", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", link: "https://www.griet.ac.in/nodes/BEEE.pdf" },
  { title: "Fluid Mechanics", author: "Frank M.White", cover: "https://0.academia-photos.com/attachment_thumbnails/92746734/mini_magick20221020-1-1o6rcrj.png?1666275372", link: "https://warwick.ac.uk/fac/sci/eng/staff/ymc/members/former/azimi/project/references/white_frank_m._-_fluid_mechanics_4th_ed_mcgraw_hill.pdf" },
   { title: "DBMS", author: "Raghu Ram Krishna", cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/0B_UNhB7shKrMa2RTUFFaNkdjQWM/view?resourcekey=0-HCtaA5nXhmBHIpXkVMCU4g " },
  { title: "Python", author: "Mark Lutz", cover: "https://www.oreilly.com/api/v2/epubs/9781430206347/files/images/Cover.jpg", link: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf" },
  { title: "Engineering Drawing", author: "N.D.Bhatt", cover: "https://images-eu.ssl-images-amazon.com/images/I/91pcwzxkGYL._AC_UL600_SR600,600_.jpg", link: "https://soaneemrana.com/onewebmedia/ENGINEERING%20DRAWING%20BY%20N.D%20BHATT.pdf" },
  { title: "Highway Engineering", author: "Khanna", cover: "https://m.media-amazon.com/images/I/515Ynpl02GL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_PIStarRatingFOURANDHALF%2CBottomLeft%2C360%2C-6_SR600%2C315_ZA22%2C445%2C290%2C400%2C400%2CAmazonEmberBold%2C12%2C4%2C0%2C0%2C5_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg", link: "https://civilazmaterial.files.wordpress.com/2017/10/highway-engineering-khanna-and-justo.pdf" },
   { title: "Embedded Systems", author: "Baerkley", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf"},
]
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


// Event listener for search form submission
document.getElementById('searchForm').addEventListener('submit', handleSearch);

// Function to show/hide the About Team details
function toggleAboutTeam() {
  const aboutTeam = document.querySelector('.about-team');
  aboutTeam.classList.toggle('show');
}

// Event listener for toggling About Team details
document.querySelector('footer').addEventListener('click', toggleAboutTeam);

const feedbackIcons = document.querySelectorAll('.feedback-icon');
const feedbackText = document.querySelector('.feedback-text');

feedbackIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const rating = icon.getAttribute('data-rating');
    feedbackText.textContent = `Thank you for your ${rating} feedback!`;
    feedbackIcons.forEach(otherIcon => otherIcon.classList.remove('selected'));
    icon.classList.add('selected');
  });
});
