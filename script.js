const navLinks = document.querySelector(".nav-links ul");
const openButton = document.querySelector(".toggle-button")

openButton.addEventListener("click", () => {
 
  if(navLinks.classList.contains('-left-[900px]')){
     navLinks.classList.remove('-left-[900px]')
     navLinks.classList.add('left-0')
    }else{
      navLinks.classList.remove('left-0')
      navLinks.classList.add('-left-[900px]')
  }
})

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add('show')
    }else{
      entry.target.classList.remove('show')
    }
  });
});

const hidden = document.querySelectorAll(".hd")
hidden.forEach((el) => observer.observe(el))




