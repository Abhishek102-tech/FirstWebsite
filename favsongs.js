let play=document.querySelectorAll(".play");
let bg=document.querySelector(".favimg");
let more=document.querySelector(".favicon");
let song1=document.querySelector(".ikvaariaa")
let song2=document.querySelector(".aaogetumkabhi")
let song3=document.querySelector(".apnamujhetulaga")
let song4=document.querySelector(".uskahibanana")
let song5=document.querySelector(".ishqmubarak")
let song6=document.querySelector(".jeenelagahoon")
let song7=document.querySelector(".nadaanparindey")
let song8=document.querySelector(".kunfaayakun")
let song9=document.querySelector(".saaddahaq")
let ftimg=document.querySelector(".ftimg")

play[0].addEventListener("click",()=>{
    if(play[0].textContent=="play_arrow"){
    play[0].textContent = "pause";
    song1.play();
    ftimg.src="https://static.moviecrow.com/marquee/first-look-poster-of-raabta/110488_thumb_665.jpg";
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
play[4].addEventListener("click",()=>{
    if(play[4].textContent=="play_arrow"){
    play[4].textContent = "pause";
    song5.play();
    }
    else{
        play[4].textContent = "play_arrow";
        song5.pause();
    }
})
play[5].addEventListener("click",()=>{
    if(play[5].textContent=="play_arrow"){
    play[5].textContent = "pause";
    song6.play();
    }
    else{
        play[5].textContent = "play_arrow";
        song6.pause();
    }
})
play[6].addEventListener("click",()=>{
    if(play[6].textContent=="play_arrow"){
    play[6].textContent = "pause";
    song7.play();
    }
    else{
        play[6].textContent = "play_arrow";
        song7.pause();
    }
})
play[7].addEventListener("click",()=>{
    if(play[7].textContent=="play_arrow"){
    play[7].textContent = "pause";
    song8.play();
    }
    else{
        play[7].textContent = "play_arrow";
        song8.pause();
    }
})
play[8].addEventListener("click",()=>{
    if(play[8].textContent=="play_arrow"){
    play[8].textContent = "pause";
    song9.play();
    }
    else{
        play[8].textContent = "play_arrow";
        song9.pause();
    }
})
