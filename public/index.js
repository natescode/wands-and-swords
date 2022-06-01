

// load tileset json file
fetch('./tileset.json')
    .then(e => e.json()) // parse the file as an object
    .then(tileset => loadTileset(tileset.tiles))  // load all of the images and create promises for each
// .then(tiles => renderMap(tiles)) // pass dictionary of tileID,img src to renderMap function to start rendering the map


let tileMap = []
/**
 * 
 * @param {*} tileset 
 */
function loadTileset(tileset) {

    let tilesetPromises = [];

    tileset.map(tile => {

        tilesetPromises.push(new Promise((resolve, _) => {
            let img = new Image()
            img.onload = function () {
                tileMap[tile.id + 1] = img
                resolve(tileMap)
            }
            img.src = './assets/' + tile.image
        }))
    })

    Promise.all(tilesetPromises)
        .then(_ => {
            fetch('./main_map.json')
                .then(map => map.json())
                .then(map => renderMap(map))
        })
        .catch(reason => {
            console.log("promises rejected because: " + reason)
        })
}

/**
 * 
 * @param map
 * @description render the tiled map JSON
 * @returns void
 */
function renderMap(map) {
    const ctx = document.getElementById('canvas1').getContext('2d');

    // render all the layers
    for (let l = 0; l < map.layers.length; l++) {
        let layer = map.layers[l].data
        // 20 tiles heigh
        for (let y = 0; y < 20; y++) {
            // 30 tiles wide
            // we start with rows first so they're the inner loop
            for (let x = 0; x < 30; x++) {
                // calculate array index for given x,y coordinates 
                // also adjusts for id - 1 from Tiled
                let tileId = layer[(y * 30 + (x + 1) - 1)]
                // draw tile in its appropriate position
                ctx.drawImage(tileMap[tileId], x * 16, y * 16);
            }
        }
    }

}