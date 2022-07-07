// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors (moviesArray) {
  // Use `.map()` to create a new array containing only director names
  const directorsArr = moviesArray.map(function(movie) {
    return movie.director;
  })

  return directorsArr;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies (moviesArray) {
  const filteredMovies = moviesArray.filter(element => {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });

  return filteredMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

  if (moviesArray.length === 0) {
    return 0;
  }

  // Create a new array using `.map()` containing only scores
  const ratesArr = moviesArray.map(function (movieObj) {
    return movieObj.score;
  });

  let rateSum = 0;
  ratesArr.forEach((num) => {
    if (!num) {
      return;
    }
    else {
      rateSum += num;
    }
  });

  // or a shorter way using `.reduce()`
  // const rateSum = ratesArr.reduce(function (acc, num) {
  //   if (!num) {
  //     return acc;
  //   } else {
  //     return acc + num;
  //   }
  // }, 0);


  return Number((rateSum / moviesArray.length).toFixed(2));

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    const isDramaMovie = movie.genre.includes("Drama");
    return isDramaMovie;
  });

  const averageRate = scoresAverage(dramaMovies);
  return averageRate;

  // or a shorter way:
  // return scoresAverage(dramaMovies);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const moviesArrayCopy = [...moviesArray];
  
  return moviesArrayCopy.sort((a, b) => {
    if (a.year > b.year) {
      return 1;
    } else if (b.year > a.year) {
      return -1;
    } else {
      if (a.title > b.title) {
        return 1;
      } else if (b.title > a.title) {
        return -1;
      }
      return 0;
    }
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const moviesArrayCopy = [...moviesArray];

  // Sorting mutates the original array and sorts the elements
  moviesArrayCopy.sort(function(a, b) {
    if (a.title < b.title) {
      return -1;
    } else if (a.title > b.title) {
      return 1;
    } else {
      return 0;
    }
  });

  const first20 = moviesArrayCopy.slice(0, 20);

  const new20Titles = [];
  first20.forEach(function (movie) {
    new20Titles.push(movie.title);
  })

  // or a shorter way using `.map()`:
  // const new20Titles = first20.map(function (movie) {
  //   return movie.title;
  // })

  return new20Titles;
}



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

  const newArr = moviesArray.map(function (movie) {
    return durationToMinutes(movie);
  });

  function durationToMinutes(movie) {

    if (typeof movie.duration === "number") {
      return movie;
    }
    
    movieDuration = movie.duration;

    const timeString = movieDuration.split(" ");
    // Example:
    // "2h 22min"   ["2h", "22min"]
    // "2h"   ["2h"]
    // "22min"  ["22min"]

    const minutesDuration = timeString.reduce(function(total, string) {
      if (string.includes("h")) {
        const numOfHours = parseInt(string);
        return total + numOfHours * 60;
      } else {
        const numOfMinutes = parseInt(string);
        return total + numOfMinutes;
      }
    }, 0);

    movie.duration = minutesDuration;
    return movie;
  }

  return newArr;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }

  const dictionary = {};

  moviesArray.forEach(function(movie) {
    if (!dictionary[movie.year]) {
      dictionary[movie.year] = [];
      dictionary[movie.year].push(movie);
    } else {
      dictionary[movie.year].push(movie);
    }
  });

  let highest = 0;
  let bestYear;

  for (const year in dictionary) {
    const currentYearAverage = scoresAverage(dictionary[year]);

    if (currentYearAverage > highest) {
      highest = currentYearAverage;
      bestYear = year;
    } else if (currentYearAverage === highest) {
      // Check which year is the lowest and save it to the `oldestYear`
      const oldestYear = year < bestYear ? year : bestYear;
      bestYear = oldestYear;
    }
  }

  return `The best year was ${bestYear} with an average score of ${highest}`;
}
