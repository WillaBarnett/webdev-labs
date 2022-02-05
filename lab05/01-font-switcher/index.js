const makeBigger = () => {

   txt= document.querySelector("p")
   style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   txt.style.fontSize = (currentSize + 5) + 'px';

   hding= document.querySelector("h1")
   style = window.getComputedStyle(hding, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   hding.style.fontSize = (currentSize + 5) + 'px';

   
   // alert('make bigger!');
};

const makeSmaller = () => {

   txt= document.querySelector("p")
   style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   txt.style.fontSize = (currentSize - 5) + 'px';

   hding= document.querySelector("h1")
   style = window.getComputedStyle(hding, null).getPropertyValue('font-size');
   currentSize = parseFloat(style);
   hding.style.fontSize = (currentSize - 5) + 'px';

   // alert('make smaller!');
};


document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

