export default class ToggleMenu
{
  public toggleId: HTMLElement
  public menuId: HTMLElement
  public change: string

  constructor(toggleId: string, menuId: string, isActive?: string)
  {
    this.toggleId = document.getElementById(toggleId)
    this.menuId = document.getElementById(menuId)
    this.change = isActive ? isActive : 'is-active'

    this.addEvents(this.toggleId)
  }

  toggle()
  {
    this.toggleId.classList.toggle(this.change)
    this.menuId.classList.toggle(this.change)
  }

  addEvents(id: HTMLElement)
  {
    id.addEventListener('click', () => {this.toggle()} ) 
  }
}