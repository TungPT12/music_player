var start = () => {
    let audio = document.querySelector('#audio');
    // let tracks = document.querySelectorAll('.track');



    // let source = document.getElementsByTagName('source')[0];
    let img = document.querySelector('.header_img');
    let pause = document.querySelector(".fa-pause-circle");
    let repeat = document.querySelector(".fa-repeat");
    let play = document.querySelector(".fa-play-circle");
    let statusPlay = false;
    let repeatStatus = false;


    // tracks.forEach( (track, index) => {
    //     track.onclick = () => {
    //         let isActive = document.querySelector('.is_active')
    //         if(isActive != null) {
    //             isActive.pause();
    //             isActive.classList.remove('is_active')
    //         }
    //         audioList[index].classList.add('is_active')
    //         audioList[index].play();
    //         img.style.animationPlayState = 'running';
            
    //     }
    // });

    let playSong = () => {
        play.onclick = () => {
            img.style.tran
            img.style.animationPlayState = 'running';
            console.log([img.style])
            play.classList.add('display-none')
            pause.classList.remove('display-none')  
            audio.play();  
        }
    }
    
    let pauseSong = () => {
        pause.onclick = () => {
            
            img.style.animationPlayState = 'paused';
            pause.classList.add('display-none')
            play.classList.remove('display-none')
            audio.pause();
        }
    }

    let repeatSong = () => {
        repeat.onclick = () => {
            if(!repeatStatus){
                let loop = document.createAttribute('loop')
                audio.setAttributeNode(loop)
                repeat.style.color = "#0000FF"
                repeatStatus = true;
            }else {
                audio.removeAttribute('loop')
                repeat.style.color = "#000"
                repeatStatus = false
            }

        }
    }
    repeatSong()
    playSong();
    pauseSong();
}
start()
