export default class Toggle {
  toggleId: any
  menuId: any
  changeClass: any

  constructor(toggleId: string, menuId: string, isActive?: string)
  {
    this.toggleId = document.getElementById(toggleId)
    this.menuId = document.getElementById(menuId)
    this.changeClass = isActive ? isActive : 'is-active'

    this.addEvents(this.toggleId)
  }

  addEvents(el: HTMLElement)
  {
    el.addEventListener('click', () => { this.toggle() })
  }

  toggle()
  {
    this.toggleId.classList.toggle(this.changeClass)
    this.menuId.classList.toggle(this.changeClass)
  }
}