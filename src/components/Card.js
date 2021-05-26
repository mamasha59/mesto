export default class Card {
  constructor({likes,_id,name,link,owner},{handleCardClick,popupDelete,likeToggle}, cardSelector, userId) {
    this._likes = likes;
    this._id = _id;
    this._title = name;
    this._image = link;
    this._handleCardClick = handleCardClick;
    this._openPopupDelete = popupDelete;
    this._cardSelector = cardSelector;

    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardPhoto = this._element.querySelector('.card__img');
    this._cardTrash = this._element.querySelector('.card__deleate');
    this._likeCounter = this._element.querySelector('.card__like-counter');
    this._cardLike = this._element.querySelector(".card__like-button");
    this._likeToggle = likeToggle;
    this._userId = userId;//---пользователя айди
    this._ownerId = owner._id;//--- мой айди
    this._cardLikeActive = 'card__like-button_active';
  }
  _getTemplate() { //--шаблон карточки
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);
    return cardElement;
  }
  _handleDeleteCard() {
    this._openPopupDelete(this._element);
  }
  _handleLikeCard() {
    this._likeToggle(this._element);
  }
  setLikesInfo(likes) {
    this._likes = likes;
    this._updateLikes();
  }
  _setEventListeners() { //---- слушатель и открытие попапа кликом на изображение
    this._element.querySelector('.card__img').addEventListener('click', () => this._handleCardClick(this._title, this._image));
    this._cardTrash.addEventListener('click', () => this._handleDeleteCard());
    this._cardLike.addEventListener('click', () => this._handleLikeCard());
  }
  isLiked() {
    return this._likes.some(like => like._id === this._userId);
  }
  _updateLikes() {
    this._likeCounter.textContent = this._likes.length;
    if (this.isLiked()) {
      this._cardLike.classList.add(this._cardLikeActive);
  } else {
      this._cardLike.classList.remove(this._cardLikeActive);
  }
  }
  generateCard() {  //--- возвращение полноценной рабочей карточки со слушетялми и наполнением
    this._setEventListeners();
    if (this._userId === this._ownerId) {
      this._cardTrash.classList.add('card__delete_style_active');
    }; //-----что бы мог удалять только тобой созданные карточки
    this._updateLikes();
    this._element.id = this._id; //-----для удаления карточки
    this._cardTitle.textContent = this._title;
    this._cardPhoto.src = this._image;
    this._cardPhoto.alt = this._title;
    return this._element;
  }
}