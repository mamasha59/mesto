let popup = document.querySelector('.popup');
let createButton = document.querySelector('.profile__link');
let buttonClose = document.querySelector('.popup__close');
let nameTitle = document.querySelector('.profile__title'); ////////////////
let nameJob =  document.querySelector('.profile__subtitle');/////////////
let nameInput = document.querySelector('.popup__name'); 
let jobInput = document.querySelector('.popup__text');
let formElement =  document.querySelector('.popup__forms');
/////////////////////////////////////////////////////
function openButton() {                    //ФУНКЦИЯ ОТКРЫТЫЕ ПОПАПА
    popup.classList.add('popup_opened');
    nameInput.value = nameTitle.textContent;
    jobInput.value = nameJob.textContent;
}
function closeButton() {                   //ФУНКЦИЯ ЗАКРЫТИЕ ПОПАПА
    popup.classList.remove('popup_opened');
}
function formSubmitHandler(evt) {  //ФУНККЦИЯ ПОПАП ОКНО РЕДАКТИРОВАНИЯ
    evt.preventDefault();

     nameTitle.textContent = nameInput.value;
     nameJob.textContent = jobInput.value;   
     closeButton();
}
//////////////////////////////////////////////////////
formElement.addEventListener('submit', formSubmitHandler);
createButton.addEventListener('click', openButton);
buttonClose.addEventListener('click', closeButton);
// nameInput.value = nameTitle.textContent;
// jobInput.value = nameJob.textContent;