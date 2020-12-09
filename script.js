// let quarter1 = document.querySelector("input [name=allcheckbox]");
// let quarter2 = document.querySelector('#q2').checked;
// let quarter3 = document.querySelector('#q3').checked; 
// let quarter4 = document.querySelector('#q4').checked; 

// console.log("quarter 2 is checked", quarter2); 
// console.log("quarter 3 is checked", quarter3);
// console.log("quarter 4 is checked", quarter4); 

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