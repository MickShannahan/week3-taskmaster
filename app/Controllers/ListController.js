import _listService from "../Services/ListService.js";
import _store from "../store.js"

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listWindow = document.getElementById('list-space')
  let template = ''
  _store.State.lists.forEach(list => template += list.Template)

  listWindow.innerHTML = template
  _store.saveState()
}

//Public
export default class ListController {
  constructor() {
    console.log('hello from the controller');


    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }

  addList(event) {
    event.preventDefault()
    let formData = event.target
    let newListData = {
      name: formData.newListName.value
    }
    _listService.addList(newListData)
    formData.reset()
    _drawLists()

  }

  deleteList(id) {
    window.confirm("Are you sure you want to delete this List of Tasks?")
    _listService.deleteList(id)
    _drawLists()
  }

  addTask(event, id) {
    event.preventDefault()
    let taskData = event.target
    _listService.addTask(taskData.task.value, id)
    console.log(taskData.task.value, id);
    _drawLists()

  }

  deleteTask(listId, taskIndex) {
    _listService.deleteTask(listId, taskIndex)
    console.log(listId, taskIndex);
    _drawLists()
  }


  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
