import  {imgScreenFull,imgScreenFullName} from '../utils/constns.js'
import Popup from '../components/Popup.js'

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
  }
  open(name, link) {
    imgScreenFull.src = link;
    imgScreenFullName.textContent = name;
    imgScreenFullName.alt = name;
    super.open()
  }
}