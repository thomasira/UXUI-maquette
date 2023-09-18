
export class Boxfilter{

    constructor(el){
        this.el = el;
        this.elFormOpen = this.el.querySelector('[data-js-trigger="open-filtre"]');
        this.elForm = this.el.querySelector('form');
        this.init();
    }

    init() {
        this.elFormOpen.addEventListener('click', () => this.openBoxFilter());
    }

    openBoxFilter() {
        this.elForm.classList.toggle('non-exist');
        this.elFormOpen.classList.toggle('inverse');
    }
}