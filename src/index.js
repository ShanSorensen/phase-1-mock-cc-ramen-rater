document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/ramens')
        .then(response => response.json())
        .then(json => json.forEach(renderMenu))
        const newRamenForm = document.querySelector('#new-ramen');
        newRamenForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const newRamenName = document.querySelector('#new-name').value;
            const newRamenRestaurant = document.querySelector('#new-restaurant').value;
            const newRamenImage = document.querySelector('#new-image').value;
            const newRamenRating = document.querySelector('#new-rating').value;
            const newRamenComment = document.querySelector('#new-comment').value;
            const newRamenItem = {};
            newRamenItem.name = newRamenName;
            newRamenItem.restaurant = newRamenRestaurant;
            newRamenItem.image = newRamenImage;
            newRamenItem.rating = newRamenRating;
            newRamenItem.comment = newRamenComment;
            renderMenu(newRamenItem);
        })
})

function renderMenu(ramenItem) {
    const menuContainer = document.querySelector('#ramen-menu');
    const menuItem = document.createElement('img');
    menuItem.src = ramenItem.image;
    menuContainer.append(menuItem);
    menuItem.addEventListener('click', () => {
        const detailContainer = document.querySelector('#ramen-detail');
        const detailImg = detailContainer.querySelector('img');
        const detailName = detailContainer.querySelector('h2');
        const detailRestaurant = detailContainer.querySelector('h3');
        const ratingText = document.querySelector('#rating-display');
        const commentText = document.querySelector('#comment-display');
        detailImg.src = ramenItem.image;
        detailImg.alt = ramenItem.name;
        detailName.textContent = ramenItem.name;
        detailRestaurant.textContent = ramenItem.restaurant;
        ratingText.textContent = ramenItem.rating;
        commentText.textContent = ramenItem.comment;
    })
}