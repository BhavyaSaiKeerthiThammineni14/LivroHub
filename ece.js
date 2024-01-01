const books = [
{ title: "Embedded Systems", author: "Baerkley", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://ptolemy.berkeley.edu/books/leeseshia/releases/LeeSeshia_DigitalV2_2.pdf"},
{ title: "8051 Micro Controller", author: "Subhrata Goshal", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1x0ml0qc7N4tJCFfOVWmZmLSLiJ3jUYTY/view?usp=sharing"},
{ title: "8086 Micro Processor", author: "Baerkley", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wWFQDZBdHnpkTECyqMDjq03sdAFmQQO8/view?usp=sharing"},
{ title: "8086-MICROPROCESSOR",  cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1ufDikxw8CTUs2rR0QsaShoT1Ezdc6wnU/view?usp=sharing"},
{ title: "Mobile Wireless Networks", author: "Subir Kumar Sarkar", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wzmv0rmR0dUMQscqfgGoBs_7IZWSvA7I/view?usp=sharing"},
{ title: "Routing Protocols",  cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wYiLsWV77ymu-2Hkv5ISiTdl6y2rOctx/view?usp=sharing"},
{ title: "Advanced Electrical and Electronics", author: "K.M.Gupta", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1xJJaFG-Go9fFQu7f5Iz-kLJo-jClV9jB/view?usp=sharing"},
{ title: "Analog Electronic Circuits", author: "Dr.Kumar Raja", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wK8WUmwq8FeacrtWRp6Z65PmvOEt3avR/view?usp=sharing"},
{ title: "Foundations of Analog and Digital", author: "Agarwal", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wN-xT7IeDtdZwPpLV2-7jSCsCtXDISUx/view?usp=sharing"},
{ title: "Analog Circuits", author: "Ravi Chandar", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1v_VUs2uUdCzskxLkO16bj0r2LkDWRFWZ/view?usp=sharing"},
{ title: "Analog Communications", author: "P.Sweatha", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1vR3CVvrXlGu44PzZGumXCfmnnRV7zODH/view?usp=sharing"},
{ title: "AVR Micro Controller", author: "Muhammad Ali Mazdi", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1xtySOp5vGczLWdQ1T1O97LrwyhjMSUHJ/view?usp=sharing"},
{ title: "Modern Digital and Analog Communication Systems", author: "B.P.lathi Zhi Ding", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wYa4REPWIbLgQDQ73rWfqVvTfPaKmhat/view?usp=sharing"},
{ title: "Basic Electronics", author: "Baerkley", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1yAJNYAXEmpkQaf6hTRyC53m_gKxESqCG/view?usp=sharing"},
{ title: "VLSI Design", author: "Neil H.E.Weste", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1uqaN19IxWH55csC85H_GMUqRs9tqIylP/view?usp=sharing"},
{ title: "Basics of Communication Engineering", author: "K.A.Navas", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1yFMXwq5bXnZLzQQDbVM9wYT9tVYJLV_j/view?usp=sharing"},
{ title: "Control Systems", author: "Veer Surendra", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1vc62o3EqcJKhXMs8AcU9Gy_k9OBHohS2/view?usp=sharing"},
{ title: "Digital Circuits and Design", author: "Avinash Bhagat", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1y_sxRDivJqjDPEgCM-mR9SgRhSJEwCoo/view?usp=sharing"},
{ title: "Advanced Electronics", author: "K.M.Gupta", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wHzWWCRfnCvI8I_e4AezDpsIZITXagLv/view?usp=sharing"},
{ title: "Control Systems", author: "U.A.Bakshi", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1w0r1GZ1GFPSEr8ioZWXnLWymm1kkZNa7/view?usp=sharing"},
{ title: "Basic Electronics", author: "Debashi's De", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1uuYii3Ne5daYLBVzUdXa9nkypKrtgFnv/view?usp=sharing"},
{ title: "Modern Control Engineering", author: "Katsuhiko Ogata", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1w1fUtd9tls31JcZhaznPags_CRMtytVD/view?usp=sharing"},
{ title: "Antennas and Wave Propagation", author: "Harish", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1wwo6KYrzpbaEWwvhTZkHWc4jGVUQ1T6y/view?usp=sharing"},
{ title: "Electro Magnetic Waves", author: "U.A.Bakshi", cover: "https://ptolemy.berkeley.edu/books/ls_cover_small.jpg", link: "https://drive.google.com/file/d/1vaQge0INcSV908rlTQDPkJ6p6jwqjJlt/view?usp=sharing"},
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
  
