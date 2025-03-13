// Song data array
const songs = [
  {
    name: "Sunrise",
    author: "Tanger",
    link: "https://youtube.com/@Tangermusic",
    file: "songs/Sunrise/audio.wav",
    picture: "songs/Sunrise/photo.png"
  },
  {
    name: "Cherish",
    author: "Tanger",
    link: "https://youtube.com/@Tangermusic",
    file: "songs/cherish/audio.wav",
    picture: "songs/cherish/photo.png"
  }
];

// Function to initialize the song and player
function initializeSong() {
  const audio = document.getElementById('audio-player');
  const randomSong = songs[Math.floor(Math.random() * songs.length)];
  const artistCredit = document.getElementById('artist-credit');
  const artistPhoto = document.getElementById('artist-photo');
  const trackTitle = document.getElementById('track-title');

  // Set initial song details
  artistCredit.innerText = randomSong.author;
  artistCredit.href = randomSong.link;
  audio.src = randomSong.file;
  artistPhoto.src = randomSong.picture;
  trackTitle.innerText = randomSong.name;

  // Set total time after audio metadata is loaded
  audio.addEventListener('loadedmetadata', () => {
    const totalTimeEl = document.querySelector('.music-player .total-time');
    totalTimeEl.innerText = formatTime(audio.duration);
  });
}

// Function to initialize audio progress and controls
function initializePlayer() {
  const audio = document.getElementById('audio-player');
  const progressBar = document.querySelector('.music-player .progress-bar');
  const progress = document.querySelector('.music-player .progress');
  const currentTimeEl = document.querySelector('.music-player .current-time');

  // Update current time and progress bar as audio plays
  audio.addEventListener('timeupdate', () => {
    currentTimeEl.innerText = formatTime(audio.currentTime);
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${percentage}%`;
  });

  // Allow clicking on the progress bar to seek
  progressBar.addEventListener('click', (e) => {
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * audio.duration;
    audio.currentTime = newTime;
  });

  // Initialize volume and progress bar interaction
  setVolume(50);  // Set default volume to 50%
  document.querySelector('.volume-slider').addEventListener('input', function () {
    setVolume(this.value);
  });
}

// Play/Pause toggle function
function togglePlayPause() {
  const audio = document.getElementById('audio-player');
  const playIcon = document.querySelector('.music-player .play-icon');
  const pauseIcon = document.querySelector('.music-player .pause-icon');

  if (audio.paused) {
    audio.play().then(() => {
      playIcon.style.display = 'none'; // Hide play icon
      pauseIcon.style.display = 'block'; // Show pause icon
    }).catch(error => {
      console.error("Playback prevented:", error);
    });
  } else {
    audio.pause(); // Pause the audio
    playIcon.style.display = 'block'; // Show play icon
    pauseIcon.style.display = 'none'; // Hide pause icon
  }
}

// Volume toggle function (mute/unmute)
function toggleVolume() {
  const audio = document.getElementById('audio-player');
  const volumeSlider = document.querySelector('.music-player .volume-slider');
  if (audio.volume > 0) {
    audio.volume = 0;
    volumeSlider.value = 0;
  } else {
    audio.volume = 1;
    volumeSlider.value = 100;
  }
}

// Set volume based on slider value
function setVolume(value) {
  const audio = document.getElementById('audio-player');
  audio.volume = Math.pow(2, value / 100) - 1;
}

// Format time in MM:SS format
function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${pad(minutes)}:${pad(seconds)}`;
}

// Add leading zero to single-digit numbers
function pad(num) {
  return num < 10 ? '0' + num : num;
}

// Run the initializations
window.addEventListener('load', () => {
  initializeSong();  // Initialize song and its details
  initializePlayer();  // Initialize audio player and controls
});
