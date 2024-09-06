const toggleBtn=document.getElementById("toggleBtn");

const navbar =document.getElementById("navbar");


const onMenuToggle=()=>{
    if(navbar.classList.contains("active")){
        navbar.classList.remove("active")
    }else{
        navbar.classList.add("active");
    }
}








toggleBtn.addEventListener("click",onMenuToggle);