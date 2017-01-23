console.log("hi")
var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

function fixSongs() {
	for (i = 0; i < songs.length; i++) {
	songs[i].replace(/>/, "-")
	}
	console.log(songs)
}


document.getElementById("addButton").addEventListener("click", function() {
	fixSongs();
	addSong();

	// console.log("hello")
})

// console.log(songs)
function addSong() {
	var addedSong = document.getElementById("songInput").value;
	songs.push(addedSong)
	addedSong = '';
	// console.log(songs)
	var songDisplay = "";
	for (i = 0; i < songs.length; i++) {
		songDisplay += `<h4>${songs[i]}</h4>`
	}
	document.getElementById("songAdd").innerHTML = songDisplay;
}
