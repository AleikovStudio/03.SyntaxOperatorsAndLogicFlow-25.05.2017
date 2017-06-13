function movieDay(arrStr) {
    let movie = arrStr[0].toLowerCase();
    let day = arrStr[1].toLowerCase();

    let price = 0;
    if (movie == "the godfather") {
        switch (day) {
            case "monday":
                console.log(price += 12);
                break;
            case "tuesday":
                console.log(price += 10);
                break;
            case "wednesday":
                console.log(price += 15);
                break;
            case "thursday":
                console.log(price += 12.50);
                break;
            case "friday":
                console.log(price += 15);
                break;
            case "saturday":
                console.log(price += 25);
                break;
            case "sunday":
                console.log(price += 30);
                break;
            default:
                console.log("error");
                break;
        }
    }
    if (movie == "schindler's list") {
        switch (day) {
            case "monday":
                console.log(price += 8.50);
                break;
            case "tuesday":
                console.log(price += 8.50);
                break;
            case "wednesday":
                console.log(price += 8.50);
                break;
            case "thursday":
                console.log(price += 8.50);
                break;
            case "friday":
                console.log(price += 8.50);
                break;
            case "saturday":
                console.log(price += 15);
                break;
            case "sunday":
                console.log(price += 15);
                break;
            default:
                console.log("error");
                break;
        }
    }
    if (movie == "casablanca") {
        switch (day) {
            case "monday":
                console.log(price += 8);
                break;
            case "tuesday":
                console.log(price += 8);
                break;
            case "wednesday":
                console.log(price += 8);
                break;
            case "thursday":
                console.log(price += 8);
                break;
            case "friday":
                console.log(price += 8);
                break;
            case "saturday":
                console.log(price += 10);
                break;
            case "sunday":
                console.log(price += 10);
                break;
            default:
                console.log("error");
                break;
        }
    }
    if (movie == "the wizard of oz") {
        switch (day) {
            case "monday":
                console.log(price += 10);
                break;
            case "tuesday":
                console.log(price += 10);
                break;
            case "wednesday":
                console.log(price += 10);
                break;
            case "thursday":
                console.log(price += 10);
                break;
            case "friday":
                console.log(price += 10);
                break;
            case "saturday":
                console.log(price += 15);
                break;
            case "sunday":
                console.log(price += 15);
                break;
            default:
                console.log("error");
                break;
        }
    }
}

movieDay(["the wizard of oz", "monday"]);