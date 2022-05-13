const showError = (id, error) => {
  const element = document.getElementById(id);
  error ? element.classList.add('error') : element.classList.remove('error');
};

const registration = (event) => {
  event.preventDefault();
  console.log(event);
  const form = new FormData(event.target);
  const firstName = form.get('firstName');
  console.log(firstName);
  const lastName = form.get('lastName');
  console.log(lastName);
  const email = form.get('email');
  console.log(email);
  const phone = form.get('phone');
  console.log(phone);
// localStorage.setItem('firstName', JSON.stringify(firstName));
  const generateId = (name) => {
    return `js-form-${name}`;
  };

  showError(generateId('first-name'), !firstName);
  showError(generateId('last-name'), !lastName);
  showError(generateId('email'), !email);
  showError(generateId('phone'), !phone);
};







export { registration };
