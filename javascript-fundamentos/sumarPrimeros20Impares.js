const sumOddFirst = (oddLimitNumber) => {
    let sum = 0; //sum es el acumulador
    for (let i = 0; i < oddLimitNumber; i += 2) {
        //sum = sum + i;
        sum += i;
    }
    return sum;
}


const sumOddFirstV2 = (firstOddNumbers) => {
    let sum = 0; //sum es el acumulador
    for (let i = 0; i < firstOddNumbers; i++) {
        let nextOddNumber = i * 2 + 1;
        sum += nextOddNumber;
    }
    return sum;
}