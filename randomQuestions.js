const questions = [
  {
    title: 'Qual a sua data de nascimento?',
    answer: '27/12/1997',
    options: [
      '27/12/1997',
      '11/05/1980',
      '11/06/1987',
      '11/05/1987'
    ]
  },
  {
    title: 'Qual o primeiro nome da sua mãe?',
    answer: 'Rita',
    options: [
      'Rita',
      'Maria',
      'Tereza',
      'Fernanda'
    ]
  },
  {
    title: 'Qual o primeiro nome do seu pai?',
    answer: 'Wagner',
    options: [
      'José',
      'Mario',
      'Antônio',
      'Wagner'
    ]
  }
]

for(i = 0; i < 5; i++) {
  const randomQuestion = questions[Math.floor(Math.random() * questions.length)]
  console.log(randomQuestion.title)
  
  randomQuestion.options.map(option =>  console.log(option))

  const randomAnswer = randomQuestion.options[Math.floor(Math.random() * randomQuestion.options.length)]

  console.log(
    `\nResposta: ${randomAnswer} \nCorreta: ${randomQuestion.answer === randomAnswer} \n`
  )
}