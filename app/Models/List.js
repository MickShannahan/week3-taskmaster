import { generateId } from "../utils.js";
import { generateThis } from "../utils.js";
import { generateColor } from "../utils.js"




export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name || generateThis();
    this.tasks = data.tasks || []
    this.bgColor = data.bgColor || 'grey'

  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
  get ColorChange() {
    return generateColor()
  }
  get Template() {
    let subTemplate = ''
    subTemplate = `
    <div class="card border-0 col w-100 list-width m-2 shadow-sm hd-${this.bgColor} border-rounded rounded-lg">
        <div class="row">
          <div class="col-10" onclick="app.listController.changeColor('${this.id}')">
            <h4 class="p-3 mt-2"><b>${this.name}</b></h4>
          </div>
          <button onclick="app.listController.deleteList('${this.id}')"
            class="btn btn-danger btn-list-x rounded-0 col-2 bg-danger justify-content-center d-flex align-items-center">
            <i class="far fa-calendar-times"></i>
          </button>
          <div class="col-12 bg-list-body py-2 pr-0 border-top text-light">
            <div class="col-12">
              <form class="row align-items-center" onsubmit="app.listController.addTask(event,'${this.id}')">
                <div class=" col-10 pr-0 form-group">
                  <input type="text" name="task" id="" class="form-control bg-darken mx-0 mt-3  rounded-0
                  border-0" placeholder="Add a new task...">
                </div>
                <button type='submit' class="col-2 btn btn-outline-dark rounded-0"><i class="far fa-plus-square"></i></button>
              </form>`

    this.tasks.forEach((task, index) => subTemplate += `
              <div class="row mb-2 border-top">
                <div class="col-10 d-flex align-items-center text-font-light">> ${task}</div>
                <button onclick="app.listController.deleteTask('${this.id}','${index}')"
                  class="col-2 btn btn-danger btn-task rounded-0 py-0 bg-danger"> X</button>
              </div>`)

    subTemplate +=
      `
            </div>
          </div>
        </div>
      </div>
    `
    return subTemplate
  }
}
