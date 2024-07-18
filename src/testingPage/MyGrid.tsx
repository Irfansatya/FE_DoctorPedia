import { createSignal } from "solid-js";
import  AgGridSolid  from "ag-grid-solid";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import ImageRenderer from "./ImageRenderer"; // Impor custom cell renderer
import styles from "./tester2.module.css"; // Impor file CSS
import Card from "./Card";

const MyGrid = () => {
  const [gridApi, setGridApi] = createSignal(null);
  const [rowData, setRowData] = createSignal([
    { name: "John", age: 25, },
    { name: "Doe", age: 42, imageUrl: "src=../assets/images/image-web-3-desktop 1.png" },
    // tambahkan data lain di sini
  ]);

  const columnDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Age", field: "age" },
    // Kolom lainnya jika ada
  ];

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const getGridData = () => {
    const data = [];
    gridApi().forEachNode((node) => data.push(node.data));
    console.log(data);
  };

  return (
    <div>
      <div class={`ag-theme-alpine ${styles['ag-theme-alpine']}`} style="height: 200px; width: 600px;">
        <AgGridSolid
          columnDefs={columnDefs}
          rowData={rowData()}
          onGridReady={onGridReady}
        />
      </div>
      <button onClick={getGridData}>Transform to Cards</button>
      <div class={styles.cardsContainer}>
        {rowData().map((data, index) => (
          <Card key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default MyGrid;
