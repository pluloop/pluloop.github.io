const tokyoTicket = document.getElementById('tokyoTicket');
const icoca = document.getElementById('icoca');

function draggable(object) {
    let offsetX = 0;
    let offsetY = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isMouseDown = false;

    object.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        offsetX = object.offsetLeft - e.clientX;
        offsetY = object.offsetTop - e.clientY;
    });

    document.addEventListener('mousemove', (e) => {
        if(!isMouseDown) return;
        e.preventDefault();
        mouseX = e.clientX + offsetX;
        mouseY = e.clientY + offsetY;
        object.style.left = mouseX + 'px';
        object.style.top = mouseY + 'px';
    });

    document.addEventListener('mouseup', (e) => {
        isMouseDown = false;
    });
}

draggable(tokyoTicket);
draggable(icoca);