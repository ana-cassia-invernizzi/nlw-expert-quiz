// variavel que gera as perguntas, as alternativas e a resposta
const perguntas = [
  // o que esta sendo utilizado é uma array que é uma lista que começa no 0
  {
    pergunta: "Qual é a forma correta de declarar uma variável constante em JavaScript?",
    respostas:[
      "var myVar;",
      "let myVar;",
      "const myVar;"
    ],
    correta: 2
  },
  {
    pergunta: "Qual desses métodos é usado para adicionar um elemento no final de um array em JavaScript?",
    respostas:[
      "push()",
      "pop()",
      "shift()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dessas opções é uma maneira de criar um loop em JavaScript?",
    respostas:[
      "loopFor()",
      "for loop {}",
      "while loop {}"
    ],
    correta: 1
  },
  {
    pergunta: "O que é uma função anônima em JavaScript?",
    respostas:[
      "Uma função sem nome",
      "Uma função que não pode ser chamada",
      "Uma função que não retorna valor"
    ],
    correta: 0
  },
  {
    pergunta: "Qual desses métodos é usado para remover o último elemento de um array em JavaScript?",
    respostas:[
      "pop()",
      "shift()",
      "splice()"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '===' em JavaScript?",
    respostas:[
      "Comparação estrita",
      "Comparação não estrita",
      "Atribuição"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de escrever um comentário de uma linha em JavaScript?",
    respostas:[
      "// Este é um comentário",
      "/* Este é um comentário */",
      "' Este é um comentário"
    ],
    correta: 0
  },
  {
    pergunta: "Como você escreve 'Olá, Mundo!' em um alerta em JavaScript?",
    respostas:[
      "alert('Olá, Mundo!');",
      "msgBox('Olá, Mundo!');",
      "prompt('Olá, Mundo!');"
    ],
    correta: 0
  },
  {
    pergunta: "Qual dessas opções é uma maneira de concatenar strings em JavaScript?",
    respostas:[
      "join()",
      "merge()",
      "concat()"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas:[
      "OR lógico",
      "AND lógico",
      "NOT lógico"
    ],
    correta: 1
  }
];

// variaveis para selecionar as tags do HTML
const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

// fazendo com que a div de acertos mostre o número de acertos
const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


// loop ou laço de repetição
for(const item of perguntas) {
  // o cloneNode serve para clonar os elementos "filhos" do template como as divs
  const quizItem = template.content.cloneNode(true)
  // essa linha faz com que a pergunta apareça na tela
  quizItem.querySelector('h3').textContent = item.pergunta

  // nessa parte é criado um loop para mostrar na tela as alternativas das perguntas
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    // forma de fazer com que você consiga selecionar as alternativas de cada questão
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    // função para contar os acertos
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      // mostrando na tela em tempo real o número de acertos
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }

    quizItem.querySelector('dl').appendChild(dt)
  }

  // nessa linha o span colocado no HTML é removido
  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}