// define function to sign up
const signupHandler = async (event) => {
  event.preventDefault();

  // identify inputs
  const name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
};

// listen for submit
document.querySelector('#sign-up-btn').addEventListener('submit', signupHandler);