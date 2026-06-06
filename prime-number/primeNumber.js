const isPrimeNumber = (num) => {
    if (num < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}

const sayPrimeOrNot = (num) => {
    if (isPrimeNumber(num)) {
        console.log("yes")
    } else {
        console.log("no")
    }
}


console.log(sayPrimeOrNot())

