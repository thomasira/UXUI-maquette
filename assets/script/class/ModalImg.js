
export class ModalImg{
    constructor(el){
        this.el = el;
        this.elCover = el.closest('[data-js-modal="cover"]');
        this.elImg = el.querySelector('[data-js-img]')
        this.elBody = document.body;

        this.init();
    }

    init() {
        
    }

    ouvrirModal(src) {
        this.el.classList.toggle('non-exist');
        this.elCover.classList.toggle('non-exist');
        this.elBody.classList.toggle('no-scroll');
        this.elImg.src = src;
    }

    fermerModal() {
        
    }
}
