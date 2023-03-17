document.addEventListener('DOMContentLoaded', () => {
    const symbolPlay = '⯈';
    const symbolPause = '❚ ❚';
    const files = ['Nature-8399','River-655','Waterfall-941','Wave-2737'];
  
    const player = document.querySelector('#vidPlayer');
    const playBtn = document.querySelector('#play');
    const stopBtn = document.querySelector('#stop');
    const volumeSlider = document.querySelector('#volume');
    const progressFilled = document.querySelector('#progressFilled');
    const videoList = document.querySelector('aside');
  
    // Create video list
    files.forEach(file => {
      const img = document.createElement('img');
      img.src = `images/${file}.jpg`;
      img.addEventListener('click', () => {
        player.src = `videos/${file}.mp4`;
        player.play();
      });
      videoList.appendChild(img);
    });
  
    // Progress bar
    const updateProgress = () => {
      const progress = (player.currentTime / player.duration) * 100;
      progressFilled.style.flexBasis = `${progress}%`;
    };
    player.addEventListener('timeupdate', updateProgress);
  
    // Play/Pause button
    const togglePlay = () => {
      const isPlaying = player.paused;
      player.paused ? player.play() : player.pause();
      playBtn.textContent = isPlaying ? symbolPause : symbolPlay;
    };
    playBtn.addEventListener('click', togglePlay);
    player.addEventListener('play', () => playBtn.textContent = symbolPause);
    player.addEventListener('pause', () => playBtn.textContent = symbolPlay);
  
    // Stop button
    const stopVideo = () => {
      player.currentTime = 0;
      player.pause();
      playBtn.textContent = symbolPlay;
      updateProgress();
    };
    stopBtn.addEventListener('click', stopVideo);
  
    // Volume slider
    volumeSlider.addEventListener('input', () => {
      player.volume = volumeSlider.value;
    });
  });
  