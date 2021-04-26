export default class FormValidator{
  constructor(formElements, validatingForm){
      this._formSelector = formElements.formSelector;
      this._inputSelector = formElements.inputSelector;
      this._submitButtonSelector = formElements.submitButtonSelector;
      this._inactiveButtonClass = formElements.inactiveButtonClass;
      this._inputErrorClass = formElements.inputErrorClass;
      this._errorClass = formElements.errorClass;

      this._validatingForm = validatingForm;
      this._inputList = Array.from(this._validatingForm.querySelectorAll(this._inputSelector)); //---инпуты
      this._submitButton = this._validatingForm.querySelector(this._submitButtonSelector);
}
_hasInvalidInput = () => {
  //---проверка валидации
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
_isValid = (inputElement) => {
  //-----проверка на валидность
  if (!inputElement.validity.valid) {
    this._showInputError(
      inputElement,
      inputElement.validationMessage,
    );
  } else {
    this._hideInputError(inputElement);
  }
};
// Функция, которая добавляет класс с ошибкой
_showInputError = (inputElement, errorMessage) => {
  const errorElement = this._validatingForm.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.classList.add(this._errorClass);
  errorElement.textContent = errorMessage;
};
// Функция, которая удаляет класс с ошибкой
_hideInputError = (inputElement) => {
  const errorElement = this._validatingForm.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
};
//--------------------------
disableButton() { //----общая функция отключения кнопки
  this._submitButton.classList.add(this._inactiveButtonClass);
  this._submitButton.setAttribute("disabled", true)
}
_toggleButtonState = (buttonElement) => {
  //--- меняет стиль и состояние кнопки
  if (this._hasInvalidInput(this._inputList)) {
    // кнопка неактивна
  this.disableButton(buttonElement)
  } else {
    // кнопка активна
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute("disabled");
  }
}
_setEventListeners = () => {
    
    this._toggleButtonState(this._inputList, this._submitButton);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList, this._submitButton);
      });
    });
  };
  //----------------------------------
enableValidation = () => {
    // Функция принимает массив полей
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach (() => {
      this._setEventListeners();
    });
  };
};