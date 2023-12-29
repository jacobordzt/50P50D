let level;

function start(){
    level = 0;
    checkSteps()
}

function next(){
    if(level < 3){
        level++;
        checkSteps();
    }
}

function back(){
    if(level > 0){
        level--;
        checkSteps();
    }
}

function checkSteps(){
    const steps = document.getElementsByClassName("step");
    const btns = document.getElementsByTagName("button");
    const bar = document.getElementById("bar");
    for(let i = 0; i < 4; i++){
        i <= level ? steps[i].classList.add('active') : steps[i].classList.remove('active');
        bar.style.width = level * 100 + "px";
        console.log("Level: " + level);
    }
    level === 0 ? btns[0].classList.add('btn-off') : btns[0].classList.remove('btn-off');
    level === 3 ? btns[1].classList.add('btn-off') : btns[1].classList.remove('btn-off');
}
