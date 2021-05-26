export default class Section {
    constructor({ renderer }, containerSelector) {
        this._renderer = renderer;
        this._container = containerSelector;
    }
    //перебор массив данных
    renderItems(data) {
        data.forEach(item => this._renderer(item));
    }
    //вставка элемента в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}