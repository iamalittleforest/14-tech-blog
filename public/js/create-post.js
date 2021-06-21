// define function to create post
const createPostHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const postTitle = document.querySelector('#create-post-title').value.trim();
  const postContent = document.querySelector('#create-post-content').value.trim();
  // console.log(postTitle, postContent);
  
  if (postTitle && postContent) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ postTitle, postContent }),
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
document.querySelector('.post-form').addEventListener('submit', createPostHandler);