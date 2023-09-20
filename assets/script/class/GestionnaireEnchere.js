import { Boxfilter } from "./BoxFilter.js";
import { Stamp } from "./Stamp.js";
import { ModalImg } from "./ModalImg.js";


export class GestionnaireEnchere{
    #stamps = [];
    #modalImg;
    #boxFilter;

    constructor(){
        this.#boxFilter = new Boxfilter(document.querySelector('[data-js-boxFilter]'));
        this.#modalImg = new ModalImg(document.querySelector('[data-js-modal="img"]'));

        this.init();
    }

    init() {

        document.querySelectorAll('[data-js-stamp]').forEach(stamp => {
            this.#stamps.push(new Stamp(stamp));
        });

        document.addEventListener('ouvrirImage', (e) => {
            this.#modalImg.ouvrirModal(e.detail);
        });
    }

    openBoxFilter() {
        this.elForm.classList.toggle('non-exist');
        this.elFormOpen.classList.toggle('inverse');
    }
}
