// Created by Critical, BZ110
function addRandomParagraph() {
  const phrases = RANDOM_THINGS;
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  const descriptionElement = document.querySelector('.description');
  const newParagraph = document.createElement('p');
  newParagraph.innerText = '"' + randomPhrase + '"';
  descriptionElement.appendChild(newParagraph);
}

function copyDiscordID() {
  const Discord_ID = SOCIAL_MEDIA.DISCORD;
  navigator.clipboard.writeText(Discord_ID).then(() => {
    showNotification("Discord ID copied to clipboard!");
  }).catch(err => {
    showNotification("Failed to copy Discord ID");
  });
}

function showNotification(message) {
  if (window.rateLimitNotification === true)
    return;
  window.rateLimitNotification = true;

  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.innerText = message;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.classList.add('show');
  }, 100);

  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);

  setTimeout(() => {
    notification.remove();
    window.rateLimitNotification = false;
  }, 4000);
}

// START button click: fade overlay, reveal content, and start audio.
function startSite() {
  const overlay = document.getElementById('overlay');
  addRandomParagraph();
  overlay.classList.add('hidden');
  setTimeout(() => {
    overlay.style.display = 'none';
    togglePlayPause(1); // Start playback after fade-out
  }, 1000); // Match the CSS transition duration.
}
