// scripts.js
document.getElementById('searchBar').addEventListener('keyup', function() {
    let searchQuery = this.value.toLowerCase();
    let books = document.querySelectorAll('.book-item');
    books.forEach(function(book) {
        let title = book.querySelector('h2').textContent.toLowerCase();
        if (title.includes(searchQuery)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});

function filterBooks(category) {
    let books = document.querySelectorAll('.book-item');
    books.forEach(function(book) {
        if (category === 'all' || book.getAttribute('data-category') === category) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}
