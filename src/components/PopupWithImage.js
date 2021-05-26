import Popup from './Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
  }
  open(name, link) {
    const imgScreenFull = this._popup.querySelector('.card-open__screen');
    const imgScreenFullName = this._popup.querySelector('.card-open__name');
    imgScreenFull.src = link;
    imgScreenFull.alt = name;
    imgScreenFullName.textContent = name;
    super.open()
  }
}