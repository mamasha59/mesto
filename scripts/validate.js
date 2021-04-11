// Функция, которая добавляет класс с ошибкой
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(settings.inputErrorClass);
    errorElement.classList.add(settings.errorClass);
    errorElement.textContent = errorMessage;
}
// Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement,settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(settings.inputErrorClass);
    errorElement.classList.remove(settings.errorClass);
    errorElement.textContent = "";
}

const hasInvalidInput = (inputList) => { //---проверка валидации
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;    
    })
}
//--------------------------
const toggleButtonState = (inputList, buttonElement, settings) => { //--- меняет стиль и состояние кнопки
    if (hasInvalidInput(inputList)) {
        // кнопка неактивна
        buttonElement.classList.add(settings.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
    } else {
        // кнопка активна
        buttonElement.classList.remove(settings.inactiveButtonClass);
        buttonElement.removeAttribute('disabled')
    }
}

//--------------------------
const isValid = (formElement, inputElement, settings) => {  //-----проверка на валидность
    if (!inputElement.validity.valid) {
       showInputError(formElement, inputElement, inputElement.validationMessage,settings);
    } else {
       hideInputError(formElement, inputElement, settings);
    }
}
//------------------------------------------------------
const setEventListeners = (formElement, settings) => {  //---- слушатель для всех инпутов
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
    const buttonElement = formElement.querySelector(settings.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, settings);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', (evt) => {
            isValid(formElement, inputElement,settings)
            toggleButtonState(inputList, buttonElement, settings);
        })
    })  
}

//----------------------------------
const enableValidation = (settings) => {// Функция принимает массив полей
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
        setEventListeners(formElement, settings);
        
    })
}
enableValidation({
    formSelector: '.popup__forms',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__error_border',
    errorClass: 'popup__error_visible'
})
//----------------------------------------