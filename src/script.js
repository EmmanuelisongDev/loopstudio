const navLinks = document.querySelector(".nav-links ul");
const openButton = document.querySelector(".toggle-button")
// const closeButton = document.querySelector(".toggle-button .close")

// console.log(openButton)


openButton.addEventListener("click", () => {
 
  if(navLinks.classList.contains('-left-[900px]')){
     navLinks.classList.remove('-left-[900px]')
     navLinks.classList.add('left-0')
    }else{
      navLinks.classList.remove('left-0')
      navLinks.classList.add('-left-[900px]')
  }
 
  
})


