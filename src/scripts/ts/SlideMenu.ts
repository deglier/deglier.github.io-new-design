export default class SlideMenu
{
  public toggleClass: any
  public menuClass: any
  public change: string

  constructor(toggleClass: string, menuClass: string, isActive?: string)
  {
    this.toggleClass = document.getElementById(toggleClass)
    this.menuClass = document.getElementById(menuClass)
    this.change = isActive ? isActive : 'is-active'

    this.addEvents(this.toggleClass)
  }

  toggle()
  {
    this.toggleClass.classList.toggle(this.change)
    this.menuClass.classList.toggle(this.change)
  }

  addEvents(arr: Array<any>)
  {
    let i: number
    for(i=0;i<arr.length;i++)
    {
      arr[i].addEventListener('click', () => {this.toggle()})
    }
  }
}