function printTriangle(row) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "$";
        console.log(line);
    }
}

printTriangle(4);