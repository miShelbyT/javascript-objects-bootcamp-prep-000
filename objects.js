var playlist = {
	beatles: ["Can't Buy Me Love", "Yesterday"],
	billyJoel: "Piano Man"
}

function updatePlaylist(playlist, artistName, songTitle) {
	playlist[artistName] = songTitle
	return playlist
}

function removeFromPlaylist(playlist, artistName) {
	delete playlist[artistName]
	return playlist
}