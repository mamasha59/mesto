export default class FormValidator{
  constructor(formElements){
      this._formSelector = formElements.formSelector;
      this._inputSelector = formElements.inputSelector;
      this._submitButtonSelector = formElements.submitButtonSelector;
      this._inactiveButtonClass = formElements.inactiveButtonClass;
      this._inputErrorClass = formElements.inputErrorClass;
      this._errorClass = formElements.errorClass;
}
_hasInvalidInput = (inputList) => {
  //---проверка валидации
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};
_isValid = (formElement, inputElement, formElements) => {
  //-----проверка на валидность
  if (!inputElement.validity.valid) {
    this._showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      formElements
    );
  } else {
    this._hideInputError(formElement, inputElement, formElements);
  }
};
// Функция, которая добавляет класс с ошибкой
_showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(this._inputErrorClass);
  errorElement.classList.add(this._errorClass);
  errorElement.textContent = errorMessage;
};
// Функция, которая удаляет класс с ошибкой
_hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(this._inputErrorClass);
  errorElement.classList.remove(this._errorClass);
  errorElement.textContent = "";
};


//--------------------------
_toggleButtonState = (inputList, buttonElement) => {
  //--- меняет стиль и состояние кнопки
  if (this._hasInvalidInput(inputList)) {
    // кнопка неактивна
    buttonElement.classList.add(this._inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  } else {
    // кнопка активна
    buttonElement.classList.remove(this._inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
}
_setEventListeners = (formElement) => {
    //---- слушатель для всех инпутов
    const inputList = Array.from(
      formElement.querySelectorAll(this._inputSelector)
    );
    const buttonElement = formElement.querySelector(
      this._submitButtonSelector
    );
    this._toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", (evt) => {
        this._isValid(formElement, inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };
  
  //----------------------------------
enableValidation = () => {
    // Функция принимает массив полей
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((formElement) => {
      this._setEventListeners(formElement);
    });
  };
};