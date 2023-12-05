const testBooks = [
  {
    title: "The Hunger Games",
    pages: 374,
    author: "Suzanne Collins",
    description: "Set in a dark vision of the near future...",
  },
  {
    title: "Jonathan Livingston Seagull",
    pages: 112,
    author: "Richard Bach",
    description: "The book tells the story of Jonathan Livingston...",
  },
];

const testDictionary = {
  "Noah Yuval Harari": [
    ["Sapiens: A Brief History of Humankind", 443],
    ["Homo Deus: A Brief History of Tomorrow", 489],
  ],
  "Richard Dawkins": [
    ["The Selfish Gene", 496],
    ["The Greatest Show on Earth", 528],
  ],
};

const flatTestDictionary = {};
for (key in testDictionary) {
  flatTestDictionary[key] = structuredClone(testDictionary[key]).flat();
}

describe("Iteration 1 | Books Array", () => {
  describe("Array 'booksArray'", () => {
    it("should be an array", () => {
      expect(booksArray).toBeDefined();
      expect(Array.isArray(booksArray)).toBe(true);
    });

    it("should have 5 books", () => {
      expect(booksArray.length).toEqual(5);
    });
  });

  describe("- Book Objects", () => {
    it('should have a string in property "title"', () => {
      for (let book of booksArray) expect(typeof book.title).toBe("string");
    });

    it('should have a string in property "pages"', () => {
      for (let book of booksArray) expect(typeof book.pages).toBe("number");
    });

    it('should have a string in property "author"', () => {
      for (let book of booksArray) expect(typeof book.author).toBe("string");
    });

    it('should have an object in property "details"', () => {
      for (let book of booksArray) expect(typeof book.details).toBe("object");
    });
  });
});

describe("Iteration 2 | Book Details", () => {
  describe("Function 'getBookDetails'", () => {
    it("should be declared", () => {
      expect(getBookDetails).toBeDefined();
      expect(typeof getBookDetails).toBe("function");
    });

    it("should receive one argument - a 'book' object", () => {
      expect(getBookDetails.length).toEqual(1);
    });

    it('should return a string in the format "TITLE - AUTHOR - PAGES pages"', () => {
      const book1 = testBooks[0];
      const book2 = testBooks[1];
      
      expect(typeof getBookDetails(testBooks[0])).toBe("string");
      expect(getBookDetails(book1)).toBe(
        `${book1.title} - ${book1.author} - ${book1.pages} pages`
      );
      expect(getBookDetails(book2)).toBe(
        `${book2.title} - ${book2.author} - ${book2.pages} pages`
      );
    });
  });
});

describe("Iteration 3 | Delete Language", () => {
  describe("Array 'booksArray'", () => {
    it("should be an array", () => {
      expect(booksArray).toBeDefined();
      expect(Array.isArray(booksArray)).toBe(true);
    });

    it("should have 5 books", () => {
      expect(booksArray.length).toEqual(5);
    });
  });

  describe("- Book objects", () => {
    it('should not contain a property "details.language"', () => {
      for (let book of booksArray) {
        expect(book.details).toBeDefined();
        expect(book.details.language).toBeUndefined();
      }
    });
  });
});

describe("Iteration 4 | Estimated Reading Time", () => {
  describe("Array 'booksArray'", () => {
    it("should be an array", () => {
      expect(booksArray).toBeDefined();
      expect(Array.isArray(booksArray)).toBe(true);
    });

    it("should have 5 books", () => {
      expect(booksArray.length).toEqual(5);
    });
  });

  describe("- Book Objects", () => {
    it("should have a property 'readingTime'", () => {
      for (let book of booksArray) expect(book.readingTime).toBeDefined();
    });

    it("should have a number in property 'readingTime'", () => {
      for (let book of booksArray)
        expect(typeof book.readingTime).toBe("number");
    });

    it("should have the property 'readingTime' with the number of minutes it takes to read the book", () => {
      for (let book of booksArray)
        expect(book.readingTime).toBe(
          Math.ceil(book.pages * 500 / 90)
        );
    });
  });
});

describe("BONUS: Iteration 5 | Books Dictionary", () => {
  describe("Function 'booksByAuthor'", () => {
    it("should be declared", () => {
      expect(booksByAuthor).toBeDefined();
      expect(typeof booksByAuthor).toBe("function");
    });

    it("should receive one argument - a 'dictionary' object", () => {
      expect(booksByAuthor.length).toEqual(1);
    });

    it("should return an array", () => {
      expect(Array.isArray(booksByAuthor(testDictionary))).toBe(true);
    });

    it("should return array of book objects", () => {
      const booksResult = booksByAuthor(testDictionary);
      expect(booksResult.length).toEqual(4);

      for (book of booksResult) {
        expect(typeof book).toBe("object");
        expect(Array.isArray(book)).toBe(false, "-> The returned array should contain objects, not arrays");

        expect(book.title).toBeDefined();
        expect(typeof book.title).toBe("string", '-> The returned objects should have a string property "title"');
        
        expect(book.pages).toBeDefined();
        expect(typeof book.pages).toBe("number", '-> The returned objects should have a string property "pages"');

        expect(book.author).toBeDefined();
        expect(typeof book.author).toBe("string", '-> The returned objects should have a string property "author"');

      }
    });    

  });
});

describe("BONUS: Iteration 6 | Average Page Count", () => {
  describe("Function 'averagePageCount'", () => {
    it("should be declared", () => {
      expect(averagePageCount).toBeDefined();
      expect(typeof averagePageCount).toBe("function");
    });

    it("should receive one argument - a 'books' array", () => {
      expect(averagePageCount.length).toEqual(1);
    });

    it("should return a number", () => {
      expect(typeof averagePageCount(testBooks)).toBe("number");
    });

    it("should return the average page count number for all the books", () => {
      const result = averagePageCount(testBooks);
      const totalPages = testBooks.reduce((acc, book) => acc + book.pages, 0);
      const averagePages = totalPages / testBooks.length;

      expect(result).toBe(averagePages);
    });    

  });
});