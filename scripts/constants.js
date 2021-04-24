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

const cardsTitle = document.querySelector(".card__title");
const cardsImage = document.querySelector(".card__img");