const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null;


// ITERATION 1: Add event listener to the start button
const startButton = document.querySelector("#start-btn");
startButton.addEventListener("click", startCountdown);


// ITERATION 2: Start Countdown
function startCountdown() {
  const timeElement = document.querySelector("#time");
  const button = document.querySelector("#start-btn");
  button.disabled = true;

  timer = setInterval(() => {
    timeElement.textContent = remainingTime;

    // BONUS: ITERATION 5: More Toasts
    if (remainingTime === 10) {
      showToast("⏰ Final countdown! ⏰");
    }

    if (remainingTime === 5) {
      showToast("Start the engines! 💥");
    }
    // ::: END OF BONUS

    if (remainingTime === 0) {
      clearInterval(timer);
      showToast(" Lift off! 🚀");
    }

    remainingTime--;
  }, 1000);

}

// ITERATION 3 | Show Toast
function showToast(message) {
  const toastElement = document.querySelector("#toast");
  const toastMessage = document.querySelector("#toast-message");
  
  toastElement.classList.add("show");
  toastMessage.textContent = message;

  const timeout = setTimeout(() => {
    toastElement.classList.remove("show");
  }, 3000);

  
  // BONUS: ITERATION 4 | Close Toast Button
  const closeToast = document.querySelector("#close-toast");
  closeToast.addEventListener("click", function() {
    toastElement.classList.remove("show");
    clearTimeout(timeout);
  });
  // ::: END OF BONUS

}