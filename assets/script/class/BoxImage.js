
export class BoxImage{

    constructor(el) {
        this.el = el;
        this.#init();
    }

    #init() {
        this.el.addEventListener('mouseover', (e) => {
            console.log(this.el.getBoundingClientRect().height);
        })
    }

}