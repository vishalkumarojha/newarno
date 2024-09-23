const placesData = {
    tab1: {
        name: "Board of Directors",
        shortDescription: "Leadership",
        mainImage: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/mishra.jpeg?raw=true',
        mainImageCaption: "Our Leaders",
        images: [
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true', title: 'John Doe', description: 'CEO'},
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true', title: 'Jane Smith', description: 'CFO'},
            {src: 'https://github.com/vishalkumarojha/monolith/blob/main/popout/image/Untitled_design__1___1_-removebg-preview.png?raw=true', title: 'Robert Brown', description: 'CTO'}
        ]
    },
    tab2: {
        name: "Operations Manager",
        shortDescription: "Efficient Planning",
        mainImage: 'https://via.placeholder.com/200x150/7f7fff',
        mainImageCaption: "Strategy",
        images: [
            {src: 'https://via.placeholder.com/200x150/7f7fff', title: 'Emily Davis', description: 'Manager'},
            {src: 'https://via.placeholder.com/200x150/ff7fff', title: 'Operations Team', description: 'Staff'}
        ]
    },
    tab3: {
        name: "Tech Team",
        shortDescription: "Innovation",
        mainImage: 'https://via.placeholder.com/200x150/ff7f7f',
        mainImageCaption: "Tech Leaders",
        images: [
            {src: 'https://via.placeholder.com/200x150/ff7f7f', title: 'John Doe', description: 'Tech Lead'},
            {src: 'https://via.placeholder.com/200x150/ffdf7f', title: 'Jane Smith', description: 'Developer'},
            {src: 'https://via.placeholder.com/200x150/7fff7f', title: 'Robert Brown', description: 'Designer'}
        ]
    }
    // Add more tabs as needed
};

// Function to display the place details and images
function showPlaceDetails(tabId) {
    const place = placesData[tabId];
    const gallery = document.getElementById('gallery');

    // Clear previous content
    gallery.innerHTML = '';

    // HTML structure for the place content
    const placeContent = `
        <div class="place-description">
            <h2 class="place-title">${place.name}</h2>
            <p class="place-text">${place.shortDescription}</p>
        </div>
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
                    <p class="image-grid-title">${image.title}</p>
                    <p class="image-grid-description">${image.description}</p>
                </div>
            `).join('')}
        </div>
    `;

    // Insert content into the gallery
    gallery.innerHTML = placeContent;
}
