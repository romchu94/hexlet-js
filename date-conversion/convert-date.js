const convert = (...date) => {
    const result = []
    for (const dateElement of date) {
        dateElement[1] -= 1
        const dateStr = new Date(...dateElement).toDateString()
        result.push(dateStr)
    }
    return result
}


console.log(convert([1993, 4, 24], [1997, 9, 12], [2001, 11, 18]))


