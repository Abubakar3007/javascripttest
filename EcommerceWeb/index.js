let user=document.querySelector(".user");
let navLogo=document.querySelector(".navbar");
let userPages=document.querySelector(".mainLoginPages");
let cross=document.querySelector(".cross");

user.addEventListener("click",function(){
    navLogo.classList.add("index");
    userPages.style.display="block";
    cross.addEventListener("click",function(){       
         userPages.style.display="none"

    })

})



// slider
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("fg");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}
let icon = document.getElementById("arrow");
let fa = document.getElementById("fa");
// console.log(icon)
for (var i = 0; i < icon.length; i++) {
    icon[i].addEventListener("mouseover", iconFun);
    function iconFun() {
        fa.style.color = "#fff"
    }

    icon[i].addEventListener("mouseleave", iconfunle);
    function iconfunle() {
        fa.style.color = "black";
    }
}






// function handleClick(value){
//     let catElement=document.querySelectorAll(".categriesEle");
//     catElement.forEach((button)=>{
//         if(value.toUpperCase() == button.innerText.toUpperCase()){
//            button.classList.add("active") 
//            button.classList.add("first")
//            console.log(button)
//         }else{
//             button.classList.remove("active") 
//             button.classList.remove("first")
//         }
//     })
//     const cartList=document.querySelectorAll(".cartList");
//     cartList.forEach((element)=>{
//         if(value=="best sellers"){
//             element.classList.remove("hide")
//         }
//         else if(value=="new arrivels"){
//             element.classList.remove("hide")
//         }
//     })
// }
// window.onload=()=>{
// handleClick("best");

// }


function handleClick(evt, cityName) {
   let  tabcontent = document.getElementsByClassName("cartList");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
   let tablinks = document.getElementsByClassName("categriesEle");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("first", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "grid";
    evt.currentTarget.className += " first";
  }
  
// watch


setInterval(() => {
    let dayTime=document.querySelector(".day")
    let hourTime=document.querySelector(".hour")
    let minuteTime=document.querySelector(".minute")
    let secondTime=document.querySelector(".seconde")
    let date=new Date();
    let day=date.getDay()
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();
    hh=(hh<10)? "0"+hh :hh;
    mm=(mm<10)? "0"+mm :mm;
    ss=(ss<10)?"0"+ss :ss;
    dayTime.innerHTML=day;
    hourTime.innerHTML=hh;
    minuteTime.innerHTML=mm;
    secondTime.innerHTML=ss;
}, 1000)



function handleClick2(evt, cityName) {
    let  tabcontent = document.getElementsByClassName("cartList");
     for (let i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
     }

    let tablinks = document.getElementsByClassName("categriesEle");
     for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace("first", "");
     }
     
     document.getElementById(cityName).style.display = "grid";
     evt.currentTarget.className += " first";
   }

// crousel
$(".slider").owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  autoplayHoverPause:true,
})