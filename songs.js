console.log("hi")
var songs = [];
var artists = [];
var albums = [];
//music history 3

document.getElementById("addButton").addEventListener("click", function() {
	// fixSongs();
	addInfo();

	// console.log("hello")
})

var addView = document.getElementById('addView')
var listView = document.getElementById('listView')
var homeView = document.getElementById('homeView')

var homePage = document.getElementById('home')
var listPage = document.getElementById('listMusic')
var addPage = document.getElementById('addMusic')

addView.addEventListener('click', function() {
	listPage.setAttribute("class", "hidden")
	addPage.classList.remove("hidden")
	homePage.setAttribute("class", "hidden")
	// console.log("werd")
})



//music history 2
songs.push("Legs", "The Logical Song", "Another Brick in the Wall", "Welcome to the Jungle", "Ironic");
artists.push("ZZ Top", "Supertramp", "Pink Floyd", "Guns & Roses", "Alanis Morissette");
albums.push("Eliminator", "Breakfast in America", "The Wall", "Appetite for Destruction", "Jagged Little Pill");

// function fixSongs() {
// 	for (i = 0; i < songs.length; i++) {
// 	songs[i].replace(/>/, "-")
// 	}
// 	console.log(songs)
// }




// console.log(songs)
function addInfo() {
	var addedSong = document.getElementById("songInput").value;
	var addedArtist = document.getElementById("artistInput").value;
	var addedAlbum = document.getElementById("albumInput").value;
	songs.push(addedSong);
	artists.push(addedArtist);
	albums.push(addedAlbum);
	// addedSong = '';
	// console.log(songs)
	var songDisplay = "";
	for (i = 0; i < songs.length; i++) {
		songDisplay += `<h4>${songs[i]} by ${artists[i]} from the album ${albums[i]}</h4>`
	}
	document.getElementById("songList").innerHTML = songDisplay;
}
