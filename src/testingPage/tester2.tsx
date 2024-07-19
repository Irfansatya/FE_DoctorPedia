import { render } from "solid-js/web";
import MyGrid from "./MyGrid"
import "./tester2.module.css";  // Impor file CSS jika belum diimpor di MyGrid

const App = () => {
  return (
    <div>
      
      <MyGrid />
    </div>
  );
};

render(App, document.getElementById("root"));
