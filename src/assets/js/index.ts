import core = require("./core/pessoa")

let atributos = {
  nome: "Deglier S. Amorim",
  idade: "21",
  tecnologias: [
    'css', 'html', 'javascript', 'php', 'ruby', 'python'
  ]
}
const deglier = new core.Pessoa(atributos)
deglier.sayHello()