let modalSuccess = document.getElementById('modal_success');
let modalMain = document.getElementById('modal_main');
if(modalMain && modalSuccess) {
    popupBasicClass = modalMain.className;
    modalMain.className += ' modal_active';
}

let modalsClose = document.getElementsByClassName('modal__close modal__close_times');
for (const item in modalsClose) {
    // console.log(modalsClose[item]);
    // ********
        // как вот тут через this обратиться к modalsClose[item]?
    // ********
    modalsClose[item].onclick = function() {
        modalMain.className = popupBasicClass ? popupBasicClass : 'modal';
        modalSuccess.className = popupBasicClass ? popupBasicClass : 'modal';
    }
}

let btnDoAwesome = modalMain.getElementsByClassName('modal__close')[1];
if(btnDoAwesome) {
    btnDoAwesome.onclick = function() {
        modalMain.className = popupBasicClass;
        modalSuccess.className += ' modal_active';

    }
}

// Чувствуется что тут такие лесопедокостыля... Короче жду вашей конструктивной критике.
// З.Ы. Зачем два акна то в верстке??