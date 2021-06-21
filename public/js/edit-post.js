// define function to edit post
const editPostHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const title = document.querySelector('#edit-post-title').value.trim();
  const content = document.querySelector('#edit-post-content').value.trim();
  // console.log(title, content);
  
  if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    // redirect to dashboard if post edit is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document.querySelector('.update-post-form').addEventListener('submit', editPostHandler);