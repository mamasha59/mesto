import {escape} from '../utils/constns.js'

export default class Popup {
    constructor(popupElement) {
        this._popup = popupElement;
        this._handleEscClose = this._handleEscClose.bind(this)
    }
    open() {
        //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
        this._popup.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose);
    }
    close() {
        //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
        this._popup.classList.remove("popup_opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }
    _handleEscClose(evt) {
        //-----закрытие по ESC
        if (evt.key === escape) {
            this.close();
        }
    }
    setEventListeners() {
		this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close(this._popup);
            }
            if (evt.target.classList.contains('popup__close')) {
				//console.log(evt);
            	this.close(this._popup);
            }
        })
	}
}