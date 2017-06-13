function assignProperty(arr) {
    let [prop1,value1,prop2,value2,prop3,value3]=arr;

    let obj = {};//key:value
    obj[prop1] = value1;
    obj[prop2] = value2;
    obj[prop3] = value3;

    //return obj;
    console.log(obj);
}

assignProperty(['ssid', '90127461', 'status', 'admin', 'expires', '600']);