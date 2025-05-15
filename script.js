const menuIcon = document.querySelector(".menu_secundario-icon"); 


menuIcon.addEventListener("click",() =>{
    const menuSecondLista = document.getElementById("menu-secundario")
    
    menuIcon.classList.toggle("open");
    menuSecondLista.classList.toggle("open");
})


