const average = (...numbers) => {
    if (numbers.length === 0) {
        return null
    }

    let sum = 0

    for (let i = 0; i < numbers.length; i += 1) {
        sum += numbers[i]
    }
    return sum / numbers.length

}


console.log(average(-3, 4, 2, 10))
