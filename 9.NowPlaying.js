function nowPlaying(input) {
    let artistName = input[1];
    let trackName = input[0];
    let duration = input[2];

    console.log("Now Playing: " + artistName + " - " + trackName + " [" + duration + "]");
}

nowPlaying(['Number One', 'Nelly', '4:09']);