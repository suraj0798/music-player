console.log("wrlcome to letsplay")

// initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
    {songName: "No Lie", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/2.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/3.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/4.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/5.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/6.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/7.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/8.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/9.mp3", coverPath: "covers/1.jpg"}
    {songName: "No Lie", filePath: "songs/10.mp3", coverPath: "covers/1.jpg"}
  
]

//play/pause click
masterPlay.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
        
    }
})

//listen to event
myProgressBar.addEventListener("timeupdate",()=>{
    console.log("timeupdate")
})

