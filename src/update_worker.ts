// web-worker for update thread
// this will prevent the main thread from being blocked
// which would slow down UI updates
// UPDATE should run as fast as possible
// RENDER will run as fast as the refresh rate i.e. 60hz, 120hz
onmessage = event => {
    if (step > 0) {

    }

    // send back the result
    postMessage({ message: "update state updated" })
}