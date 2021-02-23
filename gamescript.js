var chooseinequal = false

function pleasewaitscene(golevel) {
	document.getElementById('gametext').innerHTML = "PLEASE WAIT...";
	document.getElementById('chooselevels').innerHTML = "PLEASE WAIT...";
	setTimeout(function(){gamestatus(golevel)}, 500);
}

function gameoutofrange() {
	document.getElementById('gametext').innerHTML = "OUT OF RANGE";
	document.getElementById('chooselevels').innerHTML = "ERROR";
}

function gamestatus(gamelevel) { 
	var gamelisttext="";
	if (gamelevel>=gamelist.length) {
		gameoutofrange();
	} else {
		document.getElementById('gametext').innerHTML = gamelist[gamelevel][0];
		if (gamelist[gamelevel][1].length !== 0) {
			for (i = 0; i<gamelist[gamelevel][1].length; i++){
				gamelisttext += '<li><a onclick="pleasewaitscene('+gamelist[gamelevel][2][i]+');">'+gamelist[gamelevel][1][i]+'<a/></li>';
			}
			gamelisttext += '<br><small><i>choice loading ended.</i></small>';
			document.getElementById('chooselevels').innerHTML = gamelisttext;
		} else {
			document.getElementById('chooselevels').innerHTML = '<small><i>this level of the game doesn&#39;t have any choice.<br><div align="center">(game over)</div></i></small>';
		}
	}
}

function maingame () {
	document.getElementById('credit').innerHTML = "TEXT SELECT ADVENTURE GAME GAMES 1996–"+(new Date().getFullYear());
	for (i = 0; i<gamelist.length; i++) {
		if (typeof gamelist[i][0] == "string" && gamelist[i].length == 3 && gamelist[i][1].length == gamelist[i][2].length) {
			continue;
		} else {
			chooseinequal = true;
			break;
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
