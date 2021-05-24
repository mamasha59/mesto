export default class Api{
	constructor(selector) {
		this._url = selector.url;
		this._headers = selector.headers;
	}
	_checkOk(res) {
		if(res.ok) {
			return res.json();
		} else {
			return Promise.reject(res.status);
		}
	}
	getCards() { //----получение карточек с сервера
		return fetch(this._url + 'cards', {
			method: 'GET',
			headers: this._headers
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	postCards(name, link) { //---- добавление карточек в dom
		return fetch(this._url + 'cards', {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: name,
				link: link,
			})
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	getUserInfo() { //----получение информации о пользователе
		return fetch(this._url + 'users/me', {
			method: 'GET',
			headers: this._headers
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	setUserInfo(name, caption) {//---- установка инфы о пользователе
		return fetch(this._url + 'users/me', {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
                name: name,
                about: caption
			})
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	updAvatar(src) {//----- размещение аватара пользователя
		return fetch(this._url + 'users/me/avatar', {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: src
			})
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	deleteCard(cardId) {//---- удаление карточки  пользователя
		return fetch(this._url + `cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	addCardLike(cardId) {//---- размещение счетчика лайков
		return fetch(this._url + `cards/likes/${cardId}`, {
			method: 'PUT',
			headers: this._headers
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
	removeCardLike(cardId) {//----- удаление лайка с карточки
		return fetch(this._url + `cards/likes/${cardId}`, {
			method: 'DELETE',
			headers: this._headers
		})
		.then(res => {
			return this._checkOk(res)
		})
	}
}