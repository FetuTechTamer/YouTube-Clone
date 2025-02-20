const menuButton=document.querySelectorAll(".menu-button");
const screenOverlay=document.querySelector(".screen-overlay");

//Toggle sidebar visisbility when menu buttons are clicked
menuButton.forEach(button=>{
    button.addEventListener("click", () => {
        document.body.classList.toggle("sidebar-hidden");
    });
})
//Toggle sidebar visisbility when screen overlay is clicked
screenOverlay.addEventListener("click", () => {
    document.body.classList.toggle("sidebar-hidden");
});

//show sidebar on large screens by default
if(window.innerWidth>=768){
    document.body.classList.remove("sidebar-hidden")
}