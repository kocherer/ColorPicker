const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const box = document.querySelector('div.valueBox');
const r = 0;
const g = 0;
const b = 0;
red.addEventListener("keyup", function (event) {
   r = red.value;
   if (!r)
      r = 0;
   box.style.backgroundColor = `rgb(${r}/255, ${g}/255, ${b}/255)`;
});
green.addEventListener("keyup", function (event) {
   g = green.value;
   if (!g)
      g = 0;
   box.style.backgroundColor = `rgb(${r}/255, ${g}/255, ${b}/255)`;
});
blue.addEventListener("keyup", function (event) {
   b = blue.value;
   if (!b)
      b = 0;
   box.style.backgroundColor = `rgb(${r}/255, ${g}/255, ${b}/255)`;
});
