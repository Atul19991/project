console.log("welcome to spotify");
 let songIndex=0;
 let audioElement =new Audio('songs/1.mp3');
 let masterPlay=document.getElementById('masterPlay');
 let myProgressBar=document.getElementById('myProgressBar');
 let gif=document.getElementById('gif');
 let masterSongName=document.getElementById('masterSongName');
 let songItems = Array.from(document.getElementsByClassName('songitem'));
 //audioelement.play()
 //audioelement.play()
 //audioelement.play(;)

 let songs = [
      {songName: "Warriyo - Mo ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
      {songName: "Cielo - Humrtalsa-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
      {songName: "DEAF KEV - Invincible ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
      {songName: "Different Heaven & EH!DE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
      {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
      {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
      {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
      {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
      {songName: "Tumhari Kasam - Salam", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
 ]
 songItems.forEach((element, i)=>{ 
      element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
      element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
  })
 masterPlay.addEventListener('click',()=>{
      if(audioElement.paused || audioElement.currentTime<=0){
            audioElement.play();
              masterPlay.classList.remove('fa-circle-play');
              masterPlay.classList.add('fa-circle-pause');
              gif.style.opacity=1;
       }
       else {
            audioElement.pause();
              masterPlay.classList.remove('fa-circle-pause');
              masterPlay.classList.add('fa-circle-play');
              gif.style.opacity=0;
       }
 })
 audioElement.addEventListener('timeupdate', ()=>{ 
      // Update Seekbar
     // console.log('timeupdate');
      progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
     // console.log(progress);
      myProgressBar.value = progress;
  })
  myProgressBar.addEventListener('change', ()=>{
      audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
  })
  const makeAllPlays = ()=>{
     Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
         element.classList.remove('fa-circle-pause');
         element.classList.add('fa-circle-play');
     })
 }
 Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.addEventListener('click', (e)=>{ 
         makeAllPlays();
         songIndex = parseInt(e.target.id);
         e.target.classList.remove('fa-circle-play');
         e.target.classList.add('fa-circle-pause');
         audioElement.src = `songs/${songIndex+1}.mp3`;
         masterSongName.innerText = songs[songIndex].songName;
         audioElement.currentTime = 0;
         audioElement.play();
         gif.style.opacity = 1;
         masterPlay.classList.remove('fa-circle-play');
         masterPlay.classList.add('fa-circle-pause');
     })
 })
 document.getElementById('next').addEventListener('click', ()=>{
     if(songIndex>8){
         songIndex = 0
     }
     else{
         songIndex += 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
 
 })
 
 document.getElementById('previous').addEventListener('click', ()=>{
     if(songIndex<=0){
         songIndex = 0
     }
     else{
         songIndex -= 1;
     }
     audioElement.src = `songs/${songIndex+1}.mp3`;
     masterSongName.innerText = songs[songIndex].songName;
     audioElement.currentTime = 0;
     audioElement.play();
     masterPlay.classList.remove('fa-circle-play');
     masterPlay.classList.add('fa-circle-pause');
 })
  
  

 
 