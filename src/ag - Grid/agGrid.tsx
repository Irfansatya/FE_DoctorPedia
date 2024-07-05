import { createSignal, type Component } from "solid-js";
import styles from "./agGrid.module.css";

import AgGridSolid from "ag-grid-solid";
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

const agGrid: Component =() =>{
    const [rowData, setRowData] = createSignal ([
        {email:'a@gmail.com', username: 'a'},
        {email:'b@gmail.com', username: 'b'},
        {email:'c@gmail.com', username: 'c'}]);

    const columDefs = 
    [
        {field:'email'},
        {field:'username'}
        
    ];

    // setInterval ( ()=> {
    //     setRowData([...rowData(), {
    //         email:'agupon@gmail.com' + Math.random(),
    //         username:'aguri' + Math.random(),
    //     }]);
    // }, 500); 

    // const defaultColDef: ColDef = {
    //   width: 150,
    //   sortable: true
    // };
 
    return(
        <div class="ag-theme-alpine" style={{ height: "500px" }}>
        <AgGridSolid
        rowData = {rowData()}
        columnDefs = {columDefs}
        
        animateRows={true}
        />
        </div>
    )
}

export default agGrid