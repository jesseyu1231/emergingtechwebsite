document.addEventListener('DOMContentLoaded', function () {
    const platformFilter = document.getElementById('filterPlatform');
    const categoryFilter = document.getElementById('filterCategory');
    const gameCards = document.querySelectorAll('.game-card');

    function filterGames() {
        const selectedPlatform = platformFilter.value;
        const selectedCategory = categoryFilter.value;

        console.log('Selected Platform:', selectedPlatform);
        console.log('Selected Category:', selectedCategory);

        gameCards.forEach(card => {
            const cardPlatforms = card.getAttribute('data-platform').split(',');
            const cardCategory = card.getAttribute('data-category');

            console.log('Card Platforms:', cardPlatforms);
            console.log('Card Category:', cardCategory);

            const matchesPlatform = (selectedPlatform === 'all') || cardPlatforms.includes(selectedPlatform);
            const matchesCategory = (selectedCategory === 'all') || (cardCategory === selectedCategory);

            console.log('Matches Platform:', matchesPlatform);
            console.log('Matches Category:', matchesCategory);

            if (matchesPlatform && matchesCategory) {
                card.style.display = 'block';
                console.log('Displaying card:', card);
            } else {
                card.style.display = 'none';
                console.log('Hiding card:', card);
            }
        });
    }

    platformFilter.addEventListener('change', filterGames);
    categoryFilter.addEventListener('change', filterGames);

    // Initial filter on page load
    filterGames();
});
