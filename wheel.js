const firstView = document.querySelector('.first-view');
const secondView = document.querySelector('.second-view');

const viewArray = [firstView, secondView];
let page = 0;

function wheelEvent(e) {
    console.log(e.deltaY, page, viewArray[page]);
    let direction = e.deltaY > 0;
    if (direction && page < 3) {
        console.log('hey');
        viewArray[page++].classList.add('none-display-view');
        viewArray[page].classList.add('display-view');
    }
}

console.log(viewArray[page] === firstView);


window.addEventListener('wheel', wheelEvent);
