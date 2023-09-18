import { Boxfilter } from "./class/BoxFilter.js";


(function(){

    const elFiltre = document.querySelector('[data-js-filtre]');
    const elTrigger = elFiltre.querySelector('[data-js-trigger="open-filtre"]');
    const elSubfiltre = document.querySelector('[data-js-subfiltre]');
    
    const elBoxFilter = document.querySelector('[data-js-boxFilter]');

    const objBoxFilter = new Boxfilter(elBoxFilter);

    elTrigger.addEventListener('click', (e) => {
        elSubfiltre.classList.toggle('non-exist');

        elTrigger.classList.toggle('inverse');
    })

})();