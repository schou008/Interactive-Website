// Add your interactive features here using JavaScript, e.g., rating system, comments, scaling based on serving sizes.
document.addEventListener('DOMContentLoaded', () => {
    const recipeCards = document.querySelectorAll('.recipe');

    recipeCards.forEach(card => {
        const ratingSelect = card.querySelector('.rating-select');
        const rateButton = card.querySelector('.rate-button');
        const commentList = card.querySelector('.comment-list');
        const commentInput = card.querySelector('.comment-input');
        const commentButton = card.querySelector('.comment-button');

        rateButton.addEventListener('click', () => {
            const rating = ratingSelect.value;
            // Here, you can send the rating data to your server for storage and processing
            console.log(`Rated ${rating} stars for recipe ${card.dataset.recipeId}`);
        });

        commentButton.addEventListener('click', () => {
            const commentText = commentInput.value;
            if (commentText.trim() !== '') {
                const newComment = document.createElement('li');
                newComment.textContent = commentText;
                commentList.appendChild(newComment);
                commentInput.value = ''; // Clear the input field
                // Here, you can send the comment data to your server for storage and processing
                console.log(`Comment added for recipe ${card.dataset.recipeId}: ${commentText}`);
            }
        });
    });
});


function filterRecipes() {
    const ingredientInput = document.getElementById('ingredient').value.toLowerCase();
    const dietSelect = document.getElementById('diet');
    const selectedDiet = dietSelect.options[dietSelect.selectedIndex].value;
    const cookingTimeInput = parseInt(document.getElementById('cooking-time').value, 10) || 0;

    const recipeCards = document.querySelectorAll('.recipe');

    recipeCards.forEach(card => {
        const cardIngredient = card.querySelector('p').textContent.toLowerCase();
        const cardDiet = card.dataset.diet;
        const cardCookingTime = parseInt(card.dataset.cookingTime, 10);

        const matchesIngredient = cardIngredient.includes(ingredientInput);
        const matchesDiet = selectedDiet === 'all' || cardDiet === selectedDiet;
        const matchesCookingTime = cookingTimeInput === 0 || cardCookingTime <= cookingTimeInput;

        if (matchesIngredient && matchesDiet && matchesCookingTime) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Ensure the filter is applied on initial load
filterRecipes();

// Example: Toggle class for active recipe card
const recipeCards = document.querySelectorAll('.recipe');

recipeCards.forEach(card => {
    card.addEventListener('click', () => {
        recipeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
});

