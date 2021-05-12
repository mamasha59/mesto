import Popup from '../components/Popup.js'

export default class PopupWithForm extends Popup {
    constructor(popupElement, {submitForm}) {
        super(popupElement);
        this._submitForm = submitForm;
        this._form = this._popup.querySelector('.popup__forms');
    }
    _getInputValues() { //-собирает данные всех полей формы
        this._inpValues = {};
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._inputList.forEach(input => {
            this._inpValues[input.name] = input.value;
        });
        return this._inpValues;
    }
    setEventListeners() {//----обработчик submit формы и закрытия
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
    }
    close() {//---перезаписывает и сбрасывает форму
        super.close(); //--закрытие попапа
        this._form.reset()
    }
}