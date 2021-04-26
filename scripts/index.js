import Card from './Card.js';
import FormValidator from './FormValidator.js'
import closePopUpEsc from './utils.js'

function closePopupOverlay() {        //---закрытие по клику на оверлей
    const popupForm = Array.from(document.querySelectorAll('.popup'));
    popupForm.forEach(function (popup) {
        popup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup_opened')) {
                closePopup(event.target);
            }
        });
    });
}
closePopupOverlay();

export function openPopup(elem) {
    //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
    elem.classList.add("popup_opened");
    document.addEventListener("keydown", closePopUpEsc);
}
export function closePopup(elem) {
    //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
    elem.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopUpEsc);
}

function submitAddCardPopup(evt) {
    //---создание карточек через попап---\\
    evt.preventDefault();
    const popupInputNameValue = popupInputName.value;
    const popupInputLinkValue = popupInputLink.value;
    addCard({ name: popupInputNameValue, link: popupInputLinkValue });
    closePopup(popupPlace);
    addFormValidation.disableButton(popupNewPlaceButton);   
}
function addCard(data) {  //---- ДОАВЛЕНИЕ В НАЧАЛО
    profile.prepend(createCard(data));
}
function createCard(item) { // TEST TEST TEST TEST TEST TEST TEST TEST
    const card = new Card(item, '.popup-place');
    return card.generateCard(item);
}

initialCards.forEach((item) => {
    const cardElement = createCard(item);
    profile.append(cardElement);
    // Добавляем в DOM
});
function clearAddCardPopupInputs() {
    //----очищение формы попап новое место
    formElementPlace.reset();
}

function submitProfileForm(evt) {
    //ФУНККЦИЯ ПОПАП ОКНО РЕДАКТИРОВАНИЯ имя - профессия
    evt.preventDefault();
    nameTitle.textContent = nameInput.value;
    nameJob.textContent = jobInput.value;
    closePopup(popupEditProfile);
}

buttonCreateCard.addEventListener("click", function () {
    //--- открытие попапа Новое место
    openPopup(popupPlace);
    clearAddCardPopupInputs();

});
closePopupNewPlace.addEventListener("click", function () {
    //--- закрытие попапа Новое место
    closePopup(popupPlace);

});
createButton.addEventListener("click", function () {
    //--- открытие попапа имя-профессия
    openPopup(popupEditProfile);
    nameInput.value = nameTitle.textContent;
    jobInput.value = nameJob.textContent;
});
closePopupButton.addEventListener("click", function () {
    //--- закрытие попапа имя-профессия
    closePopup(popupEditProfile);
});

editProfileForm.addEventListener("submit", submitProfileForm);//--- form редактирование профессии

formElementPlace.addEventListener("submit", submitAddCardPopup); //--попап form submit создание карточки

figureCloseButton.addEventListener('click', () => {// закрытие  попапа просмотра изображения
    closePopup(pageFull) 
});
const enableValidation = {
    formSelector: ".popup__forms",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__error_border",
    errorClass: "popup__error_visible",
};
//подключим валидацию профиля, создаем новый экземпляр класса FromValidator
const editFormValidation = new FormValidator(enableValidation, editProfileForm);
editFormValidation.enableValidation();
//подключим валидацию добавления фото, создаем новый экземпляр класса FromValidator
const addFormValidation = new FormValidator(enableValidation, formElementPlace);
addFormValidation.enableValidation();