import Card from './Card.js';
import FormValidator from './FormValidator.js'
function closePopupOverlay() {        //---закрытие по клику вне попапа
    const popupForm = Array.from(document.querySelectorAll('.popup'));
    popupForm.forEach(function (popup) {
        popup.addEventListener('click', (event) => {
            if (event.target.classList.contains('popup_opened')) {
                closePopup(event.target);
            }
        });
    });
}
closePopupOverlay();
export default function closePopUpEsc(evt) { //-----закрытие по ESC
    const activePopUp = document.querySelector('.popup_opened');
    if (evt.key === 'Escape') {
        closePopup(activePopUp);
    }
}
function openPopup(elem) {
    //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
    elem.classList.add("popup_opened");
    document.addEventListener("keydown", closePopUpEsc);
}

function closePopup(elem) {
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
    // clearAddCardPopupInputs();
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

function formSubmitHandler(evt) {
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

editProfileForm.addEventListener("submit", formSubmitHandler);

formElementPlace.addEventListener("submit", submitAddCardPopup); //--попап form submit создание карточки

const  enableValidation = {
    formSelector: ".popup__forms",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__error_border",
    errorClass: "popup__error_visible",
  };

const validateAdd = new FormValidator(enableValidation);
validateAdd.enableValidation();