export default class UserInfo{
    constructor(name, about,avatar) {
		this._name = name;
		this._about = about;
        this._avatar = avatar;
        this._userId = null;
	}
    getUserInfo(){ //----возвращает обьект с данными пользователя
        return{
            name:    this._name.textContent,
            about: this._about.textContent,
        }
    }
    setUserInfo(name,caption,userId){ //---принимает новые данные пользователя и добавляет их на страницу
        this._name.textContent = name;
		this._about.textContent = caption;
        this._userId = userId;
    }
    setUserAvatar(avatar){
		this._avatar.src = avatar;
	}
    userId() {
		return this._userId;
	}
}