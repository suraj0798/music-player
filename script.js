console.log("wrlcome to letsplay")

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("_Arcando - When I'm With You [NCS Release].mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
    {songName: "_Arcando - When I'm With You [NCS Release]", filePath: "songs/_Arcando - When I'm With You [NCS Release].mp3", coverPath: "covers/1.jpg"},
    {songName: "_Mblue - Follow Me [NCS Release]", filePath: "songs/_Mblue - Follow Me [NCS Release].mp3", coverPath: "covers/2.jpg"},
    {songName: "No Lie", filePath: "songs/_PLEEG - Home [NCS Release].mp3", coverPath: "covers/3.jpg"},
    {songName: "No Lie", filePath: "songs/32Stitches & CHENDA, Harley Bird - Freedom [NCS Release].mp3", coverPath: "covers/4.jpg"},
    {songName: "No Lie", filePath: "songs/BEAUZ - Illusion (feat. Crunr) [NCS Release].mp3", coverPath: "covers/5.jpg"},
    {songName: "No Lie", filePath: "songs/Facading - Tonight [NCS Release].mp3", coverPath: "covers/6.jpg"},
    {songName: "No Lie", filePath: "songs/JOXION - Talk That Way [NCS Release].mp3", coverPath: "covers/7.jpg"},
    {songName: "No Lie", filePath: "songs/Lost Identities x Robbie Rosen - Moments (Acoustic Version) [NCS Release].mp3", coverPath: "covers/8.jpg"},
    {songName: "No Lie", filePath: "songs/Tollef - Like A Stone [NCS Release].mp3", coverPath: "covers/9.jpg"},
    {songName: "No Lie", filePath: "songs/WBN x Mojnz - Radio [NCS Release].mp3", coverPath: "covers/10.jpg"},
  
]

//play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        // gif.style.opacity = 1;     
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
        // gif.style.opacity = 0;  
    }
})

//listen to event
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate");
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

