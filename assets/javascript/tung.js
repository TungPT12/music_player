let audio = document.querySelector("#audio");
console.log(audio);
let img = document.querySelector('.header_img');
let pause = document.querySelector(".fa-pause-circle");
let play = document.querySelector(".fa-play-circle");
let nowPlayingSong = document.querySelector('.header_name--song')
let musics = [
  {
    img: 'https://avatar-ex-swe.nixcdn.com/singer/avatar/2016/04/28/9/a/5/b/1461818138466.jpg',
    name: 'Sold Out',
    song: 'SoldOut',
    singer: 'Hawk Nelson',
    time: '3:29'
  },
  {
    img: 'https://i.ytimg.com/vi/4yI_sl_WvnU/maxresdefault.jpg',
    name: 'Unstoppable',
    song: 'Unstoppable',
    singer: 'Sia',
    time: '4:11'
  },
  {
    img: 'https://image-us.24h.com.vn/upload/4-2022/images/2022-11-03/mono-4-1667456729-835-width660height444.jpg',
    name: 'Waiting For You',
    song: 'WaitingForYou',
    singer: 'Mono',
    time: '4:25'
  },
  {
    img: 'https://i.ytimg.com/vi/red9YvYlPWg/maxresdefault.jpg',
    name: 'Cuối Cùng Thì',
    song: 'Cuối_Cùng_Thì',
    singer: 'Jack',
    time: '3:40'
  }
]
var playSong = (track, imgLink, nameSong, nameSongPlaying) => {
    track.onclick = () => {
    nowPlayingSong.innerHTML = nameSongPlaying
    img.style.animationPlayState = 'running';
    img.src = imgLink;
    audio.src = `./assets/tracks/${nameSong}.mp3`
    play.classList.add('display-none')
    pause.classList.remove('display-none')
    audio.play();
  }
}

var queryList = (element) => {
  return document.querySelectorAll(`.${element}`)
}

let eventListSong = () => {
  let listSong = queryList('track');
  listSong.forEach((track, index) => {
    playSong(track, musics[index].img, musics[index].song, musics[index].name)

    
  });
}

var renderSong = () => {
  let listSong = musics.map((music) => {
    return `<div class="track" >
                <img src="${music.img}" alt="" class="track__img">
                <div class="track__infor">
                    <p class="track__infor-song">${music.name}</p>
                    <p class="track__infor-singer">${music.singer}</p>
                </div>
                <p class="track__time">4:13</p>
            </div>`
  });
  let elements = listSong.join('');
  let wrapperElement = document.querySelector("#wrapper");
  wrapperElement.innerHTML = elements

  eventListSong();
}
renderSong()























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
