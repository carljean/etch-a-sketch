function generateGrid(size) {
    const container = document.querySelector('.container');

    for(let row = 0; row < size; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add('row');
        container.appendChild(gridRow);

        for(let column = 0; column < size; column++) {
            const gridColumn = document.createElement('div');
            gridColumn.classList.add('column');
            gridRow.appendChild(gridColumn);
        }
    }
}


function pen() {
    const pen = document.querySelectorAll('.row > .column');
    
    for(let i = 0; i < pen.length; i++) {
        pen[i].addEventListener("mouseover", function () {
            pen[i].style.cssText = `background: #000;`;
        });
    }
}


function easApp() {
    // eas stands for etch-a-sketch
    generateGrid(16);
    pen();
    const button = document.querySelector('#chgsize');

    
    button.addEventListener('click', function () {
        let size = parseInt(prompt('Enter a new size(2-100): '));
        
        while(size <= 1 || size >= 101) {
            size = parseInt(prompt('INVALID INPUT: Enter a size between 2 and 100: '));
        }

        deleteChild();
        generateGrid(size);
        pen();
    });

    // code for erasing
    const eraseBtn = document.querySelector('#eraser');

    eraseBtn.addEventListener('click', function () {
        eraser();
    });

    // code for setting black color back
    const blackBtn = document.querySelector('#black');

    blackBtn.addEventListener('click', function () {
        pen();
    });

    // code for random color
    const randomBtn = document.querySelector('#randomColor');

    randomBtn.addEventListener('click', function () {
        const pen = document.querySelectorAll('.row > .column');
    
    for(let i = 0; i < pen.length; i++) {
        pen[i].addEventListener("mouseover", function () {
            pen[i].style.cssText = `background: rgb(${randomNum()}, ${randomNum()}, ${randomNum()});`;
        });
    }
        
    });
}

function deleteChild() {
    const container = document.querySelector('.container');
    let child = container.lastElementChild;

    while(child) {
        container.removeChild(child);
        child = container.lastElementChild;
    }
}

function eraser() {
    const pen = document.querySelectorAll('.row > .column');
    
    for(let i = 0; i < pen.length; i++) {
        pen[i].addEventListener("mouseover", function () {
            pen[i].style.cssText = `background: white`;
        });
    }
}

function randomNum() {
    return Math.floor(Math.random() * 256);
}

easApp();