var canvas = new fabric.Canvas("canvas");

blockWidth = 40;
blockHeight = 40;

xCoordinate = 140;
yCoordinate = 140;

playerObject = "";
blockObject = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(140);
        playerObject.scaleToHeight(140);
        playerObject.set({
            top: yCoordinate, left: xCoordinate
        });
        canvas.add(playerObject);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        console.log("inside new_image function");
        blockObject = Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({
            top: yCoordinate, left: xCoordinate
        });
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    var keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == "80") {
        blockWidth = blockWidth + 14;
        blockHeight = blockHeight + 14;
        console.log("p and shift key");
        document.getElementById("width").innerHTML = blockWidth;
        document.getElementById("height").innerHTML = blockHeight;
    }

    if(e.shiftKey == true && keyPressed == "77") {
        blockWidth = blockWidth - 14;
        blockHeight = blockHeight - 14;
        console.log("m and shift key");
        document.getElementById("width").innerHTML = blockWidth;
        document.getElementById("height").innerHTML = blockHeight;
    }
    
    if(keyPressed == "70") {
        new_image("ironman_face.png");
        console.log("f key");
    }

    if(keyPressed == "66") {
        new_image("spiderman_body.png");
        console.log("b key");
    }

    if(keyPressed == "76") {
        new_image("hulk_legs.png");
        console.log("l key")
    }

    if(keyPressed == "82") {
        new_image("thor_right_hand.png");
        console.log("r key");
    }

    if(keyPressed == "72") {
        new_image("captain_america_left_hand.png");
        console.log("h key");
    }

    if(keyPressed == "38") {
        forward();
        console.log("forward key");
    }

    if(keyPressed == "40") {
        down();
        console.log("down key");
    }

    if(keyPressed == "37") {
        left();
        console.log("left key");
    }

    if(keyPressed == "39") {
        right();
        console.log("right key");
    }
}

function forward() {
    if(yCoordinate >= 0) {
        yCoordinate = yCoordinate - blockHeight;
        console.log("Forward key, x = " + xCoordinate + ", y = " + yCoordinate);
        canvas.remove(playerObject);
        player_update();
    }
}

function down() {
    if(yCoordinate < 700) {
        yCoordinate = yCoordinate + blockHeight;
        console.log("Down key, x = " + xCoordinate + ", y = " + yCoordinate);
        canvas.remove(playerObject);
        player_update();
    }
}

function left() {
    if(xCoordinate > 0) {
        xCoordinate = xCoordinate - blockWidth;
        console.log("Left key, x = " + xCoordinate + ", y = " +yCoordinate);
        canvas.remove(playerObject);
        player_update();
    }
}

function right() {
    if(xCoordinate < 700) {
        xCoordinate = xCoordinate + blockWidth;
        console.log("Right key, x = " + xCoordinate + ", y = " + yCoordinate);
        canvas.remove(playerObject);
        player_update();
    }
}