const alphabet = [" ", "a", "A", "b", "B", "c", "C", "d", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"]

function stringToArray(message) {
    let ArrMessage = []
    for (i = 0; i < message.length; i++) {
        ArrMessage.push(message.substring(i, i + 1))
    }
    return ArrMessage
}

function findIndex(message) {
    let ArrMessage = stringToArray(message)
    let ArrMessageIndex = []
    ArrMessage.map(letterOfMessage => {
        ArrMessageIndex.push(alphabet.indexOf(letterOfMessage))
    })
    console.log(ArrMessageIndex)
    return ArrMessageIndex
}

function changeByStep(message, step) {
    let indexOfOriginMessage = findIndex(message)
    let finalMessageIndexArray = []
    indexOfOriginMessage.map(idx => finalMessageIndexArray.push(idx + step))
    console.log(finalMessageIndexArray)
    return finalMessageIndexArray
}

function makeFinalMessage(message, step) {
    let finalMessageIndexArray = changeByStep(message, step)
    let messageEncrypted = ''
    finalMessageIndexArray.map(idx => {
        messageEncrypted += alphabet[idx]
    })
    return messageEncrypted
}

function encryptMessage(message, step) {
    console.log(`${message} > Encrypting...`)
    const messageEncrypted = makeFinalMessage(message, step)
    return console.log(`Message encrypted: ${messageEncrypted}`)
}

function decryptMessage(message, step) {
    console.log(`${message} > Decrypting...`)
    const messageEncrypted = makeFinalMessage(message, step)
    return console.log(`Message Decrypted: ${messageEncrypted}`)
}

encryptMessage('Matheus Baron Ribeiro', 3)
decryptMessage('oBUIFVTbdBSPObtJCFJSP', -3)
