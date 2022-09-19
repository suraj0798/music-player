console.log("wrlcome to letsplay")

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/_Arcando - When I'm With You [NCS Release].mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songitem"));
let songs = [
    {songName: "_Arcando - When I'm With You [NCS Release]", filePath: "songs/_Arcando - When I'm With You [NCS Release].mp3", coverPath: "covers/_Arcando - When I'm With You [NCS Release].jpg"},
    {songName: "_Mblue - Follow Me [NCS Release]", filePath: "songs/_Mblue - Follow Me [NCS Release].mp3", coverPath: "covers/_Mblue - Follow Me [NCS Release].jpg"},
    {songName: "_PLEEG - Home [NCS Release]", filePath: "songs/_PLEEG - Home [NCS Release].mp3", coverPath: "covers/_PLEEG - Home [NCS Release].jpg"},
    {songName: "32Stitches & CHENDA, Harley Bird - Freedom [NCS Release]", filePath: "songs/32Stitches & CHENDA, Harley Bird - Freedom [NCS Release].mp3", coverPath: "covers/32Stitches & CHENDA, Harley Bird - Freedom [NCS Release].jpg"},
    {songName: "BEAUZ - Illusion (feat. Crunr) [NCS Release]", filePath: "songs/BEAUZ - Illusion (feat. Crunr) [NCS Release].mp3", coverPath: "covers/BEAUZ - Illusion (feat. Crunr) [NCS Release].jpg"},
    {songName: "Facading - Tonight [NCS Release]", filePath: "songs/Facading - Tonight [NCS Release].mp3", coverPath: "covers/Facading - Tonight [NCS Release].jpg"},
    {songName: "JOXION - Talk That Way [NCS Release]", filePath: "songs/JOXION - Talk That Way [NCS Release].mp3", coverPath: "covers/JOXION - Talk That Way [NCS Release].jpg"},
    {songName: "Lost Identities x Robbie Rosen - Moments (Acoustic Version) [NCS Release]", filePath: "songs/Lost Identities x Robbie Rosen - Moments (Acoustic Version) [NCS Release].mp3", coverPath: "covers/Lost Identities x Robbie Rosen - Moments (Acoustic Version) [NCS Release].jpg"},
    {songName: "Tollef - Like A Stone [NCS Release]", filePath: "songs/Tollef - Like A Stone [NCS Release].mp3", coverPath: "covers/Tollef - Like A Stone [NCS Release].jpg"},
    {songName: "WBN x Mojnz - Radio [NCS Release]", filePath: "songs/WBN x Mojnz - Radio [NCS Release].mp3", coverPath: "covers/WBN x Mojnz - Radio [NCS Release].jpg"},
  
]

songitem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

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

