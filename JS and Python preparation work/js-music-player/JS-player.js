class Player {};

let player = new Player;

player.tracks = [];
player.currentTrack = '';


Player.prototype.add = function(track) {
    this.tracks.push(track);
}

Player.prototype.next = function() {
    let currentIndex = player.tracks.indexOf(player.currentTrack);
    currentIndex++;
    if (currentIndex <= player.tracks.length - 1) {
        let nextTrack = player.tracks[currentIndex];
        player.currentTrack = nextTrack;
        console.log(player.currentTrack);
    }     
     else {
        console.log('Playback stopped');
        clearInterval(player.playInterval);
    }
}

Player.prototype.previous = function() {
    let currentIndex = player.tracks.indexOf(player.currentTrack);
    currentIndex--;
    if (currentIndex >= 0) {
        let prevTrack = player.tracks[currentIndex];
        player.currentTrack = prevTrack;
        console.log(player.currentTrack);
    } else {
        player.currentTrack = player.tracks[player.tracks.length - 1];
        console.log(player.currentTrack);
    }
}

Player.prototype.printAllTracks = function() {
    player.tracks.forEach(elem => {
        console.log(`Artist: ${elem.artist}, Song: ${elem.song}, Album: ${elem.album}`);
    });
}

class Track {
    constructor(artist, song, album) {
        this.artist = artist,
        this.song = song,
        this.album = album
    }
};

let driveTrack = new Track('Incubus', 'Drive', 'Make Yourself');
let laBambaTrack = new Track('Ritchie Valens', 'La Bamba', 'La Bamba');

Track.prototype.play = function(track) {
    player.currentTrack = track;
    console.log(`Playing: ${track.song} by ${track.artist}`);
    player.playInterval = setInterval(player.next, 2000);
}

Track.prototype.stop = function() {
    console.log('Playback stopping in 1sec');
    setTimeout(clearInterval(player.playInterval), 1000);
}

player.add(driveTrack);
player.add(laBambaTrack);
driveTrack.play(driveTrack);
driveTrack.stop(driveTrack);
player.next();
player.previous();
player.printAllTracks(); // print all tracks from the player.
