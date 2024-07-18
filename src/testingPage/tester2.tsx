import { render } from "solid-js/web";
import MyGrid from "./MyGrid"
import "./tester2.module.css";  // Impor file CSS jika belum diimpor di MyGrid

const App = () => {
  return (
    <div>
      <h1>My Grid to Cards Transformation</h1>
      <MyGrid />
    </div>
  );
};

render(App, document.getElementById("root"));
