
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

            let trainRect = this.#el.getClientRects()[0];
            let angle = Math.atan2(e.clientY - trainRect.y, e.clientX - trainRect.x ) * ( 180 / Math.PI );

            let mirror = "";
            if(angle < -90 || angle > 90){
                mirror = 'scaleX(-1)';
                angle = angle - 180;
            } 

            let transform = `rotate(${angle}deg) ${mirror}`;
            this.#el.style.transform = transform;

            console.log(angle)

            setTimeout(() => {
                let positionY = e.clientY - containerRect.y;
                let positionX = e.clientX - containerRect.x;
                this.#el.style.top = positionY + 'px';
                this.#el.style.left = positionX + 'px';
            }, "500");


        });
    }

}