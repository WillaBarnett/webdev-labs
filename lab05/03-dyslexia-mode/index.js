/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/



const dyslexiaToggle = () => {

  console.log("clicked");
  document.querySelector("body").classList.toggle("dyslexia-mode");
 

  // if(temp){
  //   document.querySelector("body").classList.remove("dyslexia-mode");
  // }
  // else{
  //   document.querySelector("body").classList.add("dyslexia-mode");
  // };

}



document.querySelector("#dyslexia-toggle").addEventListener('click', dyslexiaToggle);
