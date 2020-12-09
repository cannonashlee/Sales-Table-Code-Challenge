const checkbox = document.querySelector('#q1');
const checkbox2 = document.querySelector('#q2');
const checkbox3 = document.querySelector('#q3');
const checkbox4 = document.querySelector('#q4');

checkbox.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert('checked');
  } else {
    alert('not checked'); 
  }
})

checkbox2.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
});

checkbox3.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
});

checkbox4.addEventListener('change', (event) => {
  if (event.target.checked) {
    alert('checked');
  } else {
    alert('not checked');
  }
});