const signupForm = document.querySelector('#signupForm');
const formStatus = document.querySelector('#formStatus');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  formStatus.textContent = `You’re in, ${name}! Check your inbox for the next move.`;
  signupForm.reset();
});
