const playerOne = []
const playerTwo = []

const goodGames = [
    [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2, }]
]

var counter = 0

const checkResult = () => {

    console.log('Cheking result')

    goodGames.map(goodGame => {

        console.log(goodGame)
        console.log(playerOne)

        JSON.stringify(goodGame) == JSON.stringify(playerOne);

        if (JSON.stringify(goodGame) == JSON.stringify(playerOne)) {
            console.log('Jogador 1 Ganhou')
        }
        if (JSON.stringify(goodGame) == JSON.stringify(playerTwo)) {
            console.log('Jogador 2 Ganhou')
        }
    })
}

const play = jogada => {

    counter++

    if (counter % 2 === 0) {
        // console.log('Jogador 2')

        playerTwo.push(jogada)
        console.log('playerTwo', playerTwo)
    }

    if (counter % 2 !== 0) {
        // console.log('Jogador 1')

        playerOne.push(jogada)
        console.log('playerOne', playerOne)
    }

    if (counter >= 5) checkResult()
}

play({ x: 0, y: 0 })
play({ x: 1, y: 0 })
play({ x: 1, y: 1 })
play({ x: 0, y: 2 })
play({ x: 2, y: 2 })