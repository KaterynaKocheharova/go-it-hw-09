// MAIN VARIABLES

const form = document.querySelector('.feedback-form');
const email = form.email;
const message = form.message;

// SETTING LOCAL STORAGE

const storageKey = 'feedback-form-state';

// Ensure formDataObject is always assigned a valid object
const formDataObject = JSON.parse(localStorage.getItem(storageKey)) || {
  email: '',
  message: '',
};

// SETTING VALUE TO FORM FIELDS DURING PAGE LOAD
email.value = formDataObject.email;
message.value = formDataObject.message;

// ADDING DATA TO LOCAL STORAGE

form.addEventListener('input', event => {
  if (event.target === form.email) {
    formDataObject.email = event.target.value;
  }

  if (event.target === form.message) {
    formDataObject.message = event.target.value;
  }

  const updatedData = JSON.stringify(formDataObject);
  localStorage.setItem(storageKey, updatedData);
});

// ==================================================== FORM SUBMIT ===========================================================

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.removeItem(storageKey);
  console.log('Email:', event.target.elements.email.value);
  console.log('Message:', event.target.elements.message.value);
});
