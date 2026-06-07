const run = (text) => {

    const takeLast = (str, count) => {
        if (str === "" || text.length < count) {
            return null
        }

        let result = ""
        for (let i = str.length - 1; i >= str.length - count; i--) {
            result += text[i]
        }
        return result
    }
    return takeLast(text, 4)

}

console.log(run('power', 4))
