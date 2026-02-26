let startX = 0, startY = 0;
let activeCard = null;

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousedown', e => mouseDown(e, card));
});

function mouseDown(e, card){
    activeCard = card;
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseup', mouseUp);
}

function mouseMove(e){
    if (!activeCard) return;

    const newX = startX - e.clientX;
    const newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    activeCard.style.top = (activeCard.offsetTop - newY) + 'px';
    activeCard.style.left = (activeCard.offsetLeft - newX) + 'px';
}

function mouseUp(){
    document.removeEventListener('mousemove', mouseMove);
    activeCard = null;
}
