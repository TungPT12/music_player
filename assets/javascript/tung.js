let audio = document.querySelector("#audio");
let img = document.querySelector('.header_img');
let pause = document.querySelector(".fa-pause-circle");
let play = document.querySelector(".fa-play-circle");

var playSong = (classSong, imgLink, nameSong) => {
  let elementNameSong = document.querySelector(`.${classSong}`)
  elementNameSong.onclick = () => {
    img.style.animationPlayState = 'running';
    img.src = imgLink;
    audio.src = `./assets/tracks/${nameSong}.mp3`
    play.classList.add('display-none')
    pause.classList.remove('display-none')
    audio.play();
  }
}

playSong('track1', 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2016/04/28/9/a/5/b/1461818138466.jpg', 'SoldOut')
playSong('track2', 'https://i.ytimg.com/vi/4yI_sl_WvnU/maxresdefault.jpg', 'Unstoppable')
playSong('track3', 'https://image-us.24h.com.vn/upload/4-2022/images/2022-11-03/mono-4-1667456729-835-width660height444.jpg', 'WaitingForYou')
playSong('track4', 'https://i.ytimg.com/vi/red9YvYlPWg/maxresdefault.jpg', 'Cuối_Cùng_Thì')



















// function formatTime(sec_num) {
//     let hours = Math.floor(sec_num / 3600);
//     let minutes = Math.floor((sec_num - hours * 3600) / 60);
//     let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

//     hours = hours < 10 ? (hours > 0 ? '0' + hours : 0) : hours;

//     if (minutes < 10) {
//         minutes = '0' + minutes;
//     }
//     if (seconds < 10) {
//         seconds = '0' + seconds;
//     }
//     return (hours !== 0 ? hours + ':' : '') + minutes + ':' + seconds;
// }

// function getDuration(music) {
//     return new Promise(function (resolve) {
//       music.addEventListener('loadedmetadata', function () {
//         const time = formatTime(music.duration);

//         resolve(time);
//       });
//     });
//   }
