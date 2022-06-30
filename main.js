status1 = "";
objects = [];
function preload() {
    img = loadImage("dog_cat.jpg");
}
function setup() {
    canvas = createCanvas(650,350);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";

}
function modelLoaded() {
    console.log("Model has been loaded!");
    status1 = true;
    objectDetector.detect(img, gotResult)
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(img, 0,0,650,350);
    if (status1 != "") {

    for(var n = 0; n < objects.length; n++) {
        document.getElementById("status").innerHTML = "Status : Objects Detected";

        fill("red");
        percents = floor(objects[n].confidence * 100);
        text( objects[n].label + " " + percents + "%", objects[n].x + 15, objects[n].y + 15);
        noFill();
        stroke("red");
    rect(objects[n].x, objects[n].y, objects[n].width, objects[n].height);

    }

    }


    

}