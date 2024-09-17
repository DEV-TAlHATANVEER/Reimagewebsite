window.onload = function() {
    const imageGrid = document.getElementById('imageGrid');

    // Retrieve uploaded images from localStorage
    const images = JSON.parse(localStorage.getItem('uploadedImages')) || [];

    // Display uploaded images in the grid
    images.forEach(image => {
        const imageItem = document.createElement('img');
        imageItem.src = image;
        imageItem.classList.add('image-item');
        imageGrid.appendChild(imageItem);
    });
};
