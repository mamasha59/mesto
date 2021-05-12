export default class UserInfo{
    constructor(name, about) {
		this._name = name;
		this._about = about;
	}
    getUserInfo(){ //----возвращает обьект с данными пользователя
        return{
            name:    this._name.textContent,
            about: this._about.textContent,
        }
    }
    setUserInfo(data){ //---принимает новые данные пользователя и добавляет их на страницу
        this._name.textContent = data.name;
		this._about.textContent = data.about;
    }
}