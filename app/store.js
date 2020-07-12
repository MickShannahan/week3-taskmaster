import List from "./Models/List.js";

let _state = {
  /** @type {List[]} */
  lists: []
};

//NOTE You should not need to change the code from this point down

//NOTE this method will get the lists from local storage at the start of the app
function _loadState() {
  let data = JSON.parse(localStorage.getItem("TaskMaster"));
  if (data) {
    data.lists = data.lists.map(l => new List(l));
    _state = data;
  }
}
_loadState();

class Store {
  constructor() {

  }
  addList(newList) {
    _state.lists.push(newList)
    console.log(_state);

  }
  deleteList(listToRemove) {
    _state.lists.splice(listToRemove, 1)
  }
  addTask(listIndex, task) {
    _state.lists[listIndex].tasks.push(task)
  }
  deleteTask(listIndex, taskIndex) {
    _state.lists[listIndex].tasks.splice(taskIndex, 1)
    console.log(`removed task: ${_state.lists[listIndex].tasks.taskIndex}`)
  }
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }

  //NOTE call saveState everytime you change the state in any way
  saveState() {
    localStorage.setItem("TaskMaster", JSON.stringify(_state));
  }
}

const store = new Store();
export default store;
