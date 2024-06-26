const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

const input = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errMessage = document.getElementById('err-msg');

// Toggle Mobile Menu
function navToggle() {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
}

function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ); // fragment locator
  return !!pattern.test(str);
}

function formSubmit(e) {
  e.preventDefault();

  if (input.value === '') {
    errMessage.innerHTML = `Pleae enter something`;
    input.classList.add('border-red');
  } else if (!validURL(input.value)) {
    errMessage.innerHTML = `Pleae enter a valid URL`;
    input.classList.add('border-red');
  } else {
    errMessage.innerHTML = '';
    input.classList.remove('border-red');
    alert('Success');
  }
}

// Event Listenters
linkForm.addEventListener('submit', formSubmit);
btn.addEventListener('click', navToggle);
