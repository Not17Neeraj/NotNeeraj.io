const audio = document.getElementById('audio');
const playButton = document.getElementById('play');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const progressBar = document.getElementById('progress-bar');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');

const songs = [
    {
        title: 'Song 1',
        artist: 'Artist 1',
        src: 'I-Wanna-Be-Yours (1).mp3'
    },
    {
        title: 'Song 2',
        artist: 'Artist 2',
        src: 'sh.mp3'
    }
];

let currentSongIndex = 0;

function loadSong(index) {
    const song = songs[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
}

function playSong() {
    audio.play();
    playButton.textContent = 'Pause';
}

function pauseSong() {
    audio.pause();
    playButton.textContent = 'Play';
}

playButton.addEventListener('click', () => {
    if (audio.paused) {
        playSong();
    } else {
        pauseSong();
    }
});

nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
});

audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

progressBar.addEventListener('input', () => {
    const time = (progressBar.value / 100) * audio.duration;
    audio.currentTime = time;
});

// Initialize
loadSong(currentSongIndex);
