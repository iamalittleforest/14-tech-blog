// define function to create comment
const createCommentHandler = async (event) => {
  event.preventDefault();

  // collect inputs
  const comment = document.querySelector('#create-comment').value.trim();
  // console.log(commentBody);
  
  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    // redirect to dashboard if comment submission is successful
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

// listen for submit
document.querySelector('.comment-form').addEventListener('submit', createCommentHandler);