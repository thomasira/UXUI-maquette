import { Boxfilter } from "./BoxFilter.js";
import { Stamp } from "./Stamp.js";

export class GestionnaireEnchere{

    constructor(el){
        this.elBoxFilter = document.querySelector('[data-js-boxFilter]');
        this.elStamps = document.querySelectorAll('[data-js-stamp]');
        this.init();
    }

    init() {
        this.Boxfilter = new Boxfilter(this.elBoxFilter);
        console.log(this.Boxfilter)

        this.elStamps.forEach(stamp => {
            new Stamp(stamp);
        });
    }

    openBoxFilter() {
        this.elForm.classList.toggle('non-exist');
        this.elFormOpen.classList.toggle('inverse');
    }
}
