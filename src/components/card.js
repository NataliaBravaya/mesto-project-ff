export const cardTemplate = document.querySelector('#card-template').content;


export const placesList = document.querySelector('.places__list');


export function createCard(data, deleteCallback, likeCallback, handleImageClick) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const image = card.querySelector(".card__image");
    image.alt = data.name;
    image.src = data.link;
    card.querySelector('.card__title').textContent = data.name;
    card.querySelector('.card__delete-button').addEventListener('click', deleteCallback);
    card.querySelector('.card__like-button').addEventListener('click', likeCallback);
    image.addEventListener('click', () => handleImageClick(data));
    return card;
}

export function deleteCard (event) {
    event.target.closest('.card').remove();
}


export function toggleLike (event) {
    event.target.classList.toggle("card__like-button_is-active");
}
