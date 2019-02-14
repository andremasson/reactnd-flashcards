/**
 * @description Dados padrão para primeiro uso do App
 */

const _stockData = new Array(
  {
    title: 'Stock Data',
    questions: [
      {
        question: 'Estes dados já estavam aqui?',
        answer: 'Sim'
      },
      {
        question: 'Como eles foram carregados?',
        answer: 'O AsyncStorage tentou encontrar os dados salvos. Quando não encontrado, estes dados são carregados.'
      }
    ]
  },
  {
    title: 'Deletar Dados',
    questions: [
      {
        question: 'Esses decks podem ser deletados?',
        answer: 'Sim.'
      }
    ]
  }
)

export const stockData = () => {
  return new Promise((res, rej) => {
    return res(_stockData)
  })
}