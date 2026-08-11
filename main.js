// ! SEARCH

const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');
const searchWrapper = document.querySelector('.search__wrapper');

// Открытие / закрытие поиска
searchButton.addEventListener('click', () => {
    searchWrapper.classList.toggle('active');

    if (searchWrapper.classList.contains('active')) {
        searchInput.focus();
    } else {
        searchInput.value = '';
    }
});

// Закрытие при клике вне поиска
document.addEventListener('click', (event) => {
    if (!searchWrapper.contains(event.target)) {
        searchWrapper.classList.remove('active');
        searchInput.value = '';
    }
});

// Закрытие по Escape
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        searchWrapper.classList.remove('active');
        searchInput.value = '';
    }
});

const accountButton = document.querySelector('.account__button');
const accountModal = document.querySelector('.account__modal');
const accountClose = document.querySelector('.account__close');

accountButton.addEventListener('click', () => {
    accountModal.classList.add('active');
});

accountClose.addEventListener('click', () => {
    accountModal.classList.remove('active');
});

accountModal.addEventListener('click', (event) => {
    if (event.target === accountModal) {
        accountModal.classList.remove('active');
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        accountModal.classList.remove('active');
    }
});