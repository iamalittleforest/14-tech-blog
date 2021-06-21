// define function to delete post
const deletePostHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const id = document.querySelector('#edit-post-id').value.trim();
  // console.log(id);
  
  if (id) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE'
    });

    // redirect to dashboard if post delete is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document.querySelector('.update-post-form').addEventListener('submit', deletePostHandler);