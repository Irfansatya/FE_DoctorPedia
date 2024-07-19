import { createSignal } from "solid-js";
import styles from "./tester2.module.css"; // Impor file CSS
import Card from "./Card";

const MyGrid = () => {
  const [rowData, setRowData] = createSignal([
    { name: "John", age: 25 },
    { name: "Doe", age: 42, imageUrl: "src=../assets/images/image-web-3-desktop 1.png" },
    // tambahkan data lain di sini
  ]);

  return (
    <div>
      <div class={styles.cardsContainer}>
        {rowData().map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyGrid;
