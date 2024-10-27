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
let song=document.querySelector(".favsong")
let ftplay=document.querySelector(".footplay")
let fticon=document.querySelector(".footicon")

play[0].addEventListener("click",()=>{
    if(play[0].textContent=="play_arrow"){
    play[0].textContent = "pause";
    ftplay.textContent = "pause";
    song1.play();
    ftimg.src="https://static.moviecrow.com/marquee/first-look-poster-of-raabta/110488_thumb_665.jpg";
    }
    else{
        play[0].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song1.pause();
    }
})
play[1].addEventListener("click",()=>{
    if(play[1].textContent=="play_arrow"){
    play[1].textContent = "pause";
    ftplay.textContent = "pause";
    song2.play();
    ftimg.src="https://i.pinimg.com/originals/ae/23/40/ae2340e361108bde12879bfc733b3216.jpg";
    }
    else{
        play[1].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song2.pause();
    }
})
play[2].addEventListener("click",()=>{
    if(play[2].textContent=="play_arrow"){
    play[2].textContent = "pause";
    ftplay.textContent = "pause";
    song3.play();
    ftimg.src="https://pagal.com.in/assets/images/Apnaa_Mujhe_Tu_Lagaa_-_1920_-_Evil_Returns_128_Kbps.jpeg";
    }
    else{
        play[2].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song3.pause();
    }
})
play[3].addEventListener("click",()=>{
    if(play[3].textContent=="play_arrow"){
    play[3].textContent = "pause";
    ftplay.textContent = "pause";
    song4.play();
    ftimg.src="https://pagal.com.in/assets/images/Apnaa_Mujhe_Tu_Lagaa_-_1920_-_Evil_Returns_128_Kbps.jpeg";
    }
    else{
        play[3].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song4.pause();
    }
})
play[4].addEventListener("click",()=>{
    if(play[4].textContent=="play_arrow"){
    play[4].textContent = "pause";
    song5.play();
    ftplay.textContent = "pause";
    ftimg.src="https://pagal.com.in/assets/images/Ishq_Mubarak_-_Tum_Bin_2_128_Kbps.jpeg";
    }
    else{
        play[4].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song5.pause();
    }
})
play[5].addEventListener("click",()=>{
    if(play[5].textContent=="play_arrow"){
    play[5].textContent = "pause";
    ftplay.textContent = "pause";
    song6.play();
    ftimg.src="https://pagal.com.in/assets/images/Jeene_Laga_Hoon_-_Ramaiya_Vastavaiya_128_Kbps.jpeg";
    }
    else{
        play[5].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song6.pause();
    }
})
play[6].addEventListener("click",()=>{
    if(play[6].textContent=="play_arrow"){
    play[6].textContent = "pause";
    ftplay.textContent = "pause";
    song7.play();
    ftimg.src="https://pagal.com.in/assets/images/Nadaan_Parindey_(Rockstar)_128_Kbps.jpeg";
    }
    else{
        play[6].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song7.pause();
    }
})
play[7].addEventListener("click",()=>{
    if(play[7].textContent=="play_arrow"){
    play[7].textContent = "pause";
    ftplay.textContent = "pause";
    song8.play();
    ftimg.src="https://pagal.com.in/assets/images/Nadaan_Parindey_(Rockstar)_128_Kbps.jpeg";
    }
    else{
        play[7].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song8.pause();
    }
})
play[8].addEventListener("click",()=>{
    if(play[8].textContent=="play_arrow"){
    play[8].textContent = "pause";
    ftplay.textContent = "pause";
    song9.play();
    ftimg.src="https://pagal.com.in/assets/images/Nadaan_Parindey_(Rockstar)_128_Kbps.jpeg";
    }
    else{
        play[8].textContent = "play_arrow";
        ftplay.textContent = "play_arrow";
        song9.pause();
    }
})

stopsong=()=>{
    for(sing of song){
        sing.pause();
    }
}
pause=()=>{
    for(let i=0;i<=8;i++){
        play[i].textContent = "play_arrow"
    }
}
ftplay.addEventListener("click",()=>{
    if(ftplay.textContent=="play_arrow"){
        ftplay.textContent = "pause";
    }
    else{
        ftplay.textContent = "play_arrow";
        stopsong();
        pause();
    }
})

