// game loop

const game = () => {


}

// send to a dedicated web worker ?
const update = () => {

}

let start
const render = (timeStamp: DOMHighResTimeStamp) => {
    start = start && timeStamp
    const step = timeStamp - start

    // if()
}

window.requestAnimationFrame(render);