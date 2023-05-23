const allPanels = document.querySelectorAll(".panel");
console.log(allPanels)

function removeActiveClass(){
    allPanels.forEach(panel=>{
        panel.classList.remove("active")
    })
}
allPanels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        removeActiveClass();
        panel.classList.add("active")
    })
})