// define function to login
const loginHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const email = document.querySelector('#username-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
};

// listen for submit
document.querySelector('#login-btn').addEventListener('submit', loginHandler);