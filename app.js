// Add event listen on the Parent div
document.querySelector('.keys').addEventListener('click', playSound);

function playSound(e) {
    // Get all the audio files
    let audioFiles = document.querySelectorAll('audio');

    // Check if any button is clicked
    if (e.target.localName === 'kbd') {
        // add playing class to the clicked button
        e.target.parentElement.classList.toggle('playing')

        // loop through the audiofiles to find the sound of the clicked button
        for (let i = 0; i < audioFiles.length; i++) {
            if (e.target.parentElement.dataset.key === audioFiles[i].dataset.key) {
                audioFiles[i].play();
                // set a timeout for the playing class to be toggeled off
                setTimeout(() => {
                    e.target.parentElement.classList.toggle('playing')
                }, 500);
            }
        }

    }
}