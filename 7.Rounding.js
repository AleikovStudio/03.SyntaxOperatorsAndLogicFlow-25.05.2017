function round(arr) {
    let [num,precision]=arr;//if you know how many element are in the array - you can assign them this way
    if (precision > 15) {
        precision = 15;
    }
    let denominator = Math.pow(10, precision);
    console.log(Math.round(num * denominator) / denominator);
    //or use this code: console.log(Number(num.toFixed(precision)));
}

round([10.5, 3]);