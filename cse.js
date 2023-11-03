{\rtf1\ansi\ansicpg1252\cocoartf2757
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fmodern\fcharset0 CourierNewPSMT;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red255\green255\blue255;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c100000\c100000\c99985;}
\paperw11900\paperh16840\margl1440\margr1440\vieww28600\viewh14680\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
const books = [\
\{ title: "Python", author: "Mark Lutz", cover: "https://www.oreilly.com/api/v2/epubs/9781430206347/files/images/Cover.jpg", link: "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf" \},\
\
\{ title: "DBMS", author: "Raghu Ram Krishna", cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/0B_UNhB7shKrMa2RTUFFaNkdjQWM/view?resourcekey=0-HCtaA5nXhmBHIpXkVMCU4g " \},\
\
\{ title: "Advanced programming in the unix environment", author: \'93W.Richard Stevens & Stephen A Rago\'94, cover: \'93advunix.jpg\'94, link: "https://drive.google.com/file/d/1--3btlSerNmN7RZujFvIIny_BHQb18V9/view?usp=sharing" \},\
\
\{ title: "Architecture of Computer Hardware and System Software", author: \'93Unknown\'94, cover: \'93arc.jpg", link: "https://drive.google.com/file/d/1bCkTugErg3fXrl2GO0mbxGKOPsDa5mpl/view?usp=sharing" \},\
\
\{ title: "Beginning-AngularJS", author: \'93Andrew Grant\'94, cover: \'93begging.jpg", link: "https://drive.google.com/file/d/1BpzZYOOhxQ_7qbNfke5WZjZUS3XmyEly/view?usp=sharing" \},\
\
\{ title: "Blockchain basic-1", author: \'93Daniel Drescher\'94, cover: \'93Blockchain basics.jpg", link: "https://drive.google.com/file/d/1caaDvaQ8aPMkofPJbi749GbIqN4Y6Na5/view?usp=sharing" \},\
\
\{ title: "C Programming Language  -1", author: \'93Dennis M.Ritchie & Brian W. Kernighan\'94, cover: \'93C.jpg", link: "https://drive.google.com/file/d/1o9Eu3UbXEX3pBtY0TDQi68FtdypC97jr/view?usp=sharing" \},\
\
\{ title: "Clean Code-A Handbook of Agile Software Craftsmanship -1", author: \'93Unknown\'94, cover: \'93Clean code.jpg\'94, link: "https://drive.google.com/file/d/1oTG9LD_TsP0YNcrforUdyPKK7H7q0SNG/view?usp=sharing" \},\
\
\{ title: "compilerDesignInC-1", author: \'93Unknown\'94, cover: \'93cd.jpg", link: "https://drive.google.com/file/d/1Ba02TQ8NbwUQ2GabRqHGbrGKMBilsKN_/view?usp=sharing" \},\
\
\{ title: "Compilers- Principles, Techniques, and Tools -1", author: \'93Unknown\'94, cover: \'93cp.jpg", link: "https://drive.google.com/file/d/1fvk_OGMCA_orYdIsGRsAQig1-EL1ogLD/view?usp=sharing" \},\
\
\{ title: "Computer networks\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/1pmcWNlSVFiILSOS6C976F6Bc6B0UDDTf/view?usp=sharing" \},\
\
\{ title: "Data Structures and Algorithms  -1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/13KpVicPsP3nb9PM2-bPRbCM0zPiewZeb/view?usp=sharing" \},\
\
\{ title: "Essential-Math-for-Data-Science-by-Thomas-Nield_bibis.ir\'94, author: \'93Thomas-Nield\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/1yEh10j6rHb0bgdH6dZbMwR0AA6wQtf8S/view?usp=sharing" \},\
\
\{ title: "Flat-1\'94, author: \'93Peter Linz\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/1Fa8NfYPEoqYKeeKFLVTli0_0e4gBhyv4/view?usp=sharing" \},\
\
\{ title: "Internet of things\'94, author: \'93Leon Strous & Vinson G. Cerf\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: "https://drive.google.com/file/d/1uSUNoE8rG-HNsecn5rfdqlHKwXloR9bg/view?usp=sharing" \},\
\
\{ title: "Introduction to Algorithms-1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93\'94https://drive.google.com/file/d/195UjQ9d4ojnobFpsD2LURT_b9TDcIaZ7/view?usp=sharing \},\
\
\{ title: "Introduction to C and software design\'94, author: \'93Tim Bailey\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1plVmP4JPWyAkZXaNPMYACoyOh8gClCRH/view?usp=sharing\'94 \},\
\
\{ title: \'93Introduction to soft computing\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1plVmP4JPWyAkZXaNPMYACoyOh8gClCRH/view?usp=sharing\'94 \},\
\
\{ title: \'93Introduction to Computer Science using python-1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1fggTjw0ohoqvCBgYSqMBLgIbTSgqNG3c/view?usp=sharing\'94 \},\
\
\{ title: \'93Javascript for impatient programmers-1\'94, author: \'93Dr.Axel Rauschmayer\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1xn2XQSc24grvrSGzEttyRJdIe9JCxwJO/view?usp=sharing\'94 \},\
\
\{ title: \'93Machine Learning\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/16iLYFTbtydLlBAM2S7n4DxEhDbnKtjtW/view?usp=sharing\'94 \},\
\
\{ title: \'93Machine Learning For Absolute Beginners-1\'94, author: \'93Oliver Theobald\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1Y0_QDXqCcW5Z_ArI4zss8Bmko_f7Bjq4/view?usp=sharing\'94\},\
\
\{ title: \'93Natural Language Processing with Python\'94, author: \'93Steven Bird & Ewan Klein & Edward Loper\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1Y0_QDXqCcW5Z_ArI4zss8Bmko_f7Bjq4/view?usp=sharing\'94\},\
\
\{ title: \'93Nlp workbook-1\'94, author: \'93Joseph O Connor\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1w9iAddvrs3CeTEAXs6f0aWjxueXXl0TX/view?usp=sharing\'94\},\
\
\{ title: \'93Operating System Concepts -1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/18WXbXOEXAgvZlQPAbcX-PNbEoTchlqjv/view?usp=sharing\'94\},\
\
\{ title: \'93Penetration Testing - A hands-on introduction to Hacking\'94, author: \'93Georgia Weidman\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1xPFzoSapw8MAn5V3bulIe53-CjWXATJ8/view?usp=sharing\'94\},\
\
\{ title: \'93Professional NoSql\'94, author: \'93Shashank Tiwari\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1Ii7XSq4Bfs256WyFJlAk6l2fXfDFcBGt/view?usp=sharing\'94\},\
\
\{ title: \'93Programming Massively Parallel Processors -1\'94, author: \'93David B.Krik & Wen-mei W.Hwu\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/11o0f3v3buoFP7fhjAbsz4Z965sT-TKol/view?usp=sharing\'94\},\
\
\{ title: \'93Software engineering for internet applications-1\'94, author: \'93Eve Andersson & Philip Greenspun & Andrew Grumet\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/18kXN3cFPRyzrSM9Uyr35hLw4h3H8vVjr/view?usp=sharing\'94\},\
\
\{ title: \'93Programming Massively Parallel Processors\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/11o0f3v3buoFP7fhjAbsz4Z965sT-TKol/view?usp=sharing\'94\},\
\
\{ title: \'93Structure and Interpretation of Computer program-1-1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1bGggnE3aF04tWrPjpSJVUBm8p3BM8fMY/view?usp=sharing\'94\},\
\
\{ title: \'93The Hidden Language of Computer Hardware and Software -1-1\'94, author: \'93Charles Petzold\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1bK0p9gcUqzIRMq13M44jCLpUWgV7tVks/view?usp=sharing\'94\},\
\
\{ title: \'93Structure and Interpretation of Computer program-1-1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1bGggnE3aF04tWrPjpSJVUBm8p3BM8fMY/view?usp=sharing\'94\},\
\
\{ title: \'93Transaction Processing  -1-1\'94, author: \'93Unknown\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1bJJDcC8VjV9A6j7byE39fSrB2qtxDVwU/view?usp=sharing\'94\},\
\
\{ title: \'93Write Modern Web Apps with the MEAN Stack-1\'94, author: \'93Jeff Dickey\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1bP2Fk_mHnVI0RwZm5NOdrLhgx_MCOaww/view?usp=sharing\'94\},\
\
\{ title: \'93Writing Secure Code-1\'94, author: \'93Michael Howard and David LeBlanc\'94, cover: "https://pictures.abebooks.com/isbn/9780070507753-us-300.jpg", link: \'93https://drive.google.com/file/d/1bTdbXniav1spdY1_uzyIpxGDZ7zaSDOo/view?usp=sharing\'94\},\
];\
// Function to display the search results\
function displayResults(results) \{\
  const catalogSection = document.getElementById('catalog');\
  catalogSection.innerHTML = ''; // Clear previous results\
\
  if (results.length === 0) \{\
    const noResultsMessage = document.createElement('p');\
    noResultsMessage.textContent = 'No matching books found.';\
    catalogSection.appendChild(noResultsMessage);\
  \} else \{\
    results.forEach(book => \{\
      const bookCard = document.createElement('div');\
      bookCard.classList.add('book-card');\
\
      const coverImage = document.createElement('img');\
      coverImage.src = book.cover;\
      coverImage.classList.add('book-cover');\
      bookCard.appendChild(coverImage);\
\
      const titleElement = document.createElement('h3');\
      titleElement.textContent = book.title;\
      titleElement.classList.add('book-title');\
      bookCard.appendChild(titleElement);\
\
      const authorElement = document.createElement('p');\
      authorElement.textContent = `Author: $\{book.author\}`;\
      authorElement.classList.add('book-author');\
      bookCard.appendChild(authorElement);\
\
      const bookLink = document.createElement('a');\
      bookLink.href = book.link;\
      bookLink.textContent = 'View Book';\
      bookCard.appendChild(bookLink);\
\
      catalogSection.appendChild(bookCard);\
    \});\
  \}\
\}\
\
// Function to handle the search\
function handleSearch(event) \{\
  event.preventDefault(); // Prevent form submission to avoid page reload\
\
  const searchInput = document.getElementById('searchInput');\
  const searchTerm = searchInput.value.toLowerCase();\
\
  const results = books.filter(book => \{\
    return book.title.toLowerCase().includes(searchTerm) || book.author.toLowerCase().includes(searchTerm);\
  \});\
\
  displayResults(results);\
\}\
\
// Attach the handleSearch function to the form's submit event\
const searchForm = document.getElementById('searchForm');\
searchForm.addEventListener('submit', handleSearch);}