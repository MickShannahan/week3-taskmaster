import ListController from "./Controllers/ListController.js";
import Swal from "sweetalert2"

//NOTE This should be good to go
class App {
  listController = new ListController();

}

window["app"] = new App();
