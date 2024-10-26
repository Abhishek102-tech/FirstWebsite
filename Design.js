let btn1=document.querySelector(".box1");
let btn2=document.querySelector(".box2");
let btn3=document.querySelector(".box3");
let btn4=document.querySelector(".box4");
let btn5=document.querySelector(".box5");
let btn6=document.querySelector(".box6");
let bg=document.querySelector(".dsgimg");
let mode="on";
let mode1="on";
let mode2="on";
let mode3="on";
let mode4="on";
let mode5="on";

btn1.addEventListener("click",()=>{
    if(mode=="on"){
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/944291.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        bg.style.backgroundSize="cover";
        mode="off";
        mode1="on";
        mode2="on";
        mode3="on";
        mode4="on";
        mode5="on";
    }
    else{
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/2130690.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        mode="on";
    }
})
btn2.addEventListener("click",()=>{
    if(mode1=="on"){
        bg.style.backgroundImage="url('https://th.bing.com/th/id/OIP.XlzitQh6UDoLKpks9O2rlgHaEo?rs=1&pid=ImgDetMain')";
        bg.style.backgroundRepeat="no-repeat";
        bg.style.backgroundSize="cover";
        mode1="off";
        mode="on";
        mode2="on";
        mode3="on";
        mode4="on";
        mode5="on";
    }
    else{
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/2130690.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        mode1="on";
    }
})
btn3.addEventListener("click",()=>{
    if(mode2=="on"){
        bg.style.backgroundImage=" url('https://images3.alphacoders.com/100/1007428.jpg')"; 
        bg.style.backgroundRepeat="no-repeat";
        bg.style.backgroundSize="cover";
        mode2="off";
        mode="on";
        mode1="on";
        mode3="on";
        mode4="on";
        mode5="on";
    }
    else{
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/2130690.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        mode2="on";
    }
})
btn4.addEventListener("click",()=>{
    if(mode3=="on"){
        bg.style.backgroundImage=" url('https://wallpapercave.com/wp/wp3113575.jpg')"; 
        bg.style.backgroundRepeat="no-repeat";
        bg.style.backgroundSize="cover";
        mode3="off";
        mode="on";
        mode2="on";
        mode1="on";
        mode4="on";
        mode5="on";
    }
    else{
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/2130690.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        mode3="on";
    }
})
btn5.addEventListener("click",()=>{
    if(mode4=="on"){
        bg.style.backgroundImage=" url('https://wallpaperaccess.com/full/59110.png')"; 
        bg.style.backgroundRepeat="no-repeat";
        bg.style.backgroundSize="cover";
        mode4="off";
        mode="on";
        mode2="on";
        mode3="on";
        mode1="on";
        mode5="on";
    }
    else{
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/2130690.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        mode4="on";
    }
})
btn6.addEventListener("click",()=>{
    if(mode5=="on"){
        bg.style.backgroundImage=" url('https://staticg.sportskeeda.com/editor/2023/05/59948-16831302812524-1920.jpg')"; 
        bg.style.backgroundRepeat="no-repeat";
        bg.style.backgroundSize="cover";
        mode5="off";
        mode="on";
        mode2="on";
        mode3="on";
        mode4="on";
        mode1="on";
    }
    else{
        bg.style.backgroundImage="url('https://wallpaperaccess.com/full/2130690.jpg')";
        bg.style.backgroundRepeat="no-repeat";
        mode5="on";
    }
})