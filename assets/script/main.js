
(function(){

    const elFiltre = document.querySelector('[data-js-filtre]');
    const elTrigger = elFiltre.querySelector('[data-js-trigger="open-filtre"]');
    const elSubfiltre = document.querySelector('[data-js-subfiltre]');

    elTrigger.addEventListener('click', (e) => {
        elSubfiltre.classList.toggle('non-exist');

        elTrigger.classList.toggle('inverse');
    })

    console.log(elFiltre, elTrigger, elSubfiltre)
})();