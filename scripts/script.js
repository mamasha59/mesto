const popupEditProfile = document.querySelector('.popup_edit-profile');
const createButton = document.querySelector('.profile__link');
const closeEditProfilePopupBtn = document.querySelector('.popup__close');
const nameTitle = document.querySelector('.profile__title');
const nameJob = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_user-name');
const jobInput = document.querySelector('.popup__input_user-profession');
const formElement = document.querySelector('.popup__forms');
const buttonAdd = document.querySelector('.profile__add'); //-- переменная кнопки Добавить
const popupPlace = document.querySelector('.popup_new-place'); //-- переменная попапа Добавить место
const closePlacePopupBtn = popupPlace.querySelector('.popup__close');//--переменная попапа Добавить место
const card = document.querySelector('#popup-place').content; //--переменная содержимое Template
const profile = document.querySelector('.elements');
const pageFull = document.querySelector('.popup_image');
const imgScreenFull = pageFull.querySelector('.card-open__screen');
const imgScreenFullName = pageFull.querySelector('.card-open__name');
const figureCloseButton = pageFull.querySelector('.popup__close')
const formElementPlace = popupPlace.querySelector('.popup__forms');
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
function openButtonPlace() {                  //ФУНКЦИЯ ОТКРЫТЫЕ ПОПАПА
  popupPlace.classList.add('popup_opened');  
}
function closeButtonNewPlace() {                 //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
  popupPlace.classList.remove('popup_opened');
}
//-------------------------------------------------------------------------------K
function openButton() {                    //ФУНКЦИЯ ОТКРЫТИЕ ПОПАПА
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = nameTitle.textContent;
  jobInput.value = nameJob.textContent;
}
function closeButton() {                   //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
  popupEditProfile.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {  //ФУНККЦИЯ ПОПАП ОКНО РЕДАКТИРОВАНИЯ имя - профессия
  evt.preventDefault();
  nameTitle.textContent = nameInput.value;
  nameJob.textContent = jobInput.value;
  closeButton();
}
function createCard(name,link) { //-----ОБЩАЯ ФУНКЦИЯ создания карточки
  const container = card.querySelector('.card').cloneNode(true);
  const cardsTitle = container.querySelector('.card__title');
  const cardsImage = container.querySelector('.card__img');
  const item ={
  name: name,
  link: link,
  }
  cardsTitle.textContent = item.name;
  cardsImage.src = item.link;
  deleateButtonFullScreen(container)
  openImage(cardsImage,link,name);
  likeHandler (container)
  addCard (container);
  return container;
}
function deleateButtonFullScreen(container){
  const deleateButton = container.querySelector('.card__deleate')//-----КНОПКА УДАЛЕНИЯ КАТОЧКИ
  deleateButton.addEventListener('click', () => { container.remove() })//-----УДАЛЕНИЕ КАРТОЧКИ 
}
function openImage(cardsImage,link,name){
  cardsImage.addEventListener('click', function () { //--- ОТКРЫТИЕ ЗУМА
  pageFull.classList.add('popup_opened');
  imgScreenFull.src = link;
  imgScreenFullName.textContent = name;
  })
  figureCloseButton.addEventListener('click', function () {//--- ЗАКРЫТИЕ ЗУМА
  pageFull.classList.remove('popup_opened');
  })
} 
function likeHandler (container){
  container.querySelector('.card__like-button').addEventListener('click', function (evt) { //----лайк кнопка
  evt.target.classList.toggle('card__like-button_active');
  })
}
function addCard (container){
  profile.prepend(container);
}
initialCards.forEach(function(name){   //---загрузка карточек через массив---\\
  createCard(name.name,name.link)
})
function forCreateCards(evt){  //---загрузка карточек через попап---\\
  evt.preventDefault();
  const name = popupPlace.querySelector('.popup__input_card-name').value;
  const link = popupPlace.querySelector('.popup__input_card-link').value;
  createCard(name,link);
  closeButtonNewPlace();
  resetButton();
}
function resetButton(){
  const inputStringName = popupPlace.querySelector('#ressetformName').value="";
  const inputStringLink = popupPlace.querySelector('#ressetformLink').value="";
}
//--слушатели события
formElement.addEventListener('submit', formSubmitHandler);
createButton.addEventListener('click', openButton);
closeEditProfilePopupBtn.addEventListener('click', closeButton);
buttonAdd.addEventListener('click', openButtonPlace); // НОВОЕ МЕСТО
closePlacePopupBtn.addEventListener('click', closeButtonNewPlace);// НОВОЕ МЕСТО
formElementPlace.addEventListener('submit', forCreateCards); //--попап form submit создание карточки