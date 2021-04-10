const popup = document.querySelector('.popup');

const popupEditProfile = document.querySelector('.popup_edit-profile');

const nameTitle = document.querySelector('.profile__title');
const nameJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_user-name');
const jobInput = document.querySelector('.popup__input_user-profession');
const editProfileForm = document.querySelector('.popup__forms');

const popupPlace = document.querySelector('.popup_new-place'); //-- переменная попапа Добавить место
const formElementPlace = popupPlace.querySelector('.popup__forms');
const popupInputName = popupPlace.querySelector('.popup__input_card-name'); //--инпуты попап новое место
const popupInputLink = popupPlace.querySelector('.popup__input_card-link');//--инпуты попап новое место

const card = document.querySelector('#popup-place').content; //--переменная содержимое Template
const profile = document.querySelector('.elements');
const pageFull = document.querySelector('.popup_image');
const imgScreenFull = pageFull.querySelector('.card-open__screen');
const imgScreenFullName = pageFull.querySelector('.card-open__name');
const figureCloseButton = pageFull.querySelector('.popup__close')

const createButton = document.querySelector('.profile__link');
const closePopupButton = popupEditProfile.querySelector('.popup__close');
const buttonCreateCard = document.querySelector('.profile__add');
const closePopupNewPlace = popupPlace.querySelector('.popup__close');
const initialCards = [
  {
    name: 'Вулкан',
    link: 'https://images.unsplash.com/photo-1616628950295-d3288bd7a96d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  }
];
function openPopup(elem) {                    //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
  elem.classList.add('popup_opened');
  document.addEventListener('keydown', closePopUpEsc);
}
function closePopup(elem) {                   //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
  elem.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopUpEsc);
}

function closePopUpEsc(evt) { //-----закрытие по ESC
  const activePopUp = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(activePopUp);
  }
}
function closePopupOverlay() {        //---закрытие по клику вне попапа
  const popupForm = Array.from(document.querySelectorAll('.popup__container'));
  popupForm.forEach(function (evt) {
    document.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('popup_opened')) {
        closePopup(evt.target);
      }
    });
  });
}
closePopupOverlay();
function formSubmitHandler(evt) {  //ФУНККЦИЯ ПОПАП ОКНО РЕДАКТИРОВАНИЯ имя - профессия
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  nameJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
function createCard(name,link) { //-----ОБЩАЯ ФУНКЦИЯ создания карточки
  const container = card.querySelector('.card').cloneNode(true);
  const cardsTitle = container.querySelector('.card__title');
  const cardsImage = container.querySelector('.card__img');
  cardsTitle.textContent = name;
  cardsImage.src = link;
  cardsImage.alt = name;
  setDeleteCardListener(container)
  setCardImageListener(cardsImage,link,name);
  setCardLikeListener(container)
  return container;
}
function setDeleteCardListener(container){//-----КНОПКА УДАЛЕНИЯ КАРТОЧКИ
  const deleateButton = container.querySelector('.card__deleate')
  deleateButton.addEventListener('click', () => { container.remove() })//-----УДАЛЕНИЕ КАРТОЧКИ 
}
function setCardImageListener(cardsImage,link,name){//--- ОТКРЫТИЕ ЗУМА
  cardsImage.addEventListener('click', function () { 
  openPopup(pageFull);
  imgScreenFull.src = link;
  imgScreenFullName.textContent = name;
  imgScreenFull.alt = name;
  }) 
} 
function setCardLikeListener(container){//----лайк кнопка
  container.querySelector('.card__like-button').addEventListener('click', function (evt) { 
  evt.target.classList.toggle('card__like-button_active');
  })
}

function addCard (item){  //---- ДОАВЛЕНИЕ В НАЧАЛО
  profile.prepend(item); 
}
initialCards.forEach(function(name){   //---загрузка карточек через массив---\\ 
  addCard(createCard(name.name,name.link));
})
function submitAddCardPopup(evt){  //---создание карточек через попап---\\
  evt.preventDefault();
  const popupInputNameValue = popupInputName.value;
  const popupInputLinkValue = popupInputLink.value;
  addCard(createCard(popupInputNameValue,popupInputLinkValue));
  closePopup(popupPlace);
  clearAddCardPopupInputs()
}
function clearAddCardPopupInputs(){ //----очищение формы попап новое место
  formElementPlace.reset();
}
//--слушатели события
figureCloseButton.addEventListener('click', function () {//--- ЗАКРЫТИЕ ЗУМА
  closePopup(pageFull);
})
editProfileForm.addEventListener('submit', formSubmitHandler);
formElementPlace.addEventListener('submit', submitAddCardPopup); //--попап form submit создание карточки
createButton.addEventListener('click', function () { //--- открытие попапа имя-профессия
  openPopup(popupEditProfile);
  nameInput.value = nameTitle.textContent;
  jobInput.value = nameJob.textContent;

});
closePopupButton.addEventListener('click', function () { //--- закрытие попапа имя-профессия
  closePopup(popupEditProfile);
});
buttonCreateCard.addEventListener('click',function(){ //--- открытие попапа Новое место
  openPopup(popupPlace);
  clearAddCardPopupInputs();
})
closePopupNewPlace.addEventListener('click',function(){ //--- закрытие попапа Новое место
  closePopup(popupPlace);
})