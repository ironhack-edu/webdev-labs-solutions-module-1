// sort numbers
// [3,1,2].sort((a, b) => {return a - b})
// [3,1,2].sort((a, b) => a - b)
// ["b","a","c"].sort((a, b) => a.localeCompare(b))
// [{name: "bob", score: 5},{name: "sarah", score: 5}].sort((a, b) => {a.name.localeCompare(b.name)})

// map example :
// [{name: "bob", score: 5},{name: "sarah", score: 5}].map((e) => {
// e.score += 5;
// return e
// })
// [{name: "bob", score: 10},{name: "sarah", score: 10}]
// let totalScore = 0;
// [{name: "bob", score: 5},{name: "sarah", score: 5}].forEach((e) => {
// totalScore += e.score;
// })
// [1,2,3,4,5]
// [1,2,3,4,5].reduce((acc, curr, idx, array)=>{ return acc + curr }, 0)

const presidents = [
  {
    id: 1,
    name: "George Washington",
    birthYear: 1732,
    deathYear: 1799,
    tookOffice: 1789,
    leftOffice: 1797,
    party: null, // No party - Unaffiliated
  },
  {
    id: 2,
    name: "John Quincy Adams",
    birthYear: 1735,
    deathYear: 1826,
    tookOffice: 1797,
    leftOffice: 1801,
    party: "Federalist",
  },
  {
    id: 3,
    name: "Thomas Jefferson",
    birthYear: 1743,
    deathYear: 1826,
    tookOffice: 1801,
    leftOffice: 1809,
    party: "Democratic-Republican",
  },
  {
    id: 4,
    name: "James Madison",
    birthYear: 1751,
    deathYear: 1836,
    tookOffice: 1809,
    leftOffice: 1817,
    party: "Democratic-Republican",
  },
  {
    id: 5,
    name: "James Monroe",
    birthYear: 1758,
    deathYear: 1831,
    tookOffice: 1817,
    leftOffice: 1825,
    party: "Democratic-Republican",
  },
  {
    id: 6,
    name: "John Quincy Adams",
    birthYear: 1767,
    deathYear: 1848,
    tookOffice: 1825,
    leftOffice: 1829,
    party: "Democratic-Republican",
  },
  {
    id: 7,
    name: "Andrew Jackson",
    birthYear: 1767,
    deathYear: 1845,
    tookOffice: 1829,
    leftOffice: 1837,
    party: "Democratic",
  },
  {
    id: 8,
    name: "Martin Van Buren",
    birthYear: 1782,
    deathYear: 1862,
    tookOffice: 1837,
    leftOffice: 1841,
    party: "Democratic",
  },
  {
    id: 9,
    name: "William Henry Harrison",
    birthYear: 1773,
    deathYear: 1841,
    tookOffice: 1841,
    leftOffice: 1841,
    party: "Whig",
  },
  {
    id: 10,
    name: "John Tyler",
    birthYear: 1790,
    deathYear: 1862,
    tookOffice: 1841,
    leftOffice: 1845,
    party: null,
  },
  {
    id: 11,
    name: "James K. Polk",
    birthYear: 1795,
    deathYear: 1849,
    tookOffice: 1845,
    leftOffice: 1849,
    party: "Democratic",
  },
  {
    id: 12,
    name: "Zachary Taylor",
    birthYear: 1784,
    deathYear: 1850,
    tookOffice: 1849,
    leftOffice: 1850,
    party: "Whig",
  },
  {
    id: 13,
    name: "Millard Fillmore",
    birthYear: 1800,
    deathYear: 1874,
    tookOffice: 1850,
    leftOffice: 1853,
    party: "Whig",
  },
  {
    id: 14,
    name: "Franklin Pierce",
    birthYear: 1804,
    deathYear: 1869,
    tookOffice: 1853,
    leftOffice: 1857,
    party: "Democratic",
  },
  {
    id: 15,
    name: "James Buchanan",
    birthYear: 1791,
    deathYear: 1868,
    tookOffice: 1857,
    leftOffice: 1861,
    party: "Democratic",
  },
  {
    id: 16,
    name: "Abraham Lincoln",
    birthYear: 1809,
    deathYear: 1865,
    tookOffice: 1861,
    leftOffice: 1865,
    party: "Republican",
  },
  {
    id: 17,
    name: "Andrew Johnson",
    birthYear: 1808,
    deathYear: 1875,
    tookOffice: 1865,
    leftOffice: 1869,
    party: "Democratic",
  },
  {
    id: 18,
    name: "Ulysses S. Grant",
    birthYear: 1822,
    deathYear: 1885,
    tookOffice: 1869,
    leftOffice: 1877,
    party: "Republican",
  },
  {
    id: 19,
    name: "Rutherford B. Hayes",
    birthYear: 1822,
    deathYear: 1893,
    tookOffice: 1877,
    leftOffice: 1881,
    party: "Republican",
  },
  {
    id: 20,
    name: "James A. Garfield",
    birthYear: 1831,
    deathYear: 1881,
    tookOffice: 1881,
    leftOffice: 1881,
    party: "Republican",
  },
  {
    id: 21,
    name: "Chester A. Arthur",
    birthYear: 1829,
    deathYear: 1886,
    tookOffice: 1881,
    leftOffice: 1885,
    party: "Republican",
  },
  {
    id: 22,
    name: "Grover Cleveland",
    birthYear: 1837,
    deathYear: 1908,
    tookOffice: 1885,
    leftOffice: 1889,
    party: "Democratic",
  },
  {
    id: 23,
    name: "Benjamin Harrison",
    birthYear: 1833,
    deathYear: 1901,
    tookOffice: 1889,
    leftOffice: 1893,
    party: "Republican",
  },
  {
    id: 24,
    name: "Grover Cleveland",
    birthYear: 1837,
    deathYear: 1908,
    tookOffice: 1893,
    leftOffice: 1897,
    party: "Democratic",
  },
  {
    id: 25,
    name: "William McKinley",
    birthYear: 1843,
    deathYear: 1901,
    tookOffice: 1897,
    leftOffice: 1901,
    party: "Republican",
  },
  {
    id: 26,
    name: "Theodore Roosevelt",
    birthYear: 1858,
    deathYear: 1919,
    tookOffice: 1901,
    leftOffice: 1909,
    party: "Republican",
  },
  {
    id: 27,
    name: "William Howard Taft",
    birthYear: 1857,
    deathYear: 1930,
    tookOffice: 1909,
    leftOffice: 1913,
    party: "Republican",
  },
  {
    id: 28,
    name: "Woodrow Wilson",
    birthYear: 1856,
    deathYear: 1924,
    tookOffice: 1913,
    leftOffice: 1921,
    party: "Democratic",
  },
  {
    id: 29,
    name: "Warren G. Harding",
    birthYear: 1865,
    deathYear: 1923,
    tookOffice: 1921,
    leftOffice: 1923,
    party: "Republican",
  },
  {
    id: 30,
    name: "Calvin Coolidge",
    birthYear: 1872,
    deathYear: 1933,
    tookOffice: 1923,
    leftOffice: 1929,
    party: "Republican",
  },
  {
    id: 31,
    name: "Herbert Hoover",
    birthYear: 1874,
    deathYear: 1964,
    tookOffice: 1929,
    leftOffice: 1933,
    party: "Republican",
  },
  {
    id: 32,
    name: "Franklin D. Roosevelt",
    birthYear: 1882,
    deathYear: 1945,
    tookOffice: 1933,
    leftOffice: 1945,
    party: "Democratic",
  },
  {
    id: 33,
    name: "Harry S. Truman",
    birthYear: 1884,
    deathYear: 1972,
    tookOffice: 1945,
    leftOffice: 1953,
    party: "Democratic",
  },
  {
    id: 34,
    name: "Dwight D. Eisenhower",
    birthYear: 1890,
    deathYear: 1969,
    tookOffice: 1953,
    leftOffice: 1961,
    party: "Republican",
  },
  {
    id: 35,
    name: "John F. Kennedy",
    birthYear: 1917,
    deathYear: 1963,
    tookOffice: 1961,
    leftOffice: 1963,
    party: "Democratic",
  },
  {
    id: 36,
    name: "Lyndon B. Johnson",
    birthYear: 1908,
    deathYear: 1973,
    tookOffice: 1963,
    leftOffice: 1969,
    party: "Democratic",
  },
  {
    id: 37,
    name: "Richard Nixon",
    birthYear: 1913,
    deathYear: 1994,
    tookOffice: 1969,
    leftOffice: 1974,
    party: "Republican",
  },
  {
    id: 38,
    name: "Gerald Ford",
    birthYear: 1913,
    deathYear: 2006,
    tookOffice: 1974,
    leftOffice: 1977,
    party: "Republican",
  },
  {
    id: 39,
    name: "Jimmy Carter",
    birthYear: 1924,
    deathYear: null,
    tookOffice: 1977,
    leftOffice: 1981,
    party: "Democratic",
  },
  {
    id: 40,
    name: "Ronald Reagan",
    birthYear: 1911,
    deathYear: 2004,
    tookOffice: 1981,
    leftOffice: 1989,
    party: "Republican",
  },
  {
    id: 41,
    name: "George H. W. Bush",
    birthYear: 1924,
    deathYear: null,
    tookOffice: 1989,
    leftOffice: 1993,
    party: "Republican",
  },
  {
    id: 42,
    name: "Bill Clinton",
    birthYear: 1946,
    deathYear: null,
    tookOffice: 1993,
    leftOffice: 2001,
    party: "Democratic",
  },
  {
    id: 43,
    name: "George W. Bush",
    birthYear: 1946,
    deathYear: null,
    tookOffice: 2001,
    leftOffice: 2009,
    party: "Republican",
  },
  {
    id: 44,
    name: "Barack Obama",
    birthYear: 1961,
    deathYear: null,
    tookOffice: 2009,
    leftOffice: 2017,
    party: "Democratic",
  },
  {
    id: 45,
    name: "Donald J. Trump",
    birthYear: 1946,
    deathYear: null,
    tookOffice: 2017,
    leftOffice: 2021,
    party: "Republican",
  },
  {
    id: 46,
    name: "Joe Biden",
    birthYear: 1942,
    deathYear: null,
    tookOffice: 2021,
    leftOffice: null,
    party: "Democratic",
  },
];

// Iteration 1: Names of Presidents - `map()`
// function getNames(presidentsArr) {
// const result = presidentsArr.map((president) => {
//   return president.name;
// });
// return presidentsArr.map((president) => president.name);
// }

// const getNames = (presidentsArr) => {
//   return presidentsArr.map((president) => president.name);
// };

const getNames = (presidentsArr) =>
  presidentsArr.map((president) => president.name);
// console.log("getNames(presidents)", getNames(presidents));

// Iteration 2: Name and Party  - `map()`
// function getNamesAndParty(presidentsArr) {
//   const result = presidentsArr.map((president) => {
//     return { name: president.name, party: president.party };
//   });
//   return result;
// }
const getNamesAndParty = (presidentsArr) =>
  presidentsArr.map((president) => ({
    name: president.name,
    party: president.party,
  }));

// console.log("getNamesAndParty(presidents)", getNamesAndParty(presidents));

// Iteration 3: Democratic presidents - `filter()`
// function getDemocraticPresidents(presidentsArr) {
//   const result = presidentsArr.filter((president) => {
//     return president.party === "Democratic";
//   });
//   return result;
// }
const getDemocraticPresidents = (presidentsArr) =>
  presidentsArr.filter((president) => president.party === "Democratic");
// () => {return "something"}
// () => "something"

// console.log("getDemocraticPresidents(presidents)", getDemocraticPresidents(presidents));

// Iteration 4: Affiliated Presidents - `filter()`
function getAffiliatedPresidents(presidentsArr) {
  const result = presidentsArr.filter((president) => {
    return president.party !== null;
  });

  return result;
}

// console.log("getAffiliatedPresidents(presidents)", getAffiliatedPresidents(presidents));

// Iteration 5: Count Years in Office - `reduce()`
function countYearsInOffice(presidentsArr) {
  const result = presidentsArr.reduce((total, president) => {
    if (president.leftOffice === null) {
      // Skip the president if they are still in office
      // and return the current total (accumulated value)
      return total;
    }

    // Calculate the number of years in office
    const yearsInOffice = president.leftOffice - president.tookOffice;

    // Update the total - Add the number of years in office to the total
    const newTotal = total + yearsInOffice;
    // Return the new total to be used as the accumulator value in the next iteration
    return newTotal;
  }, 0);

  return result;
}

// console.log("countYearsInOffice(presidents)", countYearsInOffice(presidents));

// Iteration 6: Count Republican Presidents - `reduce()`
function countRepublicanPresidents(presidentsArr) {
  const result = presidentsArr.reduce((total, president) => {
    let newTotal = total;

    if (president.party === "Republican") {
      newTotal++;
    }

    return newTotal;
  }, 0);

  return result;
}

// console.log("countRepublicanPresidents(presidents)", countRepublicanPresidents(presidents));

// Iteration 7: Sort Presidents by Birth Year - `sort()`
function sortPresidentsByBirthYear(presidentsArr) {
  const result = presidentsArr.sort((presidentA, presidentB) => {
    return presidentA.birthYear - presidentB.birthYear;
    // if (presidentA.birthYear < presidentB.birthYear) {
    //   return -1;
    // } else if (presidentA.birthYear > presidentB.birthYear) {
    //   return 1;
    // } else {
    //   return 0;
    // }
  });

  return result;
}

// Bonus: Iteration 8 | Age at Inauguration - `map()`
// function getAgeAtInauguration(presidentsArr) {
//   const result = presidentsArr.map((president) => {
//     return {
//       id: president.id,
//       name: president.name,
//       birthYear: president.birthYear,
//       deathYear: president.deathYear,
//       tookOffice: president.tookOffice,
//       leftOffice: president.leftOffice,
//       party: president.party,
//       ageAtInauguration: president.tookOffice - president.birthYear,
//     };

//   });
//   return result;
// }

function getAgeAtInauguration(presidentsArr) {
  const result = presidentsArr.map((president) => ({
    ...president,
    ageAtInauguration: president.tookOffice - president.birthYear,
  }));
  return result;
}
// console.log("ageAtInauguration(presidents)", ageAtInauguration(presidents));

// Bonus: Iteration 9 | Presidents Born After - `filter()`
function getPresidentsBornAfter(presidentsArr, year) {
  const result = presidentsArr.filter((president) => {
    return president.birthYear > year;
  });
  return result;
}

// console.log("getPresidentsBornAfter(presidents)", getPresidentsBornAfter(presidents));

// Bonus: Iteration 10: Sort Presidents by Name - `sort()`
function sortPresidentsByName(presidentsArr) {
  const result = presidentsArr.sort((presidentA, presidentB) => {
    // if (presidentA.name < presidentB.name) {
    //   return -1;
    // } else if (presidentA.name > presidentB.name) {
    //   return 1;
    // } else {
    //   return 0;
    // }
    return presidentA.name.localeCompare(presidentB.name);
  });

  return result;
}
