var typed = new Typed('.multiple-text', {
  strings: ['FrontEnd Developer', 'Age:20', 'FCIS || MU'],
  typeSpeed: 100,
  backSpeed: 100,
  typeDelay: 100,
  loop: true
});

let btn_scroll = document.getElementById('scroll-btn');
function up() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

window.onscroll = function () {
  if (scrollY >= 855) {
    btn_scroll.style.display = "Block";
  }
  else if (scrollY < 855) {
    btn_scroll.style.display = "none";
  }
}

document.addEventListener("scroll", function () {
  let elements = document.querySelectorAll("#html, #css, #js, #boot , #communication ,#Management ,#TM  , #C");
  let scrollThreshold = window.innerWidth <= 768 ? 750 : 450;
  if (window.scrollY >= scrollThreshold) {
    elements.forEach((el) => el.classList.add("animate"));
  }
  else if (window.scrollY < 450)
    elements.forEach((el) => el.classList.remove("animate"));
});


let D_Cv = document.getElementById('D_Cv');

D_Cv.onclick = function () {
  // window.open("/cv/Mohamed_CV.pdf" , "blank");
  const link = document.createElement("a");
  link.href = "/cv/Mohamed_CV.pdf";  
  link.download = "Mohamed_ELshahat_CV.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}




