function checkPalindrome(inputString) {
    let output = '', string = []

    for (i = 0; i < inputString.length; i++) {
        string.unshift(inputString.substring(i, i + 1))
    }

    for (i = 0; i < string.length; i++) {
        output += string[i]
    }

    return (output === inputString || output.toUpperCase() === output)
}

const input = 'matheus'

checkPalindrome(input)
