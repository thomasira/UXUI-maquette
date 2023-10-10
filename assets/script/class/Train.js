
export class Train{
    #el;
    #elContainer;
    constructor(el) {
        this.#el = el;
        this.#elContainer = this.#el.closest('main');

        this.#init();
    }

    #init() {
        let test = this.#elContainer.getClientRects()[0];
        this.#elContainer.addEventListener('mousemove', (e) => {
            let positionY = e.clientY - test.y;
            let positionX = e.clientX;
            console.log(positionX)
            this.#el.style.top = positionY + 'px';
            this.#el.style.left = positionX + 'px';
        });
    }

}