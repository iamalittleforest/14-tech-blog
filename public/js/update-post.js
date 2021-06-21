// define function to update post
const updatePostHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = document.querySelector('#edit-post-id').value.trim();
  const title = document.querySelector('#edit-post-title').value.trim();
  const content = document.querySelector('#edit-post-content').value.trim();
  // console.log(id, title, content);
  
  if (id && title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' }
    });

    // redirect to dashboard if post update is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document.querySelector('.update-post-form').addEventListener('submit', updatePostHandler);