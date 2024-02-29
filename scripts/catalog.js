// Допустим, мы хотим добавить простой поиск по названию товара
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product-card');

    searchInput.addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();

        productCards.forEach(function(card) {
            const title = card.querySelector('h3').textContent.toLowerCase();
            if(title.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
