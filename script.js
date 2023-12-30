function loadProgressBar(){
    const bar = document.getElementById("bar");
    const level = document.getElementsByTagName("a");
    bar.value = level.length;
    console.log(bar, level);
}