// MAIN VARIABLES

const form = document.querySelector('.feedback-form');
const email = form.email;
const message = form.message;

// SETTING LOCAL STORAGE

const storageKey = 'feedback-form-state';

const formDataObject = JSON.parse(localStorage.getItem(storageKey)) || {
  email: '',
  message: '',
};

// SETTING VALUE TO FORM FIELDS DURING PAGE LOAD
email.value = formDataObject.email;
message.value = formDataObject.message;

// ADDING DATA TO LOCAL STORAGE

form.addEventListener('input', event => {
  const currentData = JSON.parse(localStorage.getItem(storageKey));

  if (event.target === form.email) {
    currentData.email = event.target.value;
  }

  if (event.target === form.message) {
    currentData.message = event.target.value;
  }

  const updatedData = JSON.stringify(currentData);
  localStorage.setItem(storageKey, updatedData);
});
