import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js'
import Section from '../components/Section.js'
import PopupWithImage from '../components/PopupWithImage.js'
import PopupWithForm from '../components/PopupWithForm.js'
import UserInfo from '../components/UserInfo.js'
import Api from '../components/Api.js'
import PopupDeleteCard from '../components/PopupDeleteCard.js'
import {
    nameJob, nameTitle, popupEditProfile, popupPlace, pageFull, profile,
    createButton, buttonCreateCard, editProfileForm, formElementPlace, nameInput,
    jobInput, popupInputName, popupInputLink, validationConfig, deleatePopup, avatarImg, buttonEditAvatar,
    popupEditAvatar, inputPopupAvatar, saveButtonAvatar,avatarEditForm
} from '../utils/constns.js'
//------------------API content---------------//-----------------//
const api = new Api({
    url: 'https://mesto.nomoreparties.co/v1/cohort-24/',
    headers: {
        authorization: 'a7c83460-3094-477b-9fb5-f7c43e4b79fa',
        'Content-Type': 'application/json'
    }
});
Promise.all([api.getUserInfo(), api.getCards()])
    .then(result => {    //попадаем сюда, когда оба промиса будут выполнены
        const [uerInfo, cardList] = result;
        userInfo.setUserInfo(uerInfo.name, uerInfo.about, uerInfo._id);
        userInfo.setUserAvatar(uerInfo.avatar);
        renderCard.renderItems(cardList);
        //hideApiError();
        return renderCard;
    })
    .catch((err) => {     //попадаем сюда если один из промисов завершится ошибкой
        console.log(`Загрузкка данных... Ошибка: ${err}`);
        //showApiError('Загрузкка данных... Ошибка');
    });
//------------------//---------------------------------------------------

const userInfo = new UserInfo(nameTitle, nameJob, avatarImg);//---данные инпутов РЕДАКТИРОАНИЯ ПОЛЬЗОВАТЕЛЯ

//---- ПОПАПЫ
const popupAvatarUpdate = new PopupWithForm(popupEditAvatar, //-----форма редактированя аватара пользователя
    {
        submitForm: () => {
            const button = popupEditAvatar.querySelector('.popup__button');
            button.textContent =  'Сохранение...';
            api.updAvatar(inputPopupAvatar.value)
                .then(result => {
                    userInfo.setUserAvatar(result.avatar);
                    popupAvatarUpdate.close()
                })
                .catch(err => {
                    console.log(`Сохранение аватара... Ошибка: ${err}`);
                    //showApiError('Сохранение аватара... Ошибка');
                })
                .finally(() => {
                    button.textContent = 'Сохранить';
                });
        }
    }

)
popupAvatarUpdate.setEventListeners();
//---
const popupEdit = new PopupWithForm(popupEditProfile,//----форма редактирования профиля
    {
        submitForm: (data) => {
            const button = popupEditProfile.querySelector('.popup__button');
            button.textContent =  'Сохранение...';
            api.setUserInfo(data.name, data.about)
                .then(result => {
                    userInfo.setUserInfo(result.name, result.about);
                    //hideApiError();
                    popupEdit.close();//---закрытие попапа
                })
                .catch(err => {
                    console.log(`Сохранение данных пользователя... Ошибка: ${err}`);
                   // showApiError('Сохранение данных пользователя... Ошибка');
                })
                .finally(() => {
                    button.textContent = 'Сохранить';
                });
        }
    }
);
popupEdit.setEventListeners();
//------  
const popupAdd = new PopupWithForm(popupPlace, {//--- форма добавление карточки
    submitForm: () => {
        const button = popupPlace.querySelector('.popup__button');
        button.textContent =  'Сохранение...';
        api.postCards(popupInputName.value, popupInputLink.value)
            .then((result) => {
                const cardElement = createCard(result);
                renderCard.addItem(cardElement, 'prepend');
                popupAdd.close();
            })
            .catch(err => {
                console.log(`Сохранение новой карточки...... Ошибка: ${err}`);
                //showApiError('Сохранение аватара... Ошибка');
            })
            .finally(() => {
                button.textContent = 'Создать';
            });
    }
});
popupAdd.setEventListeners();
//----
const popupDelete = new PopupDeleteCard(deleatePopup, //------форма удаления карточки
    {
        submitForm: () => {
            const button = deleatePopup.querySelector('.popup__button');
            button.textContent = 'Удаление...';
            api.deleteCard(popupDelete.cardId().id)
            .then(() => {
                popupDelete.cardId().remove();
                popupDelete.close();
            })
            .catch(err => {
                console.log(`Удаление карточки...... Ошибка: ${err}`);
            })
            .finally(
                button.textContent = 'Да'
            );
        }
    }
);
popupDelete.setEventListeners();
//----------------------------------------------------/------------------------//----------------
const editButtonHandler = () => { //---- ДАННЫЕ ПОЛЬЗОВАТЕЛЯ при открытие
    const profileData = userInfo.getUserInfo()
    nameInput.value = profileData.name;
    jobInput.value = profileData.about;
    popupEdit.open();//---открыттие попапа
};
const updButtonHandler = () => { //---- отключение кнопки при валидации и открытие попапа аватара user
    avatarEditForms.disableButton(saveButtonAvatar)
    popupAvatarUpdate.open();
};
//--------------------------------------------------------//-----------------/
const popupImage = new PopupWithImage(pageFull);
function handleCardClick(name, link) { //--- ФУНКЦИЯ ОТКРыТИЕ ПРОСМОТРА ИЗОБРАЖЕНИЯ
    popupImage.open(name, link)
}
popupImage.setEventListeners();
//----------------------------------------------------
const createCard = (item) => {         // СОЗДАНИЕ КАРТОЧКИ
    const userId = userInfo.userId();
    const card = new Card(
        item, 
        {
            handleCardClick,
            popupDelete: (cardId) => {
                popupDelete.open(cardId);
            },
            likeToggle: (cardId) => {
                if (!card.isLiked()) {
                    api.addCardLike(cardId.id)
                    .then((result) => {
                        card.setLikesInfo(result.likes);
                    })
                    .catch(err => {
                        console.log(`Лайк карточки...... Ошибка: ${err}`);
                    });
                } else {
                    api.removeCardLike(cardId.id)
                    .then((result) => {
                        card.setLikesInfo(result.likes);
                    })
                    .catch(err => {
                        console.log(`Удаление лайка карточки... Ошибка: ${err}`);
                    });
                }
            },
        },
        '.popup-place',
        userId,
    );

    const cardElementNew = card.generateCard();
    return cardElementNew;
};
const renderCard = new Section({  //------загрузка карточек в DOM
    renderer: (item) => {
        const cardElement = createCard(item);
        renderCard.addItem(cardElement, 'prepend');
    }
},
    profile);
//------------------------СЛУШАТЕЛИ--------------------------//
createButton.addEventListener('click', editButtonHandler);//--- слушаетль кнопки редактировать 

buttonEditAvatar.addEventListener('click', updButtonHandler)//---- слушатель(открытие) кнопки редактировать аватар

buttonCreateCard.addEventListener('click', () => { //---открытие попапа добавление картточки
    addFormValidation.disableButton(buttonCreateCard);//---отключение кнопки
    popupAdd.open();
});
//подключим валидацию добавления фото, создаем новый экземпляр класса FromValidator
const avatarEditForms = new FormValidator(validationConfig,avatarEditForm);//----валидация формы аватара
avatarEditForms.enableValidation()
const editFormValidation = new FormValidator(validationConfig, editProfileForm);//----валидация формы профиля
editFormValidation.enableValidation();
const addFormValidation = new FormValidator(validationConfig, formElementPlace);//----валидация формы новое место
addFormValidation.enableValidation();