function openModal(popup) {
    if (!popup) return;

    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', handleEscapeKey);
    popup.addEventListener('mousedown', handlePopupClick);
}

function closeModal(popup) {
    if (!popup || !popup.classList.contains('popup')) return;

    popup.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscapeKey);
    popup.removeEventListener('mousedown', handlePopupClick);
}

function handleEscapeKey(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_is-opened');
        closeModal(openedPopup);
    }
}

function handlePopupClick(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        closeModal(evt.currentTarget);
    }
}

export { openModal, closeModal };