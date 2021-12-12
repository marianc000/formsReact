import { showSpinner, hideSpinner } from './spinner.js';

const ERRORS = ['valueMissing', 'typeMismatch', 'patternMismatch', 'tooLong', 'tooShort',
  'rangeUnderflow', 'rangeOverflow', 'stepMismatch', 'badInput'];
 
function fieldError(el) {
  console.log(">check", el, el.validity, el.dataset, el.dataset.one);

  const error = ERRORS.filter(err => el.validity[err])
    .map(err => el.dataset[err.toLowerCase()]).join('');

  el.parentElement.querySelector('.error').innerHTML = error;
  return error;
}

function getFields() {
  return [...subscribeForm.querySelectorAll('input,select')];
}

getFields().forEach(el => {
  const name = el.type === 'checkbox' ? 'change' : 'blur';
  el.addEventListener(name, event => fieldError(event.target));
  el.addEventListener('invalid', e => console.log('invalid', e));
});

function formInvalid() {
  return getFields().filter(el => fieldError(el)).length;
}

function post(data) {
  console.log(">post", JSON.stringify(Object.fromEntries(data)));
  showSpinner(data);
  return new Promise(resolve => setTimeout(resolve, 3000));
}

subscribeForm.addEventListener('submit', e => {
  console.log(">onSubmit", e);
   e.preventDefault();
  if (formInvalid()) return;

  post(new FormData(e.target)).finally(hideSpinner);
});

