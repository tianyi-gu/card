const cardContainer = document.querySelector('.card-container');
const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.querySelector('.progress-bar');
const hoverMessage = document.querySelector('.hover-message');

cardContainer.addEventListener('mouseenter', function() {
    // Check if the card is already flipped
    if (!cardContainer.classList.contains('flipped')) {
        // Hide the hover message
        hoverMessage.classList.add('hidden');

        // Start the progress bar animation
        progressBarContainer.classList.add('active');
        progressBar.style.width = '100%';

        cardContainer.flipTimeout = setTimeout(function() {
            cardContainer.classList.add('flipped');
            progressBarContainer.classList.remove('active');
            progressBarContainer.classList.add('finished');
        }, 1500); // Card flips after 1.5 seconds of hover

        cardContainer.progressTimeout = setTimeout(function() {
            progressBarContainer.classList.remove('finished');
            progressBar.style.width = '0';
        }, 2000); // Reset the progress bar after 2 seconds
    }
});

cardContainer.addEventListener('mouseleave', function() {
    if (!cardContainer.classList.contains('flipped')) {
        clearTimeout(this.flipTimeout);
        clearTimeout(this.progressTimeout);

        // Reset the progress bar and shadow
        progressBarContainer.classList.remove('active');
        progressBar.style.width = '0';
        hoverMessage.classList.remove('hidden');
    }
});