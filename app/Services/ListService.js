import List from "../Models/List.js";
import _store from "../store.js"
//Public
class ListService {
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
  constructor() {
    console.log("hello from the service");

  }
  addList(value) {
    let newList = new List(value)
    _store.addList(newList)
    _store.saveState()

  }
  deleteList(id) {
    let listToRemove = _store.State.lists.findIndex(list => list.id == id)
    if (listToRemove >= 0) {
      _store.deleteList(listToRemove)
      console.log(listToRemove);
      return
    }
    console.log(listToRemove)
  }

  addTask(taskData, id) {
    let listIndex = _store.State.lists.findIndex(list => list.id == id)
    if (listIndex >= 0) {
      _store.addTask(listIndex, taskData)
      console.log(listIndex);
      return
    }
    console.log("list index could not be found");
  }
  deleteTask(listId, taskIndex) {
    let listIndex = _store.State.lists.findIndex(list => list.id == listId)
    if (listIndex >= 0) {
      _store.deleteTask(listIndex, taskIndex)
      console.log(listIndex);
      return
    }
    console.log("task index could not be found");
  }

}


const SERVICE = new ListService();
export default SERVICE;
