/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/




function changeClass(currClass){

   bod_class = document.querySelector("body").className;

   console.log("current class of body:", bod_class);

   console.log("current arg", currClass);

   bodyClass = document.querySelector("body").className;

   if (!bodyClass || currClass != "default"){
      
      console.log("clicked a custom class button");

      temp = document.querySelector("body");

      if (temp){
         temp.className = currClass
      }
      else{
         temp += currClass
      };
      console.log(temp);
      // temp = currClass;


   }

   else if (currClass == "default")
   {
      
      console.log("clicked default or didn't click")
   
      temp = document.querySelector("body");
      temp.className = null;
   };

      
}



document.querySelector("#default").addEventListener('click', () => {changeClass("default");});

document.querySelector("#desert").addEventListener('click', () => {changeClass("desert");});

document.querySelector("#ocean").addEventListener('click', () => {changeClass("ocean");});

document.querySelector("#high-contrast").addEventListener('click', () => {changeClass("high-contrast");});