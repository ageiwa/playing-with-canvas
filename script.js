const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');

cvs.addEventListener('click', async (e) => {
    const x = e.pageX - cvs.offsetLeft - 25;
    const y = e.pageY - cvs.offsetTop - 25;

    await animationLine(x, y, x + 50, y + 50, 5);
    await animationLine(x + 50, y, x, y + 50, 5);
});

function animationLine(x1, y1, x2, y2, speed = 1) {
    return new Promise((resolve, reject) => {
        
        function animationStep(x1, y1, x2, y2, speed) {
            ctx.beginPath();
            ctx.moveTo(x1, y1);

            if (x1 > x2) x1 -= speed;
            else x1 += speed;

            if (y1 > y2) y1 -= speed;
            else y1 += speed;

            ctx.lineTo(x1, y1);
            ctx.stroke();

            if (x1 === x2 && y1 === y2) resolve();
            else requestAnimationFrame(() => animationStep(x1, y1, x2, y2, speed));
        }

        requestAnimationFrame(() => animationStep(x1, y1, x2, y2, speed));
    });
}

// function animationLine(x1, y1, x2, y2, speed) {
//     ctx.beginPath();
//     ctx.moveTo(x1, y1);

//     if (x1 > x2) x1 -= speed;
//     else x1 += speed;

//     if (y1 > y2) y1 -= speed;
//     else y1 += speed;

//     ctx.lineTo(x1, y1);
//     ctx.stroke();

//     if (x1 === x2 && y1 === y2) return new Promise((resolve) => resolve('Готово!'));

//     requestAnimationFrame(() => animationLine(x1, y1, x2, y2, speed));
// }