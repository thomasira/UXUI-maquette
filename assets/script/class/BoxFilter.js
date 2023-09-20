
export class Boxfilter{

    constructor(el){
        if (!Boxfilter.instance) Boxfilter.instance = this;
        else throw new Error("impossible de dupliquer cette classe");

        this.el = el;
        this.elFormOpen = this.el.querySelector('[data-js-trigger="open-filtre"]');
        this.elForm = this.el.querySelector('form');
        this.elFormReset = this.elForm.querySelector('[data-js-trigger="reset"]')

        this.#init();
    }

    #init() {
        this.elFormOpen.addEventListener('click', () => this.#toggleBoxFilter());
        this.elForm.addEventListener('submit', (e) => e.preventDefault());
        this.elFormReset.addEventListener('click', () => this.elForm.reset());
        this.#initFiltres();
        
    }

    #initFiltres(){
        this.el.querySelectorAll('[data-js-filtre]').forEach(elFilter => {
            const elFilterToggle = elFilter.querySelector('[data-js-trigger="open-filtre"]');
            const elSubfiltre = elFilter.querySelector('[data-js-subfiltre]');

            elFilterToggle.addEventListener('click', () => {
                elSubfiltre.classList.toggle('non-exist');
                elFilterToggle.classList.toggle('inverse');
            });
        });
    }

    #toggleBoxFilter() {
        this.elForm.classList.toggle('non-exist');
        this.elFormOpen.classList.toggle('inverse');
    }
}

