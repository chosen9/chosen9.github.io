// if (!Element.prototype.matches) 
//   Element.prototype.matches = Element.prototype.msMatchesSelector;

if (!Element.prototype.closest) Element.prototype.closest = function (selector: any) {
  var el: any = this;
  while (el) {
    if (el.matches(selector)) {
      return el;
    }

    el = el.parentElement;
  }
};

export default class ImageModal {

  private imageModalsBtn: string = '[data-toggle="image-modal"]';
  private imageModalsClose: string = '.image-modal-close-icon';
  private imageModalFooter: string = '.image-modal-footer';
  private activeClass: string = 'image-modal-active';
  private imageModalsCloseBtn: string = '.image-modal-close';
  private imageModalsImg: string = '.image-modal-img';

  constructor() {
    this.loadIcons();
    this.activate();
    this.deActivate();
  }

  private loadIcons(): void {
    const getCloseIcon = document.querySelectorAll(this.imageModalsClose);

    getCloseIcon?.forEach(elm => {
      elm.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="close-large"><line fill="none" stroke="#000" stroke-width="1.4" x1="1" y1="1" x2="19" y2="19"></line><line fill="none" stroke="#000" stroke-width="1.4" x1="19" y1="1" x2="1" y2="19"></line></svg>';
    });
  }

  private activate(): void {
    const getBtns = document.querySelectorAll(this.imageModalsBtn);
    getBtns.forEach(elm => {
      elm.addEventListener('click', () => {
        const getTarget = elm.getAttribute('data-target');
        const getText = elm.getAttribute('data-projectdetails');
        const getImg = elm.getAttribute('src');

        let getModal: any;

        if (getTarget) {
          getModal = document.querySelector(getTarget);
        }

        if (getModal) {
          getModal.querySelector(this.imageModalsImg).src = getImg;
          getModal.querySelector(this.imageModalFooter).innerHTML = getText;
          getModal.classList.add(this.activeClass);

          //lock scrolling document
          document.body.classList.add('image-modal-open');
        }
      })
    })
  }

  private deActivate(): void {
    const getCloseBtns = document.querySelectorAll(this.imageModalsCloseBtn);
    getCloseBtns.forEach(elm => {
      elm.addEventListener('click', () => {
        const getModal = elm.closest('.image-modal');
        getModal?.classList.remove(this.activeClass);
        //unLock scrolling document
        document.body.classList.remove('image-modal-open');
      })
    })
  }
}