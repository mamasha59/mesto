const popupEditProfile = document.querySelector(".popup_edit-profile");

const nameTitle = document.querySelector(".profile__title");
const nameJob = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_user-name");
const jobInput = document.querySelector(".popup__input_user-profession");
const editProfileForm = document.querySelector(".popup__forms");

const popupPlace = document.querySelector(".popup_new-place"); //-- переменная попапа Добавить место
const formElementPlace = popupPlace.querySelector(".popup__forms");
const popupInputName = popupPlace.querySelector(".popup__input_card-name"); //--инпуты попап новое место
const popupInputLink = popupPlace.querySelector(".popup__input_card-link"); //--инпуты попап новое место

//const card = document.querySelector("#popup-place").content; //--переменная содержимое Template
const profile = document.querySelector(".elements");
const pageFull = document.querySelector(".popup_image");
const imgScreenFull = pageFull.querySelector(".card-open__screen");
const imgScreenFullName = pageFull.querySelector(".card-open__name");
const figureCloseButton = pageFull.querySelector(".popup__close");

const createButton = document.querySelector(".profile__link");
const closePopupButton = popupEditProfile.querySelector(".popup__close");
const buttonCreateCard = document.querySelector(".profile__add");
const closePopupNewPlace = popupPlace.querySelector(".popup__close");
const popupNewPlaceButton = popupPlace.querySelector('.popup__button');
const cardsTitle = document.querySelector(".card__title");

const escape = 'Escape';
//-----------------------------------\\
const initialCards = [
    {
      name: "Вулкан",
      link:
        "https://images.unsplash.com/photo-1616628950295-d3288bd7a96d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Челябинская область",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Байкал",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
    {
      name: "Холмогорский район",
      link:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
  ];