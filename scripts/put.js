/*
    Setting the stuff needed on the website.
    You don't need to touch this.
*/
window.addEventListener('load', () => {
    const nameElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");
    const xElement = document.getElementById("twitter-btn");
    const gmailElement = document.getElementById("gmail-btn");
    const githubElement = document.getElementById("github-btn");

    nameElement.innerText = YOUR_NAME;
    descriptionElement.innerText = YOUR_DESCRIPTION;
    xElement.href = "https://x.com/" + SOCIAL_MEDIA.TWITTER;
    gmailElement.href = "mailto:" + SOCIAL_MEDIA.GMAIL;
    githubElement.href = "https://github.com/" + SOCIAL_MEDIA.GITHUB;
})
