const elements = document.querySelectorAll(
  '.hero-left, .hero-right, .work-item, .about, .contact'
);

elements.forEach(el => el.classList.add('reveal'));

function revealOnScroll(){
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el=>{
    const top = el.getBoundingClientRect().top;
    if(top < trigger){
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
