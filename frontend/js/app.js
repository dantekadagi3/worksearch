import {workers} from './workers.js';

workers.forEach(worker => {
    const HTML = `
<div class="workers-profile">
    <div class="bookmark-logo">
        <img src="../images/bookmark-logo.svg">
    </div>
    <img class="worker-image" src="${worker.profileImage}">
    <div class="bottom-details">
        <div class="worker-name-container">
            <p class="worker-name">
                ${worker.name}
            </p>
            <a class="details-link" href="#">
                <p>Contact</p>
            </a>
        </div>
        <div class="worker-details-grid">
            <div>
                <img src="../images/service-blue.png">
                <p>${worker.service}</p>
            </div>
            <div>
                <img src="../images/location-blue.png">
                <p>${worker.location}</p>
            </div>
            <div>
                <img src="../images/price-blue.png">
                <p>Ksh. <span>${worker.price}</span> per service</p>
            </div>
        </div>
        <div class="rating-container">
            <img class="rating-logo" src="../images/rating-blue.png">
            <img class="rating-image"
             src="../images/rating-${(worker.rating.stars)*10}.png">
            <p>${worker.rating.ratingCount}</p>
        </div>
    </div>
</div>`;

    const workersProfile = document.querySelector('.workers-grid');
    workersProfile.innerHTML += HTML;
});

                        
