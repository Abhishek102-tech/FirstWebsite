let play=document.querySelectorAll(".play");
let bg=document.querySelector(".favimg");
let more=document.querySelector(".favicon");
let song1=document.querySelector(".ikvaariaa")
let song2=document.querySelector(".aaogetumkabhi")
let song3=document.querySelector(".apnamujhetulaga")
let song4=document.querySelector(".uskahibanana")

play[0].addEventListener("click",()=>{
    if(play[0].textContent=="play_arrow"){
    play[0].textContent = "pause";
    song1.play();
    }
    else{
        play[0].textContent = "play_arrow";
        song1.pause();
    }
})
play[1].addEventListener("click",()=>{
    if(play[1].textContent=="play_arrow"){
    play[1].textContent = "pause";
    song2.play();
    }
    else{
        play[1].textContent = "play_arrow";
        song2.pause();
    }
})
play[2].addEventListener("click",()=>{
    if(play[2].textContent=="play_arrow"){
    play[2].textContent = "pause";
    song3.play();
    }
    else{
        play[2].textContent = "play_arrow";
        song3.pause();
    }
})
play[3].addEventListener("click",()=>{
    if(play[3].textContent=="play_arrow"){
    play[3].textContent = "pause";
    song4.play();
    }
    else{
        play[3].textContent = "play_arrow";
        song4.pause();
    }
})
