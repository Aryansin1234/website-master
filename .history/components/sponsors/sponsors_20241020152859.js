document.addEventListener('DOMContentLoaded', function() {
    const sponsorsTrack = document.querySelector('.sponsors-track');
    const sponsorItems = document.querySelectorAll('.sponsor-item');
    
    // Clone sponsor items
    sponsorItems.forEach(item => {
        const clone = item.cloneNode(true);
        sponsorsTrack.appendChild(clone);
    });

    // Set initial position
    let currentPosition = 0;
    const itemWidth = sponsorItems[0].offsetWidth + parseInt(getComputedStyle(sponsorItems[0]).marginLeft) * 2;

    function moveSponsors() {
        currentPosition -= 1; // Adjust speed here
        sponsorsTrack.style.transform = `translateX(${currentPosition}px)`;

        // Check if we need to reset
        if (currentPosition <= -itemWidth * sponsorItems.length) {
            currentPosition += itemWidth * sponsorItems.length;
            sponsorsTrack.style.transition = 'none';
            sponsorsTrack.style.transform = `translateX(${currentPosition}px)`;
            void sponsorsTrack.offsetWidth; // Trigger reflow
            sponsorsTrack.style.transition = 'transform 0.5s linear';
        }

        requestAnimationFrame(moveSponsors);
    }

    moveSponsors();
});