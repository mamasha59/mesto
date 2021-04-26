export function closePopup(elem) {
    //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
    elem.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopUpEsc);
}
export function openPopup(elem) {
    //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
    elem.classList.add("popup_opened");
    document.addEventListener("keydown", closePopUpEsc);
}
export function closePopUpEsc(evt) { 
    //-----закрытие по ESC
    const activePopUp = document.querySelector('.popup_opened');
    if (evt.key === escape) {
        closePopup(activePopUp);
    }
}