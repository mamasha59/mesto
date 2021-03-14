let popup = document.querySelector('.popup');
let createButton = document.querySelector('.profile-block__link');
let buttonClose = document.querySelector('.popup__close');
let popupOverlay = document.querySelector('.popup__overlay');
let popupButton = document.querySelector('.popup__button');
function openButton() {
    popup.classList.add('popup_opened');
}
function closeButton() {
    popup.classList.remove('popup_opened');
}
createButton.addEventListener('click', function(e) {
    openButton();

})
buttonClose.addEventListener('click', function(e) {
    closeButton();
})

popupOverlay.addEventListener('click', function(e) {
    closeButton();
})
popupButton.addEventListener('click', function(e) {
    closeButton();
})
let nameTitle = document.getElementById('title');
let nameJob =  document.getElementById('subtitle');
let nameInput = document.querySelector('.popup__name'); 
let jobInput = document.querySelector('.popup__text');

nameInput.value = nameTitle.textContent;
jobInput.value = nameJob.textContent;

let formElement =  document.querySelector('.popup__forms');
function formSubmitHandler(evt) {
   evt.preventDefault();

    nameInput.value;
    jobInput.value;

    nameTitle.textContent = nameInput.value;
    nameJob.textContent = jobInput.value;
    
}
formElement.addEventListener('submit', formSubmitHandler,);