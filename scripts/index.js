const cardTemplate = document.querySelector('#card-template').content;


const placesList = document.querySelector('.places__list');


function createCard(data, deleteCallback) {
    const card = cardTemplate.querySelector(".card").cloneNode(true);
    const image = card.querySelector(".card__image");
    image.alt = data.name;
    image.src = data.link;
    card.querySelector(".card__title").textContent = data.name;
    card.querySelector(".card__delete-button").addEventListener('click', deleteCallback);
    return card;
}

function deleteCard (event) {
    event.target.closest('.card').remove();
}


initialCards.forEach(card => {
    const element = createCard(card, deleteCard);
    placesList.append(element);
})

