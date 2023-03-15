document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (button) {
            const tabTarget = button.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`);
            tabsOff();
            tab.classList.add('shows__list--is-active');
            removeButton();
            button.target.classList.add('shows__tabs__buttons--is-active');
        })
    }
})

function removeButton() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__buttons--is-active');
    }
}

function tabsOff() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}

function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    trailer.classList.toggle('active');

    video.currentTime = 0;
    video.pause();
}