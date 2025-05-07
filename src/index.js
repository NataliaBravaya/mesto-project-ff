import "./pages/index.css";

import { initialCards } from "./components/cards";
import { createCard, deleteCard, toggleLike, placesList } from "./components/card";
import {openModal, closeModal} from "./components/modal";
import './styles/index.css'; // добавьте импорт главного файла стилей


const profileEditButton = document.querySelector('.profile__edit-button');
const profileEditForm = document.forms["edit-profile"];
const profileNameInput = profileEditForm.elements['name'];
const profileDescriptionInput = profileEditForm.elements['description'];
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');


const newCardAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const newCardForm = document.forms['new-place']
const newCardNameInput = newCardForm.elements['place-name'];
const newCardSrcInput = newCardForm.elements['link'];

const profileEditPopup =  document.querySelector('.popup_type_edit');
const imagePopup =  document.querySelector('.popup_type_image');
const popupImage = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');


function handleProfileEdit() {
    profileNameInput.value = profileTitle.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
    openModal(profileEditPopup);
}


function handleProfileFormSubmit(evt) {
    evt.preventDefault();
        profileTitle.textContent = profileNameInput.value
        profileDescription.textContent = profileDescriptionInput.value
        closeModal(profileEditPopup);
}


function handleImageClick(card) {
    popupImage.src = card.link;
    popupImage.alt = card.name;
    popupCaption.textContent = card.name;
    openModal(imagePopup);
}


function handleCardFormSubmit(evt) {
    evt.preventDefault();
    const card = {
        name: newCardNameInput.value,
        link: newCardSrcInput.value,
    }
    const cardElement = createCard(card, deleteCard, toggleLike, handleImageClick);
    placesList.prepend(cardElement);
    newCardForm.reset();
    closeModal(popupNewCard);

}


newCardAddButton.addEventListener('click',() => openModal(popupNewCard));
profileEditForm.addEventListener('submit', handleProfileFormSubmit);
profileEditButton.addEventListener('click', handleProfileEdit);
newCardForm.addEventListener('submit',handleCardFormSubmit);

initialCards.forEach(card => {
    const element = createCard(card, deleteCard, toggleLike, handleImageClick);
    placesList.append(element);
})

