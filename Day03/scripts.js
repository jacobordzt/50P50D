function toggleMenu(){
    let menu = document.getElementById("menu");
    let cont = document.getElementById("cont");
    let btn  = document.getElementById("btn");
    menu.classList.toggle("menu_active");
    cont.classList.toggle("content_active");
    btn.classList.toggle("active");
}