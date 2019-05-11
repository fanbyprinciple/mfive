let pheasant
let mobilenet


function modelReady() {
    console.log('Model is ready !!!')
    mobilenet.predict(pheasant, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.log("error occured ")
        console.log(error)
        }
    else {
        console.log(results);
        let label = results[0].className
        let prob = results[0].probability
        fill(0)
        textSize(64)
        text(label, 10, height -100)
        createP(label)
        createP(prob)
        }
}

function imageReady() {
    image(pheasant, 0, 0, width, height)
}

function setup() {
    createCanvas(640,640)
    background(0)
    var img = new Image;
    img.src = "https://ml5js.org/docs/assets/img/bird.jpg";
    img.crossOrigin = 'anonymous'
    const image = document.getElementById('image');
    
    pheasant = createImg(img.src, imageReady)
    pheasant.hide()

    mobilenet = ml5.imageClassifier('MobileNet', modelReady)


}



