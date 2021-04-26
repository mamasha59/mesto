import {closePopup} from './index.js'
export default function closePopUpEsc(evt) { //-----закрытие по ESC
    const activePopUp = document.querySelector('.popup_opened');
    if (evt.key === escape) {
        closePopup(activePopUp);
    }
}