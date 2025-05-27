import baseAvatar from '../images/avatar.jpg';

export const defaultUser = {
    "name": "Жак-Ив Кусто",
    "about": "Исследователь океана",
    "avatar": baseAvatar,
    "_id": "-1"
}


const config = {
    baseURL: 'https://mesto.nomoreparties.co/v1/wff-cohort-39',
    headers: {
        authorization: 'dc0f8e16-8bf1-4507-aa58-fb512e88d67e',
        'Content-Type': 'application/json'
    }
}



function getResponseData(res) {
    if (res.ok){
        return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`);
}


export function getAboutMe() {
    return fetch(`${config.baseURL}/users/me`, {
        headers: config.headers
    })
        .then((res) =>{
            return getResponseData(res)
        })
}

export function getInitialCards() {
    return fetch(`${config.baseURL}/cards`, {
        headers: config.headers
    })
        .then((res) =>{
            return getResponseData(res)
        })
}

export function patchProfile(name, description){
    return fetch(`${config.baseURL}/users/me`, {
        headers: config.headers,
        method: "PATCH",
        body: JSON.stringify({
            name: name,
            about: description
        })
    })
        .then((res) => {
            return getResponseData(res)
        })
}


export function postNewCard(name, link){
    return fetch(`${config.baseURL}/cards`, {
        headers: config.headers,
        method: "POST",
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
        .then((res) => {
            return getResponseData(res)
        })
}

export function deleteCard(cardId){
    return fetch(`${config.baseURL}/cards/${cardId}`, {
        headers: config.headers,
        method: "DELETE",
    })
        .then((res) => {
            return getResponseData(res)
        })
}


export function putLike(cardId){
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
        headers: config.headers,
        method: "PUT",
    })
        .then((res) => {
            return getResponseData(res)
        })
}

export function deleteLike(cardId){
    return fetch(`${config.baseURL}/cards/likes/${cardId}`, {
        headers: config.headers,
        method: "DELETE",
    })
        .then((res) => {
            return getResponseData(res)
        })
}

export function patchAvatar(link) {
    return fetch(`${config.baseURL}/users/me/avatar`, {
        headers: config.headers,
        method: "PATCH",
        body: JSON.stringify({
            avatar: link
        })
    })
        .then((res) => {
                return getResponseData(res)
        })
}