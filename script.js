function toggleDarkMode() {
    const profileBox = document.querySelector(".profile-box");
    profileBox.classList.toggle("dark-mode");
}
const settingIcon = document.querySelector(".setting-icon");
//settingIcon.addEventListener("click", toggleDarkMode);

function openShareMenu() {
    navigator.share({
        title: 'My Profile',
        text: 'Check out my profile!',
        url: window.location.href
    }).then(() => {
        console.log('Share successful!');
    }).catch((error) => {
        console.log('Error sharing:', error);
    });
}
