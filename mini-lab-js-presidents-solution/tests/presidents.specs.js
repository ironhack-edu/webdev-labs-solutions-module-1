// Iteration 1 | getNames()
describe("Function getNames()", () => {  
  it("should take 1 argument (presidents)", () => {
    expect(typeof getNames).toEqual("function");
    expect(getNames.length).toEqual(1);
  });

  it("should use the 'map()' method to iterate over the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const mapSpy = spyOn(testPresidents, "map");

    getNames(testPresidents);
    expect(mapSpy).toHaveBeenCalled();
    expect(mapSpy).toHaveBeenCalledWith(jasmine.any(Function));
  });  

  it("should return an array", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const result = getNames(testPresidents);

    expect(result).toEqual(jasmine.any(Array));
  });


  it("should return an array of strings with the names of the presidents", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const result = getNames(testPresidents);

    expect(result).toEqual([
      "John F. Kennedy",
      "Ronald Reagan",
      "John Quincy Adams",
      "George Washington",
    ]);

  });
});

// Iteration 2 | getNamesAndParty()
describe("Function getNamesAndParty()", () => {
  it("should take 1 argument (presidents)", () => {
    expect(typeof getNamesAndParty).toEqual("function");
    expect(getNamesAndParty.length).toEqual(1);
  });

  it("should use the 'map()' method to iterate over the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const mapSpy = spyOn(testPresidents, "map");

    getNamesAndParty(testPresidents);
    expect(mapSpy).toHaveBeenCalled();
    expect(mapSpy).toHaveBeenCalledWith(jasmine.any(Function));
  });

  it("should return an array", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const result = getNamesAndParty(testPresidents);

    expect(result).toEqual(jasmine.any(Array));
  });

  it("should return an array of objects with the name and party of each president", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", id: 1, birthYear: 1992 },
      { name: "Ronald Reagan", party: "Republican", id: 2, birthYear: 1998 },
      { name: "John Quincy Adams", party: "Federalist", id: 3, birthYear: 1940 },
    ];

    const result = getNamesAndParty(testPresidents);

    expect(result).toEqual([
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
    ]);
  });
});

// Iteration 3 | getDemocraticPresidents()
describe("Function getDemocraticPresidents()", () => {  
  it("should take 1 argument (presidents)", () => {
    expect(typeof getDemocraticPresidents).toEqual("function");
    expect(getDemocraticPresidents.length).toEqual(1);
  });

  it("should use the 'filter()' method to iterate over the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "George Washington", party: null },
      { name: "Woodrow Wilson", party: "Democratic" },
    ];

    const filterSpy = spyOn(testPresidents, "filter");

    getDemocraticPresidents(testPresidents);
    expect(filterSpy).toHaveBeenCalled();
    expect(filterSpy).toHaveBeenCalledWith(jasmine.any(Function));
  });

  it("should return an array", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "George Washington", party: null },
      { name: "Woodrow Wilson", party: "Democratic" },
    ];

    const result = getDemocraticPresidents(testPresidents);

    expect(result).toEqual(jasmine.any(Array));
  });

  it("should return an array of objects with only the presidents who belonged to the Democratic party", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "George Washington", party: null },
      { name: "Woodrow Wilson", party: "Democratic" },
    ];

    const result = getDemocraticPresidents(testPresidents);

    expect(result).toEqual([
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Woodrow Wilson", party: "Democratic" },
    ]);
  });
});


// Iteration 4 | getAffiliatedPresidents()
describe("Function getAffiliatedPresidents()", () => {
  it("should take 1 argument (presidents)", () => {
    expect(typeof getAffiliatedPresidents).toEqual("function");
    expect(getAffiliatedPresidents.length).toEqual(1);
  });

  it("should use the 'filter()' method to iterate over the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const filterSpy = spyOn(testPresidents, "filter");

    getAffiliatedPresidents(testPresidents);
    expect(filterSpy).toHaveBeenCalled();
    expect(filterSpy).toHaveBeenCalledWith(jasmine.any(Function));
  });

  it("should return an array", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
      { name: "John Quincy Adams", party: "Federalist" },
      { name: "George Washington", party: null },
    ];

    const result = getAffiliatedPresidents(testPresidents);

    expect(result).toEqual(jasmine.any(Array));
  });

  it("should return an array of objects with only the presidents who were affiliated with a political party", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "John Tyler", party: null },
      { name: "George Washington", party: null },
      { name: "Ronald Reagan", party: "Republican" },
    ];

    const result = getAffiliatedPresidents(testPresidents);

    expect(result).toEqual([
      { name: "John F. Kennedy", party: "Democratic" },
      { name: "Ronald Reagan", party: "Republican" },
    ]);
  });
});

// Iteration 5 | countYearsInOffice()
describe("Function countYearsInOffice()", () => {
  it("should take 1 argument (presidents)", () => {
    expect(typeof countYearsInOffice).toEqual("function");
    expect(countYearsInOffice.length).toEqual(1);
  });

  it("should use the 'reduce()' method to iterate over the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", tookOffice: 1961, leftOffice: 1963 }, // 2 years
      { name: "Ronald Reagan", party: "Republican", tookOffice: 1981, leftOffice: 1989 }, // 8 years
    ];

    const reduceSpy = spyOn(testPresidents, "reduce").and.returnValue(10);

    const result = countYearsInOffice(testPresidents);
    expect(reduceSpy).toHaveBeenCalled();
    expect(reduceSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Number));
    expect(result).toEqual(10);
    
  });

  it("should return a number", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", tookOffice: 1961, leftOffice: 1963 },
      { name: "Ronald Reagan", party: "Republican", tookOffice: 1981, leftOffice: 1989 },
      { name: "John Quincy Adams", party: "Federalist", tookOffice: 1797, leftOffice: 1801 },
      { name: "George Washington", party: null, tookOffice: 1789, leftOffice: 1797 },
    ];

    const result = countYearsInOffice(testPresidents);

    expect(result).toEqual(jasmine.any(Number));
  });

  it("should return the total years that all the presidents served in office", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", tookOffice: 1961, leftOffice: 1963 }, // 2 years
      { name: "Ronald Reagan", party: "Republican", tookOffice: 1981, leftOffice: 1989 }, // 8 years
    ];

    const result = countYearsInOffice(testPresidents);

    expect(result).toEqual(10);
  });

  it("should skip the presidents who are still in office (leftOffice is null)", () => {
    const testPresidents = [
      { name: "George Washington", party: null, tookOffice: 1789, leftOffice: 1797 }, // 8 years
      { name: "John F. Kennedy", party: "Democratic", tookOffice: 1961, leftOffice: 1963 }, // 2 years
      { name: "Ronald Reagan", party: "Republican", tookOffice: 1981, leftOffice: 1989 }, // 8 years
      { name: "Joseph Biden", party: "Democratic", tookOffice: 2021, leftOffice: null }, // still in office
    ];

    const result = countYearsInOffice(testPresidents);

    expect(result).toEqual(18);
  });
});


// Iteration 6 | getPresidentsByParty()
describe("Function countRepublicanPresidents()", () => {
  it("should take 1 argument (presidents)", () => {
    expect(typeof countRepublicanPresidents).toEqual("function");
    expect(countRepublicanPresidents.length).toEqual(1);
  });

  it("should use the 'reduce()' method to iterate over the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", tookOffice: 1961, leftOffice: 1963 },
      { name: "Ronald Reagan", party: "Republican", tookOffice: 1981, leftOffice: 1989 },
      { name: "John Quincy Adams", party: "Federalist", tookOffice: 1797, leftOffice: 1801 },
      { name: "George W. Bush", party: "Republican", tookOffice: 2001, leftOffice: 2009 },
      { name: "Richard Nixon", party: "Republican", tookOffice: 1969, leftOffice: 1974 },
    ];

    const reduceSpy = spyOn(testPresidents, "reduce").and.returnValue(3);

    const result = countRepublicanPresidents(testPresidents);
    expect(reduceSpy).toHaveBeenCalled();
    expect(reduceSpy).toHaveBeenCalledWith(jasmine.any(Function), jasmine.any(Number));
    expect(result).toEqual(3);
  });

  it("should return a number", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", tookOffice: 1961, leftOffice: 1963 },
      { name: "Ronald Reagan", party: "Republican", tookOffice: 1981, leftOffice: 1989 },
      { name: "John Quincy Adams", party: "Federalist", tookOffice: 1797, leftOffice: 1801 },
      { name: "George Washington", party: null, tookOffice: 1789, leftOffice: 1797 },
    ];

    const result = countRepublicanPresidents(testPresidents);

    expect(result).toEqual(jasmine.any(Number));
  });

  it("should return the total number of presidents who belonged to the Republican party", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic"},
      { name: "Ronald Reagan", party: "Republican"},
      { name: "Ulysses S. Grant", party: "Republican"},
      { name: "George Washington", party: null },
      { name: "Gerald Ford", party: "Republican" },
      { name: "Richard Nixon", party: "Republican"}
    ];

    const result = countRepublicanPresidents(testPresidents);

    expect(result).toEqual(4);
  });
});

// Iteration 7: Sort Presidents by Birth Year - `sort()`
// The sort method uses the Unicode code point value of each element to compare them, meaning that it sorts the elements alphabetically. To sort numbers, you need to pass a function with conditional logic that returns -1, 1, or 0 and specifies how to sort the numbers.
//
// Implement the function `sortPresidentsByBirthYear()` that takes the presidents array as an argument. The function should use the `.sort()` method to sort the presidents array by birth year, from oldest to youngest.
// The function should then return the sorted array of presidents.
describe("Function sortPresidentsByBirthYear()", () => {
  it("should take 1 argument (presidents)", () => {
    expect(typeof sortPresidentsByBirthYear).toEqual("function");
    expect(sortPresidentsByBirthYear.length).toEqual(1);
  });

  it("should call the 'sort()' method on the presidents array passed as argument", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", birthYear: 1917 },
      { name: "Ronald Reagan", party: "Republican", birthYear: 1911 },
      { name: "John Quincy Adams", party: "Federalist", birthYear: 1767 },
      { name: "George Washington", party: null, birthYear: 1732 },
    ];

    const sortSpy = spyOn(testPresidents, "sort");

    sortPresidentsByBirthYear(testPresidents);
    expect(sortSpy).toHaveBeenCalled();
    expect(sortSpy).toHaveBeenCalledWith(jasmine.any(Function));
  });

  it("should return an array", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", birthYear: 1917 },
      { name: "Ronald Reagan", party: "Republican", birthYear: 1911 },
      { name: "John Quincy Adams", party: "Federalist", birthYear: 1767 },
      { name: "George Washington", party: null, birthYear: 1732 },
    ];

    const result = sortPresidentsByBirthYear(testPresidents);

    expect(result).toEqual(jasmine.any(Array));
  });

  it("should return an array of presidents sorted by birth year, from oldest to youngest", () => {
    const testPresidents = [
      { name: "John F. Kennedy", party: "Democratic", birthYear: 1917 },
      { name: "Ronald Reagan", party: "Republican", birthYear: 1911 },
      { name: "John Quincy Adams", party: "Federalist", birthYear: 1767 },
      { name: "George Washington", party: null, birthYear: 1732 },
    ];

    const result = sortPresidentsByBirthYear(testPresidents);

    expect(result).toEqual([
      { name: "George Washington", party: null, birthYear: 1732 },
      { name: "John Quincy Adams", party: "Federalist", birthYear: 1767 },
      { name: "Ronald Reagan", party: "Republican", birthYear: 1911 },
      { name: "John F. Kennedy", party: "Democratic", birthYear: 1917 },
    ]);
  });
});
