// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const buttonSortByName = document.querySelector("#btn-sort-name");
const buttonSortByPopularity = document.querySelector("#btn-sort-popularity");

const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
const randomIndex = Math.floor(Math.random() * contacts.length);
// Splice 1 element from the contacts array at the random index
const splicedArr = contacts.splice(randomIndex, 1);
// Get the first (and only) element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

// We additionally add the event listeners to the buttons "Delete" and "Like" of the example row
const deleteButton = exampleRow.querySelector(".btn-delete");
deleteButton.addEventListener("click", function () {
  exampleRow.remove();
});

const likeButton = exampleRow.querySelector(".btn-like");
likeButton.addEventListener("click", function () {
  likeButton.classList.toggle("selected");
});

// Append the example row to the table body
tableBody.appendChild(exampleRow);


// ITERATION 1 - Display 3 contacts
// Splice the first 3 elements from the contacts array
const threeContacts = contacts.slice(0, 3);

// Iterate over the spliced array
threeContacts.forEach((contact) => {
  // Create a new row with the contact data
  const row = document.createElement("tr");
  // Create the HTML for the new row with the contact data
  row.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td>${contact.name}</td>
    <td>${contact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  // Append the new row to the table body
  tableBody.appendChild(row);

  
  // ITERATION 2 - Delete buttons  
  // Add a click event listener to the button 'Delete'
  const buttonDelete = row.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", function () {
    // Remove the row from the table body
    row.remove();
  });

  
  // ITERATION 3 - Like buttons
  // Add a click event listener to the button 'Like'
  const buttonLike = row.querySelector(".btn-like");

  buttonLike.addEventListener("click", function () {
    // Toggle the class 'selected' on the button
    buttonLike.classList.toggle("selected");
  });  
});


// Bonus: ITERATION 4 - Add new random contact
// Add a click event listener to the button 'Add Random Contact'
buttonAddRandom.addEventListener("click", function () {
  // Get a random contact from the contacts array
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const randomContact = contacts.splice(randomIndex, 1)[0];
  

  // Create a new row with the contact data
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>
      <img src="${randomContact.pictureUrl}" />
    </td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
  `;

  // Add a click event listener to the button 'Delete'
  const buttonDelete = row.querySelector(".btn-delete");
  buttonDelete.addEventListener("click", function () {
    // Remove the row from the table body. The 'remove()' is used to remove the element from the DOM
    row.remove();
  });

  // Add a click event listener to the button 'Like'
  const buttonLike = row.querySelector(".btn-like");
  buttonLike.addEventListener("click", function () {
    // Toggle the class 'selected' on the button
    buttonLike.classList.toggle("selected");
  });
  

  // Append the new row to the table body
  tableBody.appendChild(row);
});




