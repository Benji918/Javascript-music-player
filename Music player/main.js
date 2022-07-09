let playBtn = document.getElementById('playBtn')
let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let audioplayer = document.getElementById('audioplayer')
let image = document.getElementById('image')
let artistName = document.getElementById('artistName')
let songName = document.getElementById('songName')

let allSongs = [

   Music1 = {
   	artist:'Ava max',
   	musicfile: 'song/Ava Max Sweet but Psycho.mp3',
   	musicname: 'Sweet but Psycho',
    artistPic: 'img/1.jpg'

   	   },

  Music2 = {
   	artist:'Maximum',
   	musicfile: 'song/- KangstaWok.mp3',
   	musicname: 'Snitch bitch',
    artistPic: 'img/2.jpg'

   	   },


    Music3 = {
   	artist:'Beyonce',
   	musicfile: 'song/Beyonce - BROWN SKIN GIRL.mp3',
   	musicname: 'BROWN SKIN GIRL',
    artistPic: 'img/3.jpg'

		  },
		  
	 Music4 = {
			artist:'Kelly Clarkson',
			musicfile: 'song/★ Kelly Clarkson - What Doesn t Kill You (Stronger) ★.mp3',
			musicname: 'What Dosent Kill you',
		 artistPic: 'img/5.jpeg'
	 
			   },

	Music5 = {
	artist:'Benjamin tenision',
	musicfile: 'song/_Next Level_ - Freestyle Trap Beat Free Rap Hip Hop Instrumental 2018 _ SeriouzBeats - Instrumentals ( 256kbps cbr ).mp3',
	musicname: 'Freestyle Trap Beat',
	artistPic: 'img/4.jpeg'
		 
				   }

]

let counter = 0
audioplayer.src= allSongs[counter].musicfile
image.src= allSongs[counter].artistPic
artistName.innerText = allSongs[counter].artist
songName.innerText = allSongs[counter].musicname


playBtn.addEventListener('click', playSong)
function playSong(){
	if(playBtn.innerHTML === '<i class="fa fa-pause"></i>'){
		playBtn.innerHTML = '<i class="fa fa-play"></i>'
		audioplayer.pause()
	}
	else if(playBtn.innerHTML === '<i class="fa fa-play"></i>'){
		playBtn.innerHTML = '<i class="fa fa-pause"></i>'
		audioplayer.play()
	}
	
}

nextBtn.addEventListener('click', nextSong)
 function nextSong(){
	 counter++
	 if(counter > allSongs.length-1){
		counter = 0;
	 }
	 audioplayer.src= allSongs[counter].musicfile
	image.src= allSongs[counter].artistPic
	artistName.innerText = allSongs[counter].artist
	songName.innerText = allSongs[counter].musicname
    audioplayer.play()

	 console.log(counter);
	 
 }

 prevBtn.addEventListener('click', prevSong)
 function prevSong(){
	 counter--
	 if(counter < 0){
		counter = allSongs.length-1
	 }
	 audioplayer.src= allSongs[counter].musicfile
	image.src= allSongs[counter].artistPic
	artistName.innerText = allSongs[counter].artist
	songName.innerText = allSongs[counter].musicname
    audioplayer.play()

	 console.log(counter);
	 
 }