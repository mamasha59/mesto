export default class Section {
    constructor({ items, renderer }, containerSelector) {
        this._renderedItems = items;
        this._renderer = renderer;
        this._container = containerSelector;
    }
    //перебор массив данных
    renderItems() {
        // this.clear();
        this._renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
    //вставка элемента в контейнер
    addItem(element) {
        this._container.prepend(element);
    }
}