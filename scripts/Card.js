import { openPopup } from './utils.js'
export default class Card {
  constructor(data, cardSelector) {
    this._image = data.link;
    this._title = data.name;
    this._cardSelector = cardSelector;
    this._openPopup = () => { //---- открытие попапа - просмотр изображения
      openPopup(pageFull) //--- сама функция открытие попапа изображения
      this._handleOpenPopup();  
    }
  }
  _getTemplate() { //--шаблон карточки
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }
  generateCard() {  //--- возвращение полноценной рабочей карточки со слушетялми и наполнением
    this._element = this._getTemplate();
    this._setEventListeners();
    this._setCardLikeListener();
    this._setDeleteCardListener();
    const cardImage = this._element.querySelector('.card__img');
    this._element.querySelector('.card__title').textContent = this._title;
    cardImage.src = this._image;
    cardImage.alt = this._title;
    return this._element;
  }
  _handleOpenPopup() { //-- наполнение попапа - просмотр изображения
    imgScreenFull.src = this._image;
    imgScreenFullName.textContent = this._title;
    imgScreenFull.alt = this._title;
  }
  _setEventListeners() { //---- слушатель и открытие попапа кликом на изображение
    this._element.querySelector('.card__img').addEventListener('click', () => {
      this._openPopup() // откройте попап
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
    });
  }
}