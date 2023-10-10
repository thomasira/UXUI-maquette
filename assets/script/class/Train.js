
export class Train{
    #el;
    #elContainer;
    constructor(el) {
        this.#el = el;
        this.#elContainer = this.#el.closest('main');

        this.#init();
    }

    #init() {
        let containerRect = this.#elContainer.getClientRects()[0];
        this.#elContainer.addEventListener('mousemove', (e) => {

            let positionY = e.clientY - containerRect.y;
            let positionX = e.clientX - containerRect.x;
            this.#el.style.top = positionY + 'px';
            this.#el.style.left = positionX + 'px';

            let trainRect = this.#el.getClientRects()[0];
            let angle = Math.atan2(e.clientY - trainRect.y, e.clientX - trainRect.x ) * ( 180 / Math.PI );

            this.#el.style.transform = `rotate(${angle}deg)`;
            console.log(angle)

        });
    }

}