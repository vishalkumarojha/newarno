const placesData = {
    tab1: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/mishra.jpeg?raw=true',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true'},
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true'},
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true'}
        ]
    },
    tab2: {
        name: "Operations Manager",
        shortDescription: "Efficient Planning",
        mainImage: 'https://via.placeholder.com/200x150/7f7fff',
        mainImageCaption: "Strategy",
        images: [
            {src: 'op managers/1.png', },
            {src: 'op managers/2.png', },
            {src: 'op managers/3.png', }
        ]
    },
    tab3: {
        name: "Tech Team",
        shortDescription: "Innovation",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Tech Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', },
            {src: 'https://via.placeholder.com/200x150/ffdf7f',},
            {src: 'https://via.placeholder.com/200x150/7fff7f', }
        ]
    },
    tab4: {
        name: "Corporate Team",
        shortDescription: "Business Strategy",
        mainImage: 'https://via.placeholder.com/200x150/7fff7f',
        mainImageCaption: "Corporate Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/7fff7f', },
            {src: 'https://via.placeholder.com/200x150/ff7fff', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', }
        ]
    },
    tab5: {
        name: "Content Team",
        shortDescription: "Creative Thinkers",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Creative Minds",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7fff', },
            {src: 'https://via.placeholder.com/200x150/ff7fff', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', }
        ]
    },
    tab6: {
        name: "Operation Team",
        shortDescription: "Efficient Executors",
        mainImage: 'https://via.placeholder.com/200x150/7f7f7f',
        mainImageCaption: "Operational Experts",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f',},
            {src: 'https://via.placeholder.com/200x150/ffdf7f',},
            {src: 'https://via.placeholder.com/200x150/7fff7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', }
        ]
    },
    tab7: {
        name: "Outreach Team",
        shortDescription: "External Relations",
        mainImage: 'https://via.placeholder.com/200x150/7f7fff',
        mainImageCaption: "Outreach and PR",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f',},
            {src: 'https://via.placeholder.com/200x150/ffdf7f',},
            {src: 'https://via.placeholder.com/200x150/7fff7f',},
            {src: 'https://via.placeholder.com/200x150/7fff7f', }]
    },
    tab8: {
        name: "Anchoring Team",
        shortDescription: "The Hosts",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Presenters",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', },
            {src: 'https://via.placeholder.com/200x150/ffdf7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', }
        ]
    },
    tab9: {
        name: "Creative Team",
        shortDescription: "Design and Creativity",
        mainImage: 'https://via.placeholder.com/200x150/ffdf7f',
        mainImageCaption: "Designers and Creatives",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', },
            {src: 'https://via.placeholder.com/200x150/ffdf7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f', }
        ]
    },
    tab10: {
        name: "Media Team",
        shortDescription: "Media and Publicity",
        mainImage: 'https://via.placeholder.com/200x150/7fff7f',
        mainImageCaption: "Public Relations",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', },
            {src: 'https://via.placeholder.com/200x150/ffdf7f', },
            {src: 'https://via.placeholder.com/200x150/7fff7f',},
            {src: 'https://via.placeholder.com/200x150/7fff7f',}
        ]
    }
};

// Function to display the place details and images
function showPlaceDetails(tabId) {
    const place = placesData[tabId];
    const gallery = document.getElementById('gallery');

    // Clear previous content
    gallery.innerHTML = '';

    // HTML structure for the place content
    const placeContent = `
        <div class="main-image-container">
            <h3 class="main-title">${place.name}</h3>
            <p class="main-description">${place.shortDescription}</p>
            <img src="${place.mainImage}" class="main-image" alt="${place.name}">
            <p class="image-caption">${place.mainImageCaption}</p>
        </div>
        <div class="image-grid">
            ${place.images.map(image => `
                <div class="image-grid-item">
                    <img src="${image.src}" alt="${image.title}">
                  
                </div>
            `).join('')}
        </div>
    `;

    // Insert content into the gallery
    gallery.innerHTML = placeContent;
}
