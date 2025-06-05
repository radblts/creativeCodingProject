window.onload = function () {
  const saved = JSON.parse(localStorage.getItem('comments') || '[]');
  saved.forEach(displayComment);
};

function addComment() {
  const nameInput = document.getElementById('authorInput');
  const commentInput = document.getElementById('commentInput');
  const name = nameInput.value.trim();
  const text = commentInput.value.trim();

  if (name === '' || text === '') return;

  const newComment = { name: name, text: text };

  const saved = JSON.parse(localStorage.getItem('comments') || '[]');
  saved.push(newComment);
  localStorage.setItem('comments', JSON.stringify(saved));

  displayComment(newComment);
  nameInput.value = '';
  commentInput.value = '';
}

function displayComment(commentObj) {
  const list = document.getElementById('commentList');
  const div = document.createElement('div');
  div.textContent = `${commentObj.name}: ${commentObj.text}`;
  list.appendChild(div);
}
