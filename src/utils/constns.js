const popupEditProfile = document.querySelector(".popup_edit-profile");

const nameTitle = document.querySelector(".profile__title");
const nameJob = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_user-name");
const jobInput = document.querySelector(".popup__input_user-profession");
const editProfileForm = popupEditProfile.querySelector(".popup__forms");

const popupPlace = document.querySelector(".popup_new-place"); //-- переменная попапа Добавить место
const formElementPlace = popupPlace.querySelector(".popup__forms");
const popupInputName = popupPlace.querySelector(".popup__input_card-name"); //--инпуты попап новое место
const popupInputLink = popupPlace.querySelector(".popup__input_card-link"); //--инпуты попап новое место

const profile = document.querySelector(".elements");

const pageFull = document.querySelector(".popup_image");
const imgScreenFull = pageFull.querySelector(".card-open__screen"); //--- img 
const imgScreenFullName = pageFull.querySelector(".card-open__name");//--- figcaption

const createButton = document.querySelector(".profile__link");
const buttonCreateCard = document.querySelector(".profile__add");

const deleatePopup = document.querySelector('.popup_deleate-place');//---попап удаление

const avatarImg = document.querySelector('.profile__img');

const popupEditAvatar = document.querySelector('.popup_edit-avatar');
const buttonEditAvatar = document.querySelector('.profile__edit-button');
const inputPopupAvatar = popupEditAvatar.querySelector('.popup__input_avatar-link');
const saveButtonAvatar = popupEditAvatar.querySelector('.popup__button');
const avatarEditForm =  popupEditAvatar.querySelector('.popup__forms')
const escape = 'Escape';

//-----------------------------------\\
  const validationConfig = {
    formSelector: ".popup__forms",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__error_border",
    errorClass: "popup__error_visible",
};
  export {
    nameTitle,
    nameJob,
    popupEditProfile,
    popupPlace,
    pageFull,
    profile,
    imgScreenFull,
    createButton,
    buttonCreateCard,
    editProfileForm,
    formElementPlace,
    imgScreenFullName,
    escape,
    nameInput,
    jobInput,
    popupInputName,
    popupInputLink,
    validationConfig,
    deleatePopup,
    avatarImg,
    buttonEditAvatar,
    popupEditAvatar,
    inputPopupAvatar,
    saveButtonAvatar,
    avatarEditForm,
  }