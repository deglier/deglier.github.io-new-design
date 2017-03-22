export class Pessoa
{
    nome:string
    idade:number
    sexo:string
    genero:string
    tecnologias:string = ''

  constructor(object:any)
  {
    this.nome = object.nome
    this.idade = object.idade
    document.write(this.tecnologias)
    this.tecnologias = this.listaTecnologias(object.tecnologias)
  }

  sayHello()
  {
    return this.helloGreeter()
  }

  private listaTecnologias(techs:Array<string>)
  {
    let listaTemp:string = ''
    for (let tech of techs)
    {
      listaTemp += tech+', '
    }
    listaTemp = listaTemp.slice(0, listaTemp.length - 2)
    return listaTemp
  }

  private helloGreeter()
  {
    let techs = this.tecnologias === '' ? '': 'e gostos de ' + this.tecnologias
    let greeter = `<h2>Olá! Tudo bem?<br> Meu nome é ${this.nome} e tenho ${this.idade} ${techs}.</h2>`
    return document.write(greeter)
  }
}