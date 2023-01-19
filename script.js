console.log("Chal raha Hai!");
document.querySelector('.cross').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle("sidebarGo");
    if(document.querySelector('.sidebar').classList.contains("sidebarGo")){
        document.querySelector('.cross').style.display='none'; 
        document.querySelector('.ham').style.display='inline';
    }
    else{
        document.querySelector('.ham').style.display='none';
        setTimeout(() =>{
            document.querySelector('.cross').style.display='inline'; 
        }, 600);
    }
})

/*Slider Js Code*/

const buttons = document.querySelectorAll("[data-carousel-button]") //Attribute Selector intead of class selector coz it works fine with js 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if(newIndex < 0) newIndex = slides.children.length - 1
        if(newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
        })
})

const blogContainer1 = document.querySelector('.blog1');

blogContainer1.addEventListener('click', event=>{

    const current = event.target;

    const isreadmoreBtn = current.className.includes('readmore-btn');

    if(!isreadmoreBtn) return;
    const currenttext = event.target.parentNode.querySelector('.readmore-text');

    currenttext.classList.toggle('readmoretext--show');

    current.textContent = current.textContent.includes('Read more') ? "..Read less" : "..Read more";
})


const blogContainer2 = document.querySelector('.blog2');

blogContainer2.addEventListener('click', event=>{

    const current = event.target;

    const isreadmoreBtn = current.className.includes('readmore-btn');

    if(!isreadmoreBtn) return;
    const currenttext = event.target.parentNode.querySelector('.readmore-text');

    currenttext.classList.toggle('readmoretext--show');

    current.textContent = current.textContent.includes('Read more') ? "..Read less" : "...Read more";
})


const blogContainer3 = document.querySelector('.blog3');

blogContainer3.addEventListener('click', event=>{

    const current = event.target;

    const isreadmoreBtn = current.className.includes('readmore-btn');

    if(!isreadmoreBtn) return;
    const currenttext = event.target.parentNode.querySelector('.readmore-text');

    currenttext.classList.toggle('readmoretext--show');

    current.textContent = current.textContent.includes('Read more') ? "..Read less" : "...Read more";
})


const blogContainer4 = document.querySelector('.blog4');

blogContainer4.addEventListener('click', event=>{

    const current = event.target;

    const isreadmoreBtn = current.className.includes('readmore-btn');

    if(!isreadmoreBtn) return;
    const currenttext = event.target.parentNode.querySelector('.readmore-text');

    currenttext.classList.toggle('readmoretext--show');

    current.textContent = current.textContent.includes('Read more') ? "..Read less" : "..Read more";

    if(document.querySelector('blog4').classList.contains("fa-angle-double-down")){
         return;
    }
    else{
        currenttext.classList.toggle('readmoretext--show');
        currenttext.i.toggle('fa-angle-double-up');
    }
})

function f(){
    alert("Form Submitted Successfully!");
}