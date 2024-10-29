document.addEventListener('DOMContentLoaded', function () {
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = document.getElementById('music-icon');
    const audio = document.getElementById('background-music');

    audio.play().catch(function () {
        // Autoplay was prevented
        // Update icon to muted state
        musicIcon.src = 'images/volume-mute-icon.png';
    });

    let isPlaying = true;

    musicToggle.addEventListener('click', function () {
        if (isPlaying) {
            audio.pause();
            musicIcon.src = 'images/volume-mute-icon.png';
        } else {
            audio.play();
            musicIcon.src = 'images/volume-unmute-icon.png';
        }
        isPlaying = !isPlaying;
    });
});
