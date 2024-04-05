let video = document.getElementById('vid')
video.addEventListener('mouseover',()=>{
    video.play();
})
video.addEventListener('mouseout',()=>{
    video.pause();
})