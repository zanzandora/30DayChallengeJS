const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const duration = player.querySelector('.duration');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// todo: function
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.textContent = icon;
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
  progressBar.style.transition = 'width 0.4s ease';
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percent}%`;
  const currentMinutes = Math.floor(video.currentTime / 60);
  const currentSeconds = Math.floor(video.currentTime % 60);
  const durationMinutes = Math.floor(video.duration / 60);
  const durationSeconds = Math.floor(video.duration % 60);

  duration.textContent = `${currentMinutes}:${
    currentSeconds < 10 ? '0' : ''
  }${currentSeconds} / ${durationMinutes}:${
    durationSeconds < 10 ? '0' : ''
  }${durationSeconds}`;
}
function srub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
function loadDuration() {}

// todo: Event Listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

progress.addEventListener('click', srub);

skipButtons.forEach((button) => button.addEventListener('click', skip));
ranges.forEach((range) => range.addEventListener('change', handleRangeUpdate));
