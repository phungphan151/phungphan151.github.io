/*
 * Starter file 
 */
(function () {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.

    let fontSizeOptions = document.querySelectorAll("input[name=text-size]");

    //BUTTON "Encrypt It"
    // id("id_of_button").addEventListener("click", function_name_to_generate);
    document.getElementById("encrypt-it").addEventListener("click", cipherGeneration);

    //Button RESET
    document.getElementById("reset").addEventListener("click", function () { //Note: function() is anonymous function
      document.getElementById("result").innerText = "";
    });


    for (let i = 0; i < fontSizeOptions.length; i++) {
      fontSizeOptions[i].addEventListener("change", function () {
        document.getElementById("result").style.fontSize = this.value;
      });
    }
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  function cipherGeneration() {
    if (document.getElementById("cipher-type").value == "shift") {
      document.getElementById("result").innerText = shiftCipher(document.getElementById("input-text").value.toLowerCase());
    } else {
      document.getElementById("result").innerText = randomized(document.getElementById("input-text").value.toLowerCase());
    }
  }

  /**
   * Returns an encrypted version of the given text, where
   * each letter is shifted alphabetically ahead by 1 letter,
   * and 'z' is shifted to 'a' (creating an alphabetical cycle).
   */

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
      if (!isLowerCaseLetter(text[i])) {
        result += text[i];
      } else if (text[i] < 'a' || text[i] > 'z') {
        result += text[i];
      } else if (text[i] == 'z') {
        result += 'a';
      } else { // letter is between 'a' and 'y'
        let letter = text.charCodeAt(i);
        let resultLetter = String.fromCharCode(letter + 1);
        result += resultLetter;
      }
    }

    //Capitalized
    if (document.getElementById("all-caps").checked) 
      result = result.toUpperCase();
    

    return result;
  }

  function randomized(text) {
    let alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(",");
    let cipher = [];
    let randomIndex = 0;
    let result = "";
  
    for (let i = 0; i < alphabet.length; i++) {
      randomIndex = Math.floor(Math.random() * alphabet.length);
      cipher.push(alphabet.splice([Math.floor(Math.random() * alphabet.length)], 1));
    }
    
    for (let i = 0; i < text.length; i++) {
      if (isLowerCaseLetter(text[i])) {
        let letterCode = text.charCodeAt(i) - 'a'.charCodeAt(0);

        result += cipher[letterCode];
      } else 
        result += text[i];
      
    }

    result = result.replace(",", "");

    //Capitalized
    if (document.getElementById("all-caps").checked) 
      result = result.toUpperCase();
    

    return result;
  }

  function isLowerCaseLetter(characters) {
    return characters >= 'a' && characters <= 'z';
  }

})();