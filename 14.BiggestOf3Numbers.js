function findBiggestNum(arrNum) {
    [num1,num2,num3]=arrNum;

    let maxNum = Math.max(num1, num2, num3);//use Math.max for the shortest solution
    console.log(maxNum);

}

findBiggestNum([130, 5, 99]);