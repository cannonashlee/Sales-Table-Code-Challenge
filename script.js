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
  let secondquarter = document.getElementsByClassName('qt2');
  let secondsetquarter = document.getElementsByClassName('qt1 qt3 qt4');

  if (checkbox2.checked == true) {
    for (var i=0; i < secondquarter.length; i += 1){
      secondquarter[i].style.display = 'table-row';
    }
  } else {
    for (var i=0; i < secondquarter.length; i += 1){
      secondquarter[i].style.display = 'none'; 
    }
  }
});

checkbox3.addEventListener('change', (event) => {
  let thirdquarter = document.getElementsByClassName('qt3');
  let thirdsetquarter = document.getElementsByClassName('qt1 qt2 qt4');

  if (checkbox3.checked == true) {
    for (var i=0; i < thirdquarter.length; i += 1){
      thirdquarter[i].style.display = "table-row"; 
    }
  } else {
    for (var i=0; i < thirdquarter.length; i += 1){
      thirdquarter[i].style.display = "none"; 
    }
  }
});

checkbox4.addEventListener('change', (event) => {
  let fourthquarter = document.getElementsByClassName('qt4');
  let fourthsetquarter = document.getElementsByClassName('qt1 qt2 qt3');

  if (checkbox4.checked == true) {
    for (var i=0; i < fourthquarter.length; i += 1){
      fourthquarter[i].style.display = 'table-row';
    }
  } else {
    for (var i=0; i < fourthquarter.length; i += 1){
      fourthquarter[i].style.display = 'none';
    }
  }
});

const sales = document.querySelector('.title');

sales.addEventListener('click', (event) => {
  alert('click worked!');
});

const topsalesperson = document.querySelector('.top');

topsalesperson.addEventListener('click', (event) => {
  alert('click worked!');
}); 