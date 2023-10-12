import { Calculatrice } from "./Calculatrice.js"

export class Train{
    #el;
    #elContainer;
    constructor(el) {
        this.#el = el;
        this.#elContainer = this.#el.closest('main');

        this.#init();
    }

    #init() {
        let scroll = false;
        if(window.scrollY) scroll = window.scrollY;

        let containerRect = this.#elContainer.getClientRects()[0];
        
        this.#elContainer.addEventListener('mousemove', (e) => {

            let trainRect = this.#el.getClientRects()[0];
            let pageCursor = { x: e.pageX, y: e.pageY };
            let windowCursor = { x: e.clientX, y: e.clientY };
            let angle = Calculatrice.getAngle(windowCursor, trainRect);

            if(scroll) pageCursor.y -= scroll;

            let mirror = "";
            if(angle < -90 || angle > 90) {
                mirror = '-';
                angle += 180;
            }

            this.#el.style.transform = `rotate(${angle}deg) scaleX(${mirror}1)`;

            setTimeout(() => {
                let positionY = pageCursor.y - containerRect.y - trainRect.height/2;
                let positionX = pageCursor.x - containerRect.x - trainRect.width/2;
                this.#el.style.top = positionY + 'px';
                this.#el.style.left = positionX + 'px';
            }, "300");
            
        });
    }

}