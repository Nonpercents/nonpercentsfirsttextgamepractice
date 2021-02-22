var chooseinequal = false

function pleasewaitscene(golevel) {
	document.getElementById('gametext').innerHTML = "PLEASE WAIT...";
	document.getElementById('chooselevels').innerHTML = "PLEASE WAIT...";
	setTimeout(function(){gamestatus(golevel)}, 500);
}

function gamestatus(gamelevel) {
	var gamelisttext="";
	document.getElementById('gametext').innerHTML = gamelist[gamelevel][0];
	for (i = 0; i<gamelist[gamelevel][1].length; i++){
		gamelisttext += '<li><a style="cursor: pointer;" onclick="pleasewaitscene('+gamelist[gamelevel][2][i]+');">'+gamelist[gamelevel][1][i]+'<a/></li>';
	}
	gamelisttext += '<br><small><i>choice loading ended.</i></small>';
	document.getElementById('chooselevels').innerHTML = gamelisttext;
}

function maingame () {
	document.getElementById('credit').innerHTML = "TEXT SELECT ADVENTURE GAME GAMES 1996–"+(new Date().getFullYear());
	for (i = 0; i<gamelist.length; i++) {
		if (gamelist[i].length == 3 && gamelist[i][1].length == gamelist[i][2].length) {
			continue;
		} else {
			chooseinequal = true
		}
	}
	if (chooseinequal == true) {
		document.getElementById('gametext').innerHTML = "ERROR";
		document.getElementById('chooselevels').innerHTML = "ERROR";
	} else {
		gamestatus(0);
	}
}

window.onload = function() { maingame(); }