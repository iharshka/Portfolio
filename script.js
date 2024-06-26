console.log("Chal raha Hai!");
document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("sidebarGo");
  if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
    document.querySelector(".cross").style.display = "none";
    document.querySelector(".ham").style.display = "inline";
  } else {
    document.querySelector(".ham").style.display = "none";
    setTimeout(() => {
      document.querySelector(".cross").style.display = "inline";
    }, 600);
  }
});

/*Slider Js Code*/

const buttons = document.querySelectorAll("[data-carousel-button]"); //Attribute Selector intead of class selector coz it works fine with js

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

for (let i = 1; i <= 6; i++) {
  const blogContainer = document.querySelector(`.blog${i}`);

  blogContainer.addEventListener("click", (event) => {
    const current = event.target;

    const isreadmoreBtn = current.className.includes("readmore-btn");

    if (!isreadmoreBtn) return;
    const currenttext = event.target.parentNode.querySelector(".readmore-text");

    currenttext.classList.toggle("readmoretext--show");

    current.textContent = current.textContent.includes("Read more")
      ? "..Read less"
      : "..Read more";
  });
}

function f() {
  alert(
    "Thank you for reaching out! This message is to let you know that within a reCAPTCHA verfication in the next redirect page, your form will be submitted and sent to Harsh successfully! He will try to reply as soon as he see the message. Till then reCAPTCHA, hold back and relax ;)"
  );
}
