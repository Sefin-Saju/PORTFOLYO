document.addEventListener("DOMContentLoaded",function(){
  const navLinks= document.querySelectorAll(".nav-link");

  navLinks.forEach(link=>{
    link.addEventListener("click",function(){
      const targetId=this.getAttribute("data-target");
      const targetSection=document.getElementById(targetId);
      if(targetSection){
        targetSection.scrollIntoView({behavior:"smooth"});
        navLinks.forEach(link=>{
          link.classList.remove("sky");
        });
        this.classList.add("sky");
      }
    });
  });
});
