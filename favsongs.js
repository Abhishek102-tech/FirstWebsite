let play=document.querySelector(".play");
let bg=document.querySelector(".favimg");
let more=document.querySelector(".favicon");
let song1=document.querySelector(".ikvaariaa")

play.addEventListener("click",()=>{
    if(play.textContent=="play_arrow"){
    play.textContent = "pause";
    song1.play();
    }
    else{
        play.textContent = "play_arrow";
        song1.pause();
    }
})
