document.addEventListener('DOMContentLoaded', function () {
    const platformFilter = document.getElementById('filterPlatform');
    const categoryFilter = document.getElementById('filterCategory');
    const gameCards = document.querySelectorAll('.game-card');

    function filterGames() {
        const selectedPlatform = platformFilter.value;
        const selectedCategory = categoryFilter.value;

        gameCards.forEach(card => {
            const cardPlatforms = card.getAttribute('data-platform').split(',');
            const cardCategory = card.getAttribute('data-category');

            const matchesPlatform = (selectedPlatform === 'all') || cardPlatforms.includes(selectedPlatform);
            const matchesCategory = (selectedCategory === 'all') || (cardCategory === selectedCategory);

            if (matchesPlatform && matchesCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    platformFilter.addEventListener('change', filterGames);
    categoryFilter.addEventListener('change', filterGames);

    // Initial filter on page load
    filterGames();
});