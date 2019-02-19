// Create your global variables below:
var tracklist = ["Let It Happen", "Nangs", "The Moment", "Yes I'm Changing", "Eventually", "Gossip", "The Less I Know The Better", "Past Life", "Disciples", "'Cause I'm A Man"];
var volLevels = [];
var stat = 0;
var cur_time = 0;
var cur_pos = 6;

function init() {
	// set backgroundcolor to white and first three items to purple
	var i;
	for (i = 0; i < 6; i++) { 
	  volLevels[i] = document.getElementById("vl"+i);
	  volLevels[i].style.backgroundColor = "#ffffff";
	}
	for (i = 0; i < 3; ++i) {
		volLevels[i].style.backgroundColor = "#9f5cc4";
	}
};

function volUp() {
	// check the last purple block and paint the next block to purple

	var j = -1;
	var color_ = "#9f5cc4";
	var tmp = document.getElementById("dummy");
	tmp.style.backgroundColor = color_;
	
	for (var i = 5; i >= 0; --i) {
		if (volLevels[i].style.backgroundColor == "") {
			
			continue;
		}
		if (volLevels[i].style.backgroundColor == tmp.style.backgroundColor) {
			j = i;
			break;
		}
	}
	if(j < 5) {++j};
	volLevels[j].style.backgroundColor = "#9f5cc4";
}

function volDown() {
	// check the fist white block and paint the previous block to white
	var j = 6;
	var color_ = "#ffffff";
	var tmp = document.getElementById("dummy");
	tmp.style.backgroundColor = color_;
	
	for (var i = 0; i < 6; ++i) {
		if (volLevels[i].style.backgroundColor == "") {
			
			continue;
		}
		if (volLevels[i].style.backgroundColor == tmp.style.backgroundColor) {
			j = i;
			break;
		}
	}
	
	if(j > 0) {--j};
	volLevels[j].style.backgroundColor = "#ffffff";
}

var range = document.getElementById('time-bar-pos');


function play_music() {
	if (stat == 1) {
		if(cur_time == 180) {
			nextSong();
			return;
		}
		cur_time += 1;
		range.value = cur_time;
		document.getElementById('time-left').innerHTML = secondsToMs(cur_time);
	}
	else {
		return;
	}
}
var player = setInterval(
			play_music
			,1000
		);
		
function switchPlay() {
	// switch button
	if (stat == 1) {
		document.getElementById('play1').innerHTML = 'play_arrow';
		stat = 0;
	}
	else if(stat == 0) {
		document.getElementById('play1').innerHTML = 'pause';
		stat = 1;
		clearInterval(player);
		player = setInterval(
			play_music
			,1000
		);
	}
}

function nextSong() {
	// next song and reset time
	cur_pos = (cur_pos + 1) % 10;
	document.getElementById('title-song').innerHTML = tracklist[cur_pos];
	cur_time = 0;
	document.getElementById('time-left').innerHTML = secondsToMs(cur_time);
	range.value = cur_time;
}

function prevSong() {
	// previous song and reset time
	cur_pos = (cur_pos - 1 + 10) % 10;
	document.getElementById('title-song').innerHTML = tracklist[cur_pos];
	cur_time = 0;
	document.getElementById('time-left').innerHTML = secondsToMs(cur_time);
	range.value = cur_time;
}

function secondsToMs(d) {
    d = Number(d);

    var min = Math.floor(d / 60);
    var sec = Math.floor(d % 60);

    return `0${min}`.slice(-1) + ":" + `00${sec}`.slice(-2);
}

init();