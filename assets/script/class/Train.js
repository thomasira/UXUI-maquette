import { Calculatrice } from "./Calculatrice.js"

export class Train{
    #el;
    #elContainer;
    constructor(el) {
        this.#el = el;
        this.#elContainer = this.#el.closest('section');

        this.#init();
    }

    #init() {

        // si la page est rafraichie et un scroll est présent. Pour ajuster le positionnement
        let scroll = false;
        if(window.scrollY) scroll = window.scrollY;

        // les specs du conteneur(x, y, top, bottom, width...)
        let containerRect = this.#elContainer.getClientRects()[0];
        
        this.#elContainer.addEventListener('mousemove', (e) => {

            // les specs du train
            let trainRect = this.#el.getClientRects()[0];

            //la position du curseur dans la page
            let pageCursor = { x: e.pageX, y: e.pageY };

            //la position du curseur dans l'écran
            let windowCursor = { x: e.clientX, y: e.clientY };

            //trouver l'angle
            let angle = Calculatrice.getAngle(windowCursor, trainRect);

            //ajuster position y du curseur si scroll est présent au chargement de la page
            if(scroll) pageCursor.y -= scroll;

            // ajuster le train selon gauche droite(mirroir sur image)
            let mirror = "";
            if(angle < -90 || angle > 90) {
                mirror = '-';
                angle += 180;
            }

            // appliquer les transfos sur le train(rotation et mirroir)
            this.#el.style.transform = `rotate(${angle}deg) scaleX(${mirror}1)`;

            // après un delai, appliquer les nouvelles positions sur le train
            setTimeout(() => {
                let positionY = pageCursor.y - containerRect.y - trainRect.height/2;
                let positionX = pageCursor.x - containerRect.x - trainRect.width/2;
                this.#el.style.top = positionY + 'px';
                this.#el.style.left = positionX + 'px';
            }, "300");
            
        });
    }

}