import ListController from "./Controllers/ListController.js";
import Swal from "sweetalert2"

//NOTE This should be good to go
class App {
  listController = new ListController();

  swalTest() {
    Swal.fire({
      title: 'Error!',
      text: 'Do you want to continue',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  }
}

window["app"] = new App();
