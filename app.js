const pressBtn = document.getElementById(playGame)


const gridEl = document.querySelector(".grid")
console.log(gridEl)
const levelSelectEl = document.getElementById("level")
// let valueEasy = document.getElementById("easy").value;
// let valueMedium = document.getElementById("medium").value;
// let valueHard = document.getElementById("hard").value;

playGame.addEventListener('click', readyP1)

function readyP1() {
    
    const size = getSize()
    const numOfGridIt = size ** 2
    gridEl.innerHTML = ""

    gridEl.style.gridTemplateColumns = `repeat(${size}, 1fr)`

    for (let i = 0; i < numOfGridIt; i++) {
        const num = i + 1
        console.log(num)


        const gridItem = document.createElement('div');
        gridItem.className = 'gridEl';
        gridItem.innerHTML = num;
        gridItem.style.width = `repeat(${size}, 1fr)`

        gridEl.append(gridItem);

        gridItem.addEventListener('click', function () {
            console.log('click sulla casella', num)

            // const { x, y } = getCoordinates(i, size);

            // console.log("up", {x: x , y: y - 1 })
            // console.log("down", {x: x , y: y + 1})
            // console.log("left", {x: x - 1 , y: y})
            // console.log("right", {x: x + 1 , y: y})
            
            gridItem.classList.toggle('bg-blue')
        }
        )
    }
}

function getCoordinates(index, size) {
    return {
        x: index % size,
        y: Math.floor(index / size)
    }
}

function getSize (){
    let size = 7
    let level = levelSelectEl.value

    if(level === "easy"){
        size = 10
    } else if(level === "medium"){
        size = 9
    }

    return size 
}