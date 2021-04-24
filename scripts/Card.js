import closePopUpEsc from './index.js';

export default class Card {
  constructor(data, cardSelector) {
    this._image = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setCardLikeListener();
    this._setDeleteCardListener();
    this._element.querySelector('.card__img').src = this._image;
    this._element.querySelector('.card__title').textContent = this._title;
    return this._element;
  }
  _handleOpenPopup() {
    imgScreenFull.src = this._image;
    imgScreenFullName.textContent = this._title;
    imgScreenFull.alt = this._title;
    pageFull.classList.add('popup_opened');
    document.addEventListener("keydown", closePopUpEsc)
  }
  _handleClosePopup() {
    pageFull.classList.remove('popup_opened');
    document.removeEventListener("keydown", closePopUpEsc)
  }
  _setEventListeners() {
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._handleOpenPopup() // откройте попап
    });
    figureCloseButton.addEventListener('click', () => {
      this._handleClosePopup() // закройте попап
    });
  }
  _setCardLikeListener() {
    //----лайк кнопка
    const cardLikeButtom = this._element.querySelector(".card__like-button")
      .addEventListener("click", function (evt) {
        evt.target.classList.toggle("card__like-button_active");
      });
  }

  _setDeleteCardListener() {
    //-----КНОПКА УДАЛЕНИЯ КАРТОЧКИ
    const deleateButton = this._element.querySelector(".card__deleate");
    deleateButton.addEventListener("click", () => {
      this._element.remove();
    }); //-----УДАЛЕНИЕ КАРТОЧКИ
  }
}