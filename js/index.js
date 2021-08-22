var menuBtn = document.getElementById('btn-hamburger');
var mobilenav = document.querySelector(".mobile-sidenav");
var backdrop = document.querySelector(".backdrop");
// to attach an event to do more than one task in the same time
menuBtn.onclick = function(e)
{
  // do something tasks
  // your code here
  // animation for button with cross line on click  
    menuBtn.classList.add('animeOpenClose');
    backdrop.classList.add("open");
    mobilenav.classList.add("open");
    setTimeout(function () {
    backdrop.classList.add("animate");
    mobilenav.classList.add("animate");
    },100  );
};
backdrop.onclick = function(x){
  menuBtn.classList.remove('animeOpenClose');
backdrop.classList.remove("animate");
    mobilenav.classList.remove("animate");
    setTimeout(function () {
        backdrop.classList.remove("open");
         mobilenav.classList.remove("open");
    }, 200);
}
// type writer
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
