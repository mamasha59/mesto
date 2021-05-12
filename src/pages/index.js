import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import {
    nameJob, nameTitle, popupEditProfile, popupPlace, pageFull, initialCards, profile,
    createButton, buttonCreateCard, editProfileForm, formElementPlace, nameInput,
    jobInput, popupInputName, popupInputLink,validationConfig
} from '../utils/constns.js'
//---------------------------------------------/----------------------------//---------------
const userInfo = new UserInfo(nameTitle, nameJob);//---данные инпутов РЕДАКТИРОАНИЯ ПОЛЬЗОВАТЕЛЯ

//---- ПОПАПЫ
const popupEdit = new PopupWithForm(popupEditProfile,//----форма редактирования профиля
    {
        submitForm: (data) => {
            userInfo.setUserInfo(data);
            popupEdit.close();//---закрытие попапа
        }
    }
);
popupEdit.setEventListeners();
//------  
const popupAdd = new PopupWithForm(popupPlace, {//--- форма добавление карточки
    submitForm: (data) => {
        const cardElement = createCard({
            name: popupInputName.value,
            link: popupInputLink.value,
        });
        renderCard.addItem(cardElement, 'prepend');
        popupAdd.close();
    }
});
popupAdd.setEventListeners();
//----------------------------------------------------/------------------------//----------------
const editButtonHandler = () => { //---- ДАННЫЕ ПОЛЬЗОВАТЕЛЯ при открытие
    const profileData = userInfo.getUserInfo()
    nameInput.value = profileData.name;
    jobInput.value = profileData.about;
    // addFormValidation.disableButton(buttonSaveEditProfile);
    popupEdit.open();//---открыттие попапа
};
//--------------------------------------------------------//-----------------/
const popupImage = new PopupWithImage(pageFull);
function handleCardClick(name, link) { //--- ФУНКЦИЯ ОТКРТИЕ ПРОСМОТРА ИЗОБРАЖЕНИЯ
    popupImage.open(name, link)
}
popupImage.setEventListeners();
//----------------------------------------------------
const createCard = (item) => {          // СОЗДАНИЕ КАРТОЧКИ
    const card = new Card(item, handleCardClick, '.popup-place');
    const cardElementNew = card.generateCard();
    return cardElementNew;
}
const renderCard = new Section({  //------загрузка карточек через массив
    items: initialCards, renderer: (item) => {
        const cardElement = createCard(item);
        renderCard.addItem(cardElement, 'prepend');
    }
},
    profile);
renderCard.renderItems()
//------------------------------------------//------------------------------------/
createButton.addEventListener('click', editButtonHandler);

buttonCreateCard.addEventListener('click', () => { //---открытие попапа добавление картточки
    addFormValidation.disableButton(buttonCreateCard);//---отключение кнопки
    popupAdd.open();
});

const editFormValidation = new FormValidator(validationConfig, editProfileForm);
editFormValidation.enableValidation();
//подключим валидацию добавления фото, создаем новый экземпляр класса FromValidator
const addFormValidation = new FormValidator(validationConfig, formElementPlace);
addFormValidation.enableValidation();