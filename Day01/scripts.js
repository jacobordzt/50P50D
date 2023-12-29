
function expand(img){
    let images = document.getElementsByTagName("img");
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove('active')
    }
    images[img].classList.add('active');
}