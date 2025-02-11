      // Toggle Play/Pause and update icons.
      function togglePlayPause(x = 0) {
        const audio = document.getElementById('audio-player');
        const playIcon = document.querySelector('.music-player .play-icon');
        const pauseIcon = document.querySelector('.music-player .pause-icon');

        if (audio.paused) {
          audio.play().then(() => {
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
          }).catch(error => {
            console.error("Playback prevented:", error);
          });
        } else if (!x) {
          audio.pause();
          playIcon.style.display = 'block';
          pauseIcon.style.display = 'none';
        }
      }

      // Toggle Volume: if on, mute; if muted, restore volume.
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

      // Set volume based on the slider.
      function setVolume(value) {
        const audio = document.getElementById('audio-player');
        audio.volume = value / 100;
      }

      // Update the progress bar and time labels.
      const audio = document.getElementById('audio-player');
      const progressBar = document.querySelector('.music-player .progress-bar');
      const progress = document.querySelector('.music-player .progress');
      const currentTimeEl = document.querySelector('.music-player .current-time');
      const totalTimeEl = document.querySelector('.music-player .total-time');

      audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.innerText = formatTime(audio.duration);
      });

      audio.addEventListener('timeupdate', () => {
        currentTimeEl.innerText = formatTime(audio.currentTime);
        const percentage = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percentage + '%';
      });

      // Format seconds into MM:SS.
      function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${pad(minutes)}:${pad(seconds)}`;
      }
      function pad(num) {
        return num < 10 ? '0' + num : num;
      }

      // Allow clicking on the progress bar to seek.
      progressBar.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newTime = (clickX / rect.width) * audio.duration;
        audio.currentTime = newTime;
      });