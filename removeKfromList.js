const l = [3, 1, 2, 3, 4, 5]
const k = 10

function removeKFromList(l, k) {
    const output = []
    l.filter(element => (element !== k) ? output.push(element) : false)
    return console.log(output)
}

removeKFromList(l, k)