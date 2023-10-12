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

        let containerRect = this.#elContainer.getClientRects()[0];
        
        this.#elContainer.addEventListener('mousemove', (e) => {

            let top = window.scrollY;
            let trainRect = this.#el.getClientRects()[0];
            let cursorXY = { x: e.clientX, y: e.clientY + top }
            let angle = Calculatrice.getAngle(cursorXY, trainRect);

            let mirror = "";
            if(angle < -90 || angle > 90) {
                mirror = '-';
                angle += 180;
            }

            let transform = `rotate(${angle}deg) scaleX(${mirror}1)`;
            this.#el.style.transform = transform;


            if(cursorXY.x + (trainRect.width * 1.5) < containerRect.right &&
            cursorXY.y + (trainRect.height * 1.5) < containerRect.bottom &&
            cursorXY.y > containerRect.top) {
                setTimeout(() => {
                    let positionY = cursorXY.y - containerRect.y - trainRect.height/2;
                    let positionX = cursorXY.x - containerRect.x - trainRect.width/2;
            console.log(positionY)

                    this.#el.style.top = positionY + 'px';
                    this.#el.style.left = positionX + 'px';
                }, "700");
            }
        });
    }

}