const checkbox = document.querySelector('#q1');
const checkbox2 = document.querySelector('#q2');
const checkbox3 = document.querySelector('#q3');
const checkbox4 = document.querySelector('#q4');

checkbox.addEventListener('change', (event) => {
  let firstquarter = document.getElementsByClassName('qt1');
  let firstsetquarter = document.getElementsByClassName('qt2 qt3 qt4');

  if (checkbox.checked == true) {
    for (var i=0; i < firstquarter.length; i += 1){
      firstquarter[i].style.display = 'table-row';
    } 
  } else {
    for (var i=0; i < firstquarter.length; i += 1){
      firstquarter[i].style.display = 'none';  
    }
  }
});

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