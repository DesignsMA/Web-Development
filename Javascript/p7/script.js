function exec () {
  "use strict";
  /* Start of your code */
  function greetMe(yourName) {
    alert(`Hello ${yourName}`);
  }

  greetMe("World");
  /* End of your code */
}

const btn1 =  document.getElementById("btn1");
btn1.addEventListener("click", exec);