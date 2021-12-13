import { showSpinner, hideSpinner } from './spinner.js';

const ERRORS = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooLong', 'tooShort',
  'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput'];

const fields = [...subscribeForm.elements].filter(el => el.tagName !== 'BUTTON');

fields.forEach(el => {
  const name = el.type === 'checkbox' ? 'change' : 'blur';
  el.addEventListener(name, event => fieldError(event.target));
});

function fieldError(el) {
  const error = ERRORS.filter(err => el.validity[err])
    .map(err => el.dataset[err.toLowerCase()]).join('');
  return el.parentElement.querySelector('.error').innerHTML = error;
}

function onSubmit(e) {
  e.preventDefault();
  const errors = fields.filter(el => fieldError(el));
  if (!errors.length)
    post(new FormData(e.target)).finally(hideSpinner);
};

function post(data) {
  showSpinner(data);
  return new Promise(resolve => setTimeout(resolve, 3000));
}

subscribeForm.addEventListener('submit', onSubmit);