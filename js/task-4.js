const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const userEmail = email.value.trim();
  const userPassword = password.value.trim();

  if (!userEmail || !userPassword) {
    alert('Please ensure all form fields are filled in');
    return;
  }

  const data = {
    email: userEmail,
    password: userPassword,
  };

  console.log(data);

  e.currentTarget.reset();
});
