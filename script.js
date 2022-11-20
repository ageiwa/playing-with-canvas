const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');

cvs.addEventListener('click', async (e) => {
    const x = e.pageX - cvs.offsetLeft - 25;
    const y = e.pageY - cvs.offsetTop - 25;

    animationLine(x, y, x + 50, y + 50, 2);
    animationLine(x + 50, y, x, y + 50, 2);
});

function animationLine(x1, y1, x2, y2, speed) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);

    if (x1 > x2) x1 -= speed;
    else x1 += speed;

    if (y1 > y2) y1 -= speed;
    else y1 += speed;

    ctx.lineTo(x1, y1);
    ctx.stroke();

    if (x1 === x2 && y1 === y2) return;

    requestAnimationFrame(() => animationLine(x1, y1, x2, y2, speed));
}

// function animationDrawX(x, y, point, step = 1) {
//     if (step === 1) {
//         if (x < point[0] && y < point[1]) {
//             ctx.beginPath();
//             ctx.moveTo(x, y);
    
//             x += 5;
//             y += 5;
    
//             ctx.lineTo(x, y);
//             ctx.stroke();
//         }
//         else {
//             step = 2;

//             y -= 50;
//             point = [x-50, y+50];
//         }
//     }
//     else if (step === 2) {
//         if (x > point[0] && y < point[1]) {

//             ctx.beginPath();
//             ctx.moveTo(x, y);
    
//             x -= 5;
//             y += 5;
    
//             ctx.lineTo(x, y);
//             ctx.stroke();
//         }
//         else step = null;
//     }
//     else return;

//     requestAnimationFrame(() => animationDrawX(x, y, point, step));
// }