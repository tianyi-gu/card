document.querySelector('.card-container').addEventListener('mouseenter', function() {
    const cardContainer = this;
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const progressBar = document.querySelector('.progress-bar');

    // Start the progress bar animation
    progressBarContainer.classList.add('active');
    progressBar.style.width = '100%';

    cardContainer.flipTimeout = setTimeout(function() {
        cardContainer.classList.add('flipped');
        progressBarContainer.classList.remove('active');
        progressBarContainer.classList.add('finished');
    }, 1500);

    cardContainer.progressTimeout = setTimeout(function() {
        progressBarContainer.classList.remove('finished');
        progressBar.style.width = '0';
    }, 2000);
});

document.querySelector('.card-container').addEventListener('mouseleave', function() {
    clearTimeout(this.flipTimeout);
    clearTimeout(this.progressTimeout);
    this.classList.remove('flipped');
    
    const progressBarContainer = document.querySelector('.progress-bar-container');
    const progressBar = document.querySelector('.progress-bar');

    progressBarContainer.classList.remove('active');
    progressBar.style.width = '0';
});