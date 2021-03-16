let popup = document.querySelector('.popup');
let createButton = document.querySelector('.profile__link');
let buttonClose = document.querySelector('.popup__close');
let popupButton = document.querySelector('.popup__button');
// let popupContainer = document.querySelector('.popup__container');
let nameTitle = document.querySelector('.profile__title'); ////////////////
let nameJob =  document.querySelector('.profile__subtitle');/////////////
let nameInput = document.querySelector('.popup__name'); 
let jobInput = document.querySelector('.popup__text');
let formElement =  document.querySelector('.popup__forms');
let likeButton = document.querySelector('.card__like-button');
/////////////////////////////////////////////////////
function openButton() {                    //ФУНКЦИЯ ОТКРЫТЫЕ ПОПАПА
    popup.classList.add('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = nameJob.textContent;
}
function closeButton() {                   //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
    popup.classList.remove('popup_opened');
}
function like(){
    likeButton.classList.toggle('card__like-button_active'); //ФУНКЦИЯ КНОПКА ЛАЙК
}
function formSubmitHandler(evt) {  //ФУНККЦИЯ ПОПАП ОКНО РЕДАКТИРОВАНИЯ
    evt.preventDefault();

     nameTitle.textContent = nameInput.value;
     nameJob.textContent = jobInput.value;   
     popupButton.addEventListener('click', closeButton);
}
//////////////////////////////////////////////////////
formElement.addEventListener('submit', formSubmitHandler);
likeButton.addEventListener('click', like);
createButton.addEventListener('click', openButton);
buttonClose.addEventListener('click', closeButton);
// popup.addEventListener('click', closeButton);
// popupContainer.addEventListener('click', function(e) {
//     e.stopImmediatePropagation();
// })
nameInput.value = nameTitle.textContent;
jobInput.value = nameJob.textContent;