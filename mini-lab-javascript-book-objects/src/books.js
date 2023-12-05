// Iteration 1 | Create Books Array

const booksArray = [
  {
    title: "The Old Man and the Sea",
    pages: 128,
    author: "Ernest Hemingway",
    details: {
      language: "English",
      description:
        "One of Hemingway's most famous works, it tells the story of Santiago...",
    },
  },

  {
    title: "The Airbnb Story",
    pages: 256,
    author: "Leight Gallagher",
    details: {
      language: "English",
      description:
        "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
    },
  },
  {
    title: "Pride and Prejudice",
    pages: 279,
    author: "Jane Austen",
    details: {
      language: "English",
      description: "One of the most popular novels in the English language...",
    },
  },
  {
    title: "Educated - A Memoir",
    pages: 352,
    author: "Tara Westover",
    details: {
      language: "English",
      description:
        "Educated is an account of the struggle for self-invention...",
    },
  },
  {
    title: "The Art of Learning",
    pages: 288,
    author: "Josh Waitzkin",
    details: {
      language: "English",
      description:
        "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
    },
  },
];



// Iteration 2 | Book Details
function getBookDetails(book) {
  return `${book.title} - ${book.author} - ${book.pages} pages`;
}



// Iteration 3 | Delete Lanuguage
booksArray.forEach((book) => {
  delete book.details.language;
});



// Iteration 4 | Estimated Reading Time
booksArray.forEach((book) => {
  book.readingTime = Math.ceil((book.pages * 500) / 90);
});



// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
  "J. K. Rowling": [
    ["Harry Potter and the Philosopher's Stone", 223],
    ["Harry Potter and the Chamber of Secrets", 251],
    ["Harry Potter and the Prisoner of Azkaban", 317],
    ["Harry Potter and the Goblet of Fire", 636],
  ],
  "Neal Stephenson": [
    ["Cryptonomicon", 928],
    ["Anathem", 1008],
    ["Fall; or, Dodge in Hell", 896],
  ],
  "Malcolm Gladwell": [
    ["Outliers", 320],
    ["Blink", 287],
  ],
};

function booksByAuthor(dictionary){
  // Your code here:
  let result = []

  for (author in dictionary) {
    const authorBooks = dictionary[author];

    authorBooks.forEach((item) => {
      const title = item[0];
      const pages = item[1];

      const newBook = {
        title: title,
        pages: pages,
        author: author
      };

      result.push(newBook);
    })
  };

  return result;
}


// Bonus: Iteration 6 | Average Reading Time
function averagePageCount(books) {
  let totalPages = 0;

  console.log('books', books)


  for (let i = 0; i < books.length; i++) {
    totalPages += books[i].pages;
  }

  const averagePages = totalPages / books.length;
  return averagePages;
}