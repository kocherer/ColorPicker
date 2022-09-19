let red = document.getElementById('red');
let green = document.getElementById('green');
let blue = document.getElementById('blue');
let light = document.getElementById('light');
let box = document.querySelector('div.valueBox');
let r = 0, g = 0, b = 0, l = 0;
red.addEventListener("keyup", function (event) {
   r = red.value;
   if (!r)
      r = 0;
   box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${l}) / 255`;
});
green.addEventListener("keyup", function (event) {
   g = green.value;
   if (!g)
      g = 0;
   box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${l}) / 255`;
});
blue.addEventListener("keyup", function (event) {
   b = blue.value;
   if (!b)
      b = 0;
   box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${l}) / 255`;
});
light.addEventListener("keyup", function (event) {
   l = light.value;
   if (!l)
      l = 0;
   box.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${l}) / 255`;
});
