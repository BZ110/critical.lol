 // Created by Critical, BZ110
 function addRandomParagraph() {
    const phrases = [
      "English is not my strong suit",
      "How did I score socialist-communist",
      "I was born for a reason",
      "China should release more AI",
      "Do not ask me to do web development",
      "My code runs... eventually",
      "404: Life not found",
      "I prefer my food like my code: spaghetti",
      "I love you all",
      "AI is cool, but have you tried communism",
      "Git commit, pray, push",
      "I put the 'fun' in dysfunction",
      "I love you like I love oxygen—unconditionally, but also desperately",
      "Cupid missed, twice-so table for one, please",
      "AI is so expensive, I'm backpropagating by hand",
    ];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    const descriptionElement = document.querySelector('.description');
    const newParagraph = document.createElement('p');
    newParagraph.innerText = '"' + randomPhrase + '"';
    descriptionElement.appendChild(newParagraph);
  }

  function copyDiscordID() {
    const Discord_ID = "criticalking.";
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
    overlay.classList.add('hidden');
    setTimeout(() => {
      overlay.style.display = 'none';
      togglePlayPause(1); // Start playback after fade-out
    }, 1000); // Match the CSS transition duration.
  }

  window.addEventListener('load', () => {
    addRandomParagraph();
  });