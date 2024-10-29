let play = document.querySelectorAll(".play");
let bg = document.querySelector(".favimg");
let more = document.querySelector(".favicon");
let ftimg = document.querySelector(".ftimg")
let song = document.querySelectorAll(".favsong")
let ftplay = document.querySelector(".footplay")
let fticon = document.querySelector(".footicon")
let img = document.querySelectorAll(".simg")
let ar1 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let current;

for (let i = 0; i <= 8; i++) {
    play[i].addEventListener("click", () => {
        if (play[i].textContent == "play_arrow") {
            play[i].textContent = "pause";
            if (current !== undefined && i !== current) {
                play[current].textContent = "play_arrow";
                song[current].pause();
            }
            current = i;
            song[i].play();
        }
        else {
            play[i].textContent = "play_arrow";
            song[i].pause();
        }
    })
}
function stopSong() {
    for (sing of song) {
        sing.pause();
    }
}
function pause() {
    for (let i = 0; i <= 8; i++) {
        play[i].textContent = "play_arrow"
    }
}
ftplay.addEventListener("click", () => {
    if (ftplay.textContent == "play_arrow") {
        ftplay.textContent = "pause";
    }
    else {
        ftplay.textContent = "play_arrow";
        stopSong();
        pause();
    }
})

