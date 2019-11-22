const navSlide = ()=>{
    const bgb = document.querySelector('.bgb');
    const nav = document.querySelector('.ul-links');
    const NavLink = document.querySelectorAll('.ul-links li');

//Toggle Nav 
    bgb.addEventListener('click',()=> {
       nav.classList.toggle('nav-active');


       NavLink.forEach((link, index) =>{
       if(link.style.animation){
         link.style.animation = '';  
       }else{
        link.style.animation = `navLinkfade 0.5s ease forwards ${index / 7 + 0.5}s` 
       }
   });
   

    });
//Animate Links

}
navSlide();