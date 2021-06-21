// define function to sign up
const signupHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const username = document.querySelector('#username-sign-up').value.trim();
  const password = document.querySelector('#password-sign-up').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    // redirect to dashboard if sign up is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document.querySelector('#sign-up-btn').addEventListener('submit', signupHandler);