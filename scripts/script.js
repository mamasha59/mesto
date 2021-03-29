let popup = document.querySelector('.popup');
let createButton = document.querySelector('.profile__link');
let buttonClose = document.querySelector('.popup__close');
let nameTitle = document.querySelector('.profile__title');
let nameJob = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__text');
let formElement = document.querySelector('.popup__forms');
let buttonAdd = document.querySelector('.profile__add'); //-- переменная кнопки Добавить
let popupPlace = document.querySelector('.popup_new-place'); //-- переменная попапа Добавить место
let popupPlaceCloseB = popupPlace.querySelector('.popup__close');//--переменная попапа Добавить место
const card = document.querySelector('#popup-place').content.querySelector('.card'); //--переменная содержимое Template
const profile = document.querySelector('.elements');
let nameInputPlace = popupPlace.querySelector('.popup__name'); //---попап инпут
let nameInputText = popupPlace.querySelector('.popup__text');//---попап инпут
const pageFull = document.querySelector('.card-open');
let imgCreen = pageFull.querySelector('.card-open__screen');
let figureName = pageFull.querySelector('.card-open__name');
let figureCloseButton = pageFull.querySelector('.card-open__close')
let formElementPlace = popupPlace.querySelector('.popup__forms');
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
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function openButtonPlace() {                  //ФУНКЦИЯ ОТКРЫТЫЕ ПОПАПА
  popupPlace.classList.add('popup_opened');
}
function closeButtonNewPlace() {                 //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
  popupPlace.classList.remove('popup_opened');
}
//-------------------------------------------------------------------------------K
function openButton() {                    //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
  popup.classList.add('popup_opened');
  nameInput.value = nameTitle.textContent;
  jobInput.value = nameJob.textContent;
}
function closeButton() {                   //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
  popup.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {  //ФУНККЦИЯ ПОПАП ОКНО РЕДАКТИРОВАНИЯ имя - профессия
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  nameJob.textContent = jobInput.value;
  closeButton();
}
function forCreateCards(evt) {  //-------------------------- СОЗДАНИЕ КАРТОЧКИ ЧЕРЕЗ ПОПАП
  evt.preventDefault();
  const container = card.cloneNode(true);
  let cardsTitle = container.querySelector('.card__title');
  let cardsImage = container.querySelector('.card__img');
  profile.prepend(container);
  cardsTitle.textContent = nameInputPlace.value;
  cardsImage.src = nameInputText.value;
  const deleateButton = document.querySelector('.card__deleate')//-----УДАЛЕНИЕ КАРТОЧКИ
  deleateButton.addEventListener('click', (evnt) => { container.remove() })//-----УДАЛЕНИЕ КАРТОЧКИ
  function openFull(e) { //----ПРОСМОТР ИЗОБРАЖЕНИЯ
    imgCreen.src = nameInputText.value;
    figureName.textContent = nameInputPlace.value;
    figureCloseButton.addEventListener('click', function () {//--- ЗАКРЫТИЕ ЗУМА
      pageFull.classList.remove('card-open_full')
    })
  }
    cardsImage.addEventListener('click', function () { //--- ОТКРЫТИЕ ЗУМА
      pageFull.classList.add('card-open_full')
    })
  cardsImage.addEventListener('click', openFull); //-------------------------R
  closeButtonNewPlace(evt);//------ЗАКРЫТИЕ ПОПАПА
  buttonLike();//----ФУНКЦИЯ ЛАЙК  
}
function buttonLike() { //-------------------ЛАЙК ПЕРЕКЛЮЧЕНИЕ
  document.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  })
}
//------------------------ ЗАГРУЗКА КАРТОЧЕК НА СТРАНИЦУ
initialCards.forEach(function (name) {
  const container = card.cloneNode(true);
  let cardsTitle = container.querySelector('.card__title');
  let cardsImage = container.querySelector('.card__img');
  profile.prepend(container);
  cardsTitle.textContent = name.name;
  cardsImage.src = name.link;
  const deleateButton = document.querySelector('.card__deleate')//-----УДАЛЕНИЕ КАРТОЧКИ
  deleateButton.addEventListener('click', (evnt) => { container.remove() })//-----УДАЛЕНИЕ КАРТОЧКИ    
  buttonLike()//----ФУНКЦИЯ ЛАЙК
  function openFull(e) { //----ПРОСМОТР ИЗОБРАЖЕНИЯ
    imgCreen.src = name.link;
    figureName.textContent = name.name;
    figureCloseButton.addEventListener('click', function () {//--- ЗАКРЫТИЕ ЗУМА
      pageFull.classList.remove('card-open_full')
    })
  }
   cardsImage.addEventListener('click', function () { //--- ОТКРЫТИЕ ЗУМА
      pageFull.classList.add('card-open_full')
    })
  cardsImage.addEventListener('click', openFull);
})
//------------------------- ЗАГРУЗКА КАРТОЧЕК НА СТРАНИЦУ
//--слушатели события
formElement.addEventListener('submit', formSubmitHandler);
createButton.addEventListener('click', openButton);
buttonClose.addEventListener('click', closeButton);
buttonAdd.addEventListener('click', openButtonPlace); // НОВОЕ МЕСТО
popupPlaceCloseB.addEventListener('click', closeButtonNewPlace);// НОВОЕ МЕСТО
formElementPlace.addEventListener('submit', forCreateCards); //--попап form submit создание карточки
//-------------------------------------------------------------------------------слушатели события



