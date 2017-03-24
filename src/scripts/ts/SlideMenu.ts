export default class SlideMenu
{
  // variáveis
  public toggleMenu: any
  public container: any
  public changeMenu: any

  /**
   * 
   * @param toggleMenu Classe reponsável por fazer a troca entre menu aberto e menu fechado
   * @param container Elemento que receberá/será removida a classe do estado do menu
   */
  constructor(toggleMenu: string, container: string, changeMenu: string)
  {
    this.toggleMenu = document.querySelectorAll(toggleMenu)
    this.container = document.querySelector(container)
    this.changeMenu = changeMenu

    let i:number;
    for(i = 0; i<this.toggleMenu.length; i++)
    {
      this.toggleMenu[i].addEventListener('click', () => {
        this.menuAction(this.container, this.changeMenu)
      })
    }
    console.log(this.changeMenu)
  }

  menuAction(container, changeMenu)
  {
    // let container = e.path[1]
    console.log(container)
    if(container.classList.contains(changeMenu))
    {
      container.classList.remove(changeMenu)
    }
    else
    {
      container.classList.add(changeMenu)
    }
  }
}


