// map.js
let data = {
  HI: 500,
  WA: 1000,
  MD: 10,
  FL: 9001
}
function setColorFor(state) {
  let color = getColorFor(data[state]);
  let element = document.getElementById(state)
  if (element) {
    element.style.fill = color;
  }
}

function getColorFor(value) {
   if (!value) {
     return 'grey';
   }
   else if (value >= 5000) {
     return 'red';
   }
   else if (value >= 1000) {
     return 'orange';
   }
   else if (value >= 500) {
     return 'yellow'
   }
   else {
     return 'green';
   }
}

function applyData(data) {
  Object.keys(data).forEach(function(key) {
    setColorFor(key);
  });
}

applyData(data);
