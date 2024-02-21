const perguntas = [
  {
    pergunta: "Qual é o nome do protagonista principal da Obra ?",
    respostas: [
      "Mikasa Ackerman",
      "Eren Jaeger",
      "Armin Arlert"
    ],
    correta: 1
  },
  {
    pergunta: "Quais os nomes das 3 Muralhas que existem na Obra ?",
    respostas: [
      "Sina, Rose e Shiganshina",
      "Trost, Shiganshina e Maria",
      "Sina, Rose e Maria"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o portador do Titã Bestial ?",
    respostas: [
      "Reiner Braun",
      "Bertolt Hoover",
      "Zeke"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é o criador da história de Attack on Titan ?",
    respostas: [
      "Haruichi Furudate",
      "Hajime Isayama",
      "Togashi Yoshiro"
    ],
    correta: 1
  },
  {
    pergunta: "Em qual local do corpo é preciso atingir para matar um titã ou deixar ele incapacitado ?",
    respostas: [
      "Nas Pernas",
      "No Coração",
      "Na Nuca"
    ],
    correta: 2
  },
  {
    pergunta: "Quais são as Tropas Militares que existem na Obra ?",
    respostas: [
      "Exploração, Segurança e Estacionária",
      "Reconhecimento ou Exploração, Guarnição e Estacionária",
      "Identificação, Exploração e Segurança"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o nome do Titã que destruiu a muralha Maria, abrindo caminho para a invasão dos Titãs ?",
    respostas: [
      "Titã Blindado",
      "Titã Fêmea",
      "Titã Colossal"
    ],
    correta: 2
  },
  {
    pergunta: "Quem é a portadora da Titã Fêmea ?",
    respostas: [
      "Hange Zoë",
      "Historia Reiss",
      "Annie Leonhart"
    ],
    correta: 2
  },
  {
    pergunta: "Quem foi o primeiro líder da Tropa da Exploração/Reconhecimento ?",
    respostas: [
      "Armin Arlet",
      "Erwin Smith",
      "Hange Zoë"
    ],
    correta: 1
  },
  {
    pergunta: "Quem é o portador do Titã Cart ?",
    respostas: [
      "Ymir",
      "Sasha Blouse",
      "Pieck Finger"
    ],
    correta: 2
  },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {

      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }

  quizItem.querySelector('dl dt').remove()

  quiz.appendChild(quizItem)
}