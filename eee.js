const books = [
   { title: "BEEE", author: "V.Hima Bindu", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://www.griet.ac.in/nodes/BEEE.pdf" },
  
   title: "High-Voltage Engineering", author: "M S Naidu and V Kamaraju", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1H7fav0p0ZYRwAeoc96p3pKQNTPADd7wK/view?usp=sharing" },
   
   title: "Power System Engineering", author: "R K Rajput", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1i8MlnQOrze91UmrsTErcJqwodrnAg6FM/view?usp=sharing" },
   
   title: "Linear Integrated Circuit", author: "D. Roy Choudhar", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1AzC6Bwl55vFCaBW27dCYiFgXZaseZC9M/view?usp=sharing" },
   
   title: "Utilisation of Electrical Energy", author: "R K Rajput", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1CcU2Dt1J4iBUm1UxI6rSa73u5zaflp8J/view?usp=sharing" },
   
   title: "Elements of Electromagnetics", author: "Sadiku Matthew", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1NlhN8oZAR6nq8l_rCJ--UOVnyOvj28Pw/view?usp=sharing" },
   
   title: "Advanced-Control-for-Vehicle-Active-Suspension-Systems", author: "Weichao Sun , Huijun Gao & Peng Shi", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1vZVYSiJRKIRhWR9PkDaL0H7NKkSoVu2P/view?usp=sharing" },
   
   title: "Utilisation of Electrical Energy", author: "R K Rajput", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1CcU2Dt1J4iBUm1UxI6rSa73u5zaflp8J/view?usp=sharing" },
   
   title: "Advanced-Control-Systems-Theory-and-Applications", author: "Unknown", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1O7MT6UvlAFYLsxuTBDjM1mABVZ_GrIv-/view?usp=sharing" },
   
   title: "Advanced-Optimization-for-Motion-Control-Systems", author: "Unknown", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1rLnYTqbFrA7GonAAsEn_s901lM8BDhGr/view?usp=sharing" },
   
   title: " Big-Data-Analytics-Methods", author: "Peter Ghavami", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1cjX8jc0N6WPPwN0_Aa3ZiuO5TsU6uTkk/view?usp=sharing" },
   
   title: "Computer-Organization-and-Architecture", author: "Peter Ghavami", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1TT65mBu3i8auRcCIubmITTjtZysJnMIn/view?usp=share_link" },
   
   title: "Digital-Electronics", author: "Betty Lincoln", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1x280svgDQ_I5QDJgrvJZ_ZAxKnDmtEUI/view?usp=sharing" },
   
   title: "Domestic Microgeneration renewable and Distributed Energy Technologies Policies and Economics", author: "Unknown", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/1GE8eAXEXaWry0S3Sbcyv3ERsVkd_nxGw/view?usp=sharing" },
    
   title: "Electric-drives-and-electromechanical-systems-applications-and-control", author: "Unknown", cover: "https://i0.wp.com/easyengineering.net/wp-content/uploads/2020/05/BE8251-Basic-Electrical-and-Electronics-Engineering.jpg?fit=411%2C550&ssl=1", 
   link: "https://drive.google.com/file/d/12c1XUj87TYm67oOLvy6uqQpmV2MqxyXR/view?usp=share_link" },
  
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
