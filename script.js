const cardContainers = document.querySelectorAll('.card-container');
const mainCard = document.querySelector('#main-card');
const progressBarContainer = document.querySelector('.progress-bar-container');
const progressBar = document.querySelector('.progress-bar');
const hoverMessage = document.querySelector('.hover-message');
const flipButton = document.getElementById('flip-button');
const additionalCards = document.querySelectorAll('.card-container.hidden');

mainCard.addEventListener('mouseenter', function() {
    if (!this.classList.contains('flipped')) {
        hoverMessage.classList.add('hidden');
        progressBarContainer.classList.add('active');
        progressBar.style.width = '100%';

        this.flipTimeout = setTimeout(() => {
            this.classList.add('flipped');
            revealAndFlipCards();
            progressBarContainer.classList.remove('active');
            progressBarContainer.classList.add('finished');
        }, 1500);

        this.progressTimeout = setTimeout(() => {
            progressBarContainer.classList.remove('finished');
            progressBar.style.width = '0';
        }, 2000);
    }
});

mainCard.addEventListener('mouseleave', function() {
    if (!this.classList.contains('flipped')) {
        clearTimeout(this.flipTimeout);
        clearTimeout(this.progressTimeout);
        progressBarContainer.classList.remove('active');
        progressBar.style.width = '0';
        hoverMessage.classList.remove('hidden');
    }
});

mainCard.addEventListener('click', function() {
    if (!this.classList.contains('flipped')) {
        this.classList.add('flipped');
        progressBarContainer.classList.remove('active');
        revealAndFlipCards();
    } else {
        this.classList.remove('flipped');
        hideAdditionalCards();
    }
});

function revealAndFlipCards() {
    const additionalCards = document.querySelectorAll('#project-card, #blog-card, #media-card');
    additionalCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('hidden');
            setTimeout(() => {
                card.classList.add('flipped');
            }, 800);
        }, index * 600);
    });
}

const posts = [
    { title: "Hello, World", date: "January 21, 2023", file: "content/posts/post1.md" },
    { title: "Another Post", date: "February 15, 2023", file: "content/posts/post2.md" },
];

const postsList = document.getElementById('posts-list');

posts.forEach(post => {
    const listItem = document.createElement('li');
    const postLink = document.createElement('a');
    const postDate = document.createElement('span');

    postLink.href = `blog-template.html?file=${encodeURIComponent(post.file)}`;
    postLink.textContent = post.title;

    postDate.textContent = post.date;
    postDate.classList.add('date');

    listItem.appendChild(postLink);
    listItem.appendChild(postDate);

    postsList.appendChild(listItem);
});

flipButton.addEventListener('click', () => {
    if (mainCard.classList.contains('flipped')) {
        mainCard.classList.remove('flipped');
    }

    additionalCards.forEach(card => {
        card.classList.add('hidden');
        card.classList.remove('flipped', 'visible');
    });

    const progressBarContainer = document.querySelector('.progress-bar-container');
    const hoverMessage = document.querySelector('.hover-message');

    progressBarContainer.classList.remove('finished');
    hoverMessage.classList.remove('hidden');
});