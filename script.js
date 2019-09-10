function flickerPicture(turnOn, speed, cycle, countOpenElem, transition) {

    const flickerPicture = {
        turnOn,
        countElem: 25,
        speed,
        cycle,
        countOpenElem,
        transition,
    };

    const container = document.querySelector('.container');
    let arrCells = [];

    // create cells
    for (let i = 1; i <= flickerPicture.countElem; i++) {
        let cell = document.createElement('div');
        cell.className = 'cell';
        cell.style.width = `${20}%`;
        cell.style.height = `${20}%`;
        cell.style.transition = `${transition}s`;
        container.appendChild(cell);

        arrCells.push(cell);
    }


    function getRandomCell(speed, cycle, countOpenElem) {
        let i = 0;
        let arr = [];
        setTimeout(rendCell = () => {
            (function func() {
                let randomCell = Math.floor(Math.random() * flickerPicture.countElem);

                // randomly opening elements
                if (arrCells[randomCell].style.opacity !== '0') {
                    arrCells[randomCell].style.opacity = 0;
                    arr.push(randomCell);
                } else {
                    func();
                }

                // closing open elements
                if (cycle === true) {
                    if (arr.length > countOpenElem) {
                        arrCells[arr[i - countOpenElem]].style.opacity = 1;
                    }
                }
            })();

            i++;

            // Cycle
            if (i < flickerPicture.countElem) {
                setTimeout(rendCell, speed);
            } else if (cycle === true) {
                setTimeout(rendCell, speed);
            }
        }, speed);
    }
    if (flickerPicture.turnOn) {
        getRandomCell(flickerPicture.speed, flickerPicture.cycle, flickerPicture.countOpenElem);
    }

};

flickerPicture(false, 100, false, 15, 0.2);
