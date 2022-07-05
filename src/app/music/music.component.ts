import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.playsound1();
  }

  playsound1(){
    let music = new Audio();
    music.src = "../assets/2.mp3";
    music.load();

    const songs = [{
      id: '2',
      songname: `I dont want to be you any more 
      <div class="subtitle">Billie Eilish</div>
      `,
      poster:'../../assets/2.jpg'
    },
    {
      id: '1',
      songname: `Happier 
      <div class="subtitle">Olivia Rodrigo</div>
      `,
      poster:'../../assets/1.jpg'
      },
    
      {
        id: '3',
        songname: `my worst  
        <div class="subtitle">Blackbear</div>
        `,
        poster:'../../assets/3.jpg'
      },

      {
        id: '4',
        songname: `idfc 
        <div class="subtitle">Blackbear</div>
        `,
        poster:'../../assets/4.jpg'
      },
      {
        id: '5',
        songname: `On My Way 
        <div class="subtitle">Alan Walker</div>
        `,
        poster:'../../assets/5.jpg'
      },

      {
        id: '6',
        songname: `Hot girl bummer 
        <div class="subtitle">Blackbear</div>
        `,
        poster:'../../assets/6.jpg'
      },


      {
        id: '7',
        songname: `Toxic 
        <div class="subtitle">BoyWithUke</div>
        `,
        poster:'../../assets/7.jpg'
      },



      {
        id: '8',
        songname: `On My Way 
        <div class="subtitle">Alan Walker</div>
        `,
        poster:'../../assets/8.jpg'
      },



      {
        id: '9',
        songname: `Victim 
        <div class="subtitle">hakfives</div>
        `,
        poster:'../../assets/9.jpg'
      },



      {
        id: '10',
        songname: `i feel to much  
        <div class="subtitle">Blackbear</div>
        `,
        poster:'../../assets/10.jpg'
      },


      {
        id: '11',
        songname: `Ocean Eyes  
        <div class="subtitle">Billie Eilish</div>
        `,
        poster:'../../assets/11.jpg'
      },
      {
        id: '12',
        songname: `warriors  
        <div class="subtitle">Imagine dragon</div>
        `,
        poster:'../../assets/12.jpg'
      },

      {
        id: '13',
        songname: `it will be okay 
        <div class="subtitle">shawn mendes</div>
        `,
        poster:'../../assets/13.jpg'
      },

      {
        id: '14',
        songname: `East of Eden
        <div class="subtitle">Zella Day</div>
        `,
        poster:'../../assets/14.jpg'
      },

      {
        id: '15',
        songname: `everything i wanted
 
        <div class="subtitle">Billie Eilish</div>
        `,
        poster:'../../assets/15.jpg'
      },

      {
        id: '16',
        songname: `Overwhelmed 
 
        <div class="subtitle">Royal & the Serpent</div>
        `,
        poster:'../../assets/16.jpg'
      },

      {
        id: '17',
        songname: `Overwhelmed 
 
        <div class="subtitle">Royal & the Serpent</div>
        `,
        poster:'../../assets/16.jpg'
      },
      
    ]


    Array.from(document.getElementsByClassName('songItem')).forEach((Element, i) => {
      Element.getElementsByTagName('img')[0].src = songs[i].poster;
      Element.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
    })

    let masterplay = document.getElementById("masterplay")
    let wave =document.getElementsByClassName('wave')[0]


    masterplay?.addEventListener('click', () => {
      
      if (music.paused || music.currentTime <= 0) {
        music.play();
        masterplay?.classList.remove('fa-play');
        masterplay?.classList.add('fa-pause');
        wave.classList.add("active2")
      }
      else {
        music.pause();
        masterplay?.classList.add('fa-play');
        masterplay?.classList.remove('fa-pause');
        wave.classList.remove("active2")

      }
    })

    const makeAllPlays = () => {
      Array.from(document.getElementsByClassName("playListPlay")).forEach((element) => {
        element.classList.add("fa-circle-play")
        element.classList.remove("fa-circle-pause")
      })
    }

    const makeALlBackGround = () => {
      const boxes = document.getElementsByClassName(
        'songItem',
      ) as HTMLCollectionOf<HTMLElement>;
      
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].style.backgroundColor = "rgba(105,105,170,0)";
      }
    }
   

    let index = 0;

    let poster_master_play = document.getElementById('poster_master_play');
    let title = document.getElementById('title');
    

    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
      element.addEventListener('click', (event) => {

        makeAllPlays();

        masterplay?.classList.remove('fa-play');
        masterplay?.classList.add('fa-pause');
        wave.classList.add("active2");
        
        let elementId: string = (event.target as Element).id;
        (event.target as Element).classList.remove("fa-circle-play");
        (event.target as Element).classList.add("fa-circle-pause");

        music.src = `../assets/${elementId}.mp3`;

        poster_master_play?.setAttribute('src', `../../assets/${elementId}.jpg`);
        music.play();

        poster_master_play?.setAttribute('', `../../assets/${elementId}.jpg`);
          
        

        music.addEventListener("ended", () => {
          masterplay?.classList.add('fa-play');
          masterplay?.classList.remove('fa-pause');
          wave.classList.remove("active2")
        })


        makeALlBackGround();

        
        
        
      })
    })

    let currentStart = document.getElementById('currentStart');
    let currentEnd = document.getElementById('currentEnd');
    let seek = document.getElementById('seek');
  
    const bar2 = document.querySelector('#bar2') as HTMLElement | null;
    const dot = document.querySelector('#dot1') as HTMLElement | null;

    let inputValue = (document.getElementById("seek") as HTMLInputElement).value;


    
    

    music.addEventListener('timeupdate', () => {
      let music_curr = music.currentTime;
      let music_dur = music.duration;

      
      let min = Math.floor(music_dur / 60);
      let sec = Math.floor(music_dur % 60);
      if (sec < 10) {
        sec = parseInt(`0${sec}`);
      }
      
      if (currentEnd) {
        currentEnd.innerText = `${min}:${sec} `;
      }


      let min1 = Math.floor(music_curr / 60);
      let sec1 = Math.floor(music_curr % 60);
      if (sec1 < 10) {
        sec1 = parseInt(`0${sec1}`);
      }
      
      if (currentStart) {
        currentStart.innerText = `${min1}:${sec1} `;
      }


      
      let progressbar = Math.floor((music.currentTime / music.duration) * 100);
      seek?.setAttribute('value', `${progressbar}`);
      let seekBar = seek?.getAttribute('value');

      if (bar2 != null) {
        bar2.style.width = `${seekBar}%`;
      }

      if (dot != null) {
        dot.style.left = `${seekBar}%`;
      }
      
      


    })


    seek?.addEventListener('change', () => {
      let music_dur = music.duration;

      music.currentTime = parseInt(inputValue) * music_dur / 100;
    })


    music.addEventListener('ended', () => {
      masterplay?.classList.add('fa-play');
      masterplay?.classList.remove('fa-pause');
      wave.classList.remove("active2")
    })


    let vol_icon = document.getElementById("vol_icon");
    let vol = document.getElementById('vol');
    let vol_dot = document.getElementById('vol_dot');
    let vol_bar = document.getElementsByClassName('dot')[1];


    let back=document.getElementById('back')
    let next=document.getElementById('next')
   
    back?.addEventListener('click', () => {
       index -= 0;

      if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
      }

      music.src = `../assets/${index}.mp3`;
        poster_master_play?.setAttribute('src', `../../assets/${index}.jpg`);
      music.play();

      makeAllPlays();
      
      document.getElementById(`${index}`)?.classList.remove('fa-play');
      document.getElementById(`${index}`)?.classList.add('fa-pause');
      wave.classList.remove("active2")

    })


    next?.addEventListener('click', () => {
      index -= 0;
      index += 1;

     if (index > Array.from(document.getElementsByClassName('songItem')).length ) {
       index = 1;
     }

     music.src = `../assets/${index}.mp3`;
       poster_master_play?.setAttribute('src', `../../assets/${index}.jpg`);
     music.play();

     makeAllPlays();
     
     document.getElementById(`${index}`)?.classList.remove('fa-circle-play');
     document.getElementById(`${index}`)?.classList.add('fa-circle-pause');
     wave.classList.remove("active2")

    })
    

    let left_scrol = document.getElementById('left_scroll');
    let right_scrol = document.getElementById('right_scroll');
    let pop_song = document.getElementsByClassName('pop_song')[0];

    left_scrol?.addEventListener('click', () => {
      pop_song.scrollLeft -= 330;
      
    })
    
    right_scrol?.addEventListener('click', () => {
      pop_song.scrollLeft += 330;
    })
    

    let left_scrolls = document.getElementById('left_scrolls');
    let right_scrolls = document.getElementById('right_scrolls');
    let item = document.getElementsByClassName('item')[0];

    left_scrolls?.addEventListener('click', () => {
      item.scrollLeft -= 330;
    })
    
    right_scrolls?.addEventListener('click', () => {
      item.scrollLeft += 330;
   })
  }
}


