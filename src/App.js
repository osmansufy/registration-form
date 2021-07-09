import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import "./assets/index.scss";
import Registration from "./components/Registration/registration";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Registration />
    </div>
  );
}

export default App;
