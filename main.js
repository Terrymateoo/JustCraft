var Canvas = new fabric.Canvas('MinecraftScreen');

var PlayerX = 10;
var PlayerY = 10;
var BlockW = 30;
var BlockH = 30;

var CurrentObj = "";
var BlockImg = "";

function loadPlayer() {
	fabric.image.fromURL("player.png", function (img){
		CurrentObj = img;
		CurrentObj.scaleToWidth(150);
		CurrentObj.scaleToHeight(140);
		CurrentObj.set({
			top: PlayerY,
			left: PlayerX
		});
		Canvas.add(CurrentObh);
	});
}

function SetBlockImgVar(getImg) {
	fabric.image.fromURL(getImg, function (img) {
		BlockImg = img;
		BlockImg.scaleToWidth(BlockW);
		BlockImg.scaleToHeight(BlockH);
		BlockImg.set({
			top : PlayerY,
			left: PlayerX
		});
		Canvas.add(BlockImg)
	})
}

window.addEventListener("keydown", KeysFunction);

function KeysFunction(e) {
	PressedKey = e.keyCode;
	console.log(PressedKey);
	if (e.shiftKey == true && PressedKey == '80') {
		console.log("Tecleaste las teclas Shift y P al mismo tiempo");
		BlockW = BlockW + 10;
		BlockH = BlockH + 10;
		document.getElementById("WText").innerHTML = BlockW;
		document.getElementById("HText").innerHTML = BlockH;
	}

	if (e.shiftKey == true && PressedKey == '77') {
		console.log("Tecleaste Shift y P al mismo tiempo");
		BlockW = BlockW - 10;
		BlockH = BlockH - 10;
		document.getElementById("WText").innerHTML = BlockW;
		document.getElementById("HText").innerHTML = BlockH;
	}

	if (PressedKey == '38') {
		Up();
		console.log("Up");
	}

	if (PressedKey == '40') {
		Down();
		console.log("Down");
	}

	if (PressedKey == '37') {
		Left();
		console.log("Left");
	}

	if (PressedKey == '39') {
		Right();
		console.log("Right");
	}

	if (PressedKey == '87') {
		SetBlockImgVar('wall.png');
		console.log("W");
	}

	if (PressedKey == '71') {
		SetBlockImgVar('ground.png');
		console.log("G");
	}

	if (PressedKey == '76') {
		SetBlockImgVar('light_green.png');
		console.log("L");
	}

	if (PressedKey == '84') {
		SetBlockImgVar('trunk.jpg');
		console.log('T');
	}

	if (PressedKey == '82') {
		SetBlockImgVar('roof.jpg');
		console.log("R");
	}

	if (PressedKey == '89') {
		SetBlockImgVar('yellow_wall.png');
		console.log("Y");
	}

	if (PressedKey == '68') {
		SetBlockImgVar('dark_green.png');
		console.log("D");
	}

	if (PressedKey == '85') {
		SetBlockImgVar('unique.png');
		console.log("U");
	}

	if (PressedKey == '67') {
		SetBlockImgVar('cloud.jpg');
		console.log("C")
	}
}

function Up() {
	if (PlayerY >= 0) {
		PlayerY = PlayerY - BlockH;
		console.log("Altura del bloque = " + BlockH);
		console.log("Cuando se preciona la tecla arriba, x = " + PlayerX + ", Y es = " + PlayerY + ".");
		Canvas.remove(CurrentObj);
		loadPlayer();
	}
}

function Down() {
	if (PlayerY <= 500) {
		PlayerY = PlayerY + BlockH;
		console.log("Altura del bloque = " + BlockH);
		console.log("Cuando se preciona la tecla abajo, x = " + PlayerX + ", Y es = " + PlayerY + ".");
		Canvas.remove(CurrentObj);
		loadPlayer();
	}
}

function Left() {
	if (PlayerX >= 0) {
		PlayerX = PlayerX - BlockW;
		console.log("Ancho del bloque = " + BlockW);
		console.log("Cuando se preciona la tecla izquierda, x = " + PlayerX + ", Y es = " + PlayerY + ".");
		Canvas.remove(CurrentObj);
		loadPlayer();
	}
}

function Right() {
	if (PlayerX <= 850) {
		PlayerX = PlayerX + BlockW;
		console.log("Ancho del bloque = " + BlockW);
		console.log("Cuando se preciona la tecla derecha, x = " + PlayerX + ", Y es = " + PlayerY + ".");
		Canvas.remove(CurrentObj);
		loadPlayer();
	}
}