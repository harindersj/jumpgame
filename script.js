var player = document.getElementById('player');
var object = document.getElementById('object');

function jump(){

	if(player.classList == "playerjump"){
		return ;
	}
	player.classList.add("playerjump");

	setTimeout(function(){
		player.classList.remove("playerjump");

	},300);
}

counter=0;
setInterval(function(){

		var playervalue= parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
		var objectvalue= parseInt(window.getComputedStyle(object).getPropertyValue("left"));

		//alert(playervalue);
		if(playervalue<20 && objectvalue < 30 && objectvalue>10){
			alert("game over your score is: "+ Math.floor(counter/100));
			player.style.playerjump=" players 1s infinite linear";
			document.getElementById('livescore').innerHTML= Math.floor(counter/100);
			if( Math.floor(counter/100)>window.localStorage.getItem('highscore')){
				window.localStorage.setItem('highscore',Math.floor(counter/100));
			}
			document.getElementById('highscore').innerHTML=window.localStorage.getItem('highscore');
			
			counter=0;

		}
		else{
				counter++;
				document.getElementById('livescore').innerHTML= Math.floor(counter/100);
		}

},10)