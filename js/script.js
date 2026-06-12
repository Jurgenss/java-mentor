// Поиск по карточкам на главной
function searchTopics() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const query = input.value.toLowerCase().trim();
    document.querySelectorAll('.topic-card').forEach(card => {
        const text = card.innerText.toLowerCase();
        card.classList.toggle('hidden', query && !text.includes(query));
    });
}

// Переключение темы
function toggleTheme() {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
}

// Загрузка сохранённой темы
(function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark');
    }
})();

// Enter в поле поиска
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('searchInput');
    if (input) {
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') searchTopics();
        });
    }
});