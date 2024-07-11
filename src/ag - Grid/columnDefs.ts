// columnDefs.ts
import styles from './agGrid.module.css'; 

const columnDefs = [
  {
    headerName: "First Name",
    field: "firstName",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f5f5f5' },
    headerCellStyle: { padding: '10px', backgroundColor: '#12A190' },
    width: 150,
    minWidth: 100,
    maxWidth: 200,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Last Name",
    field: "lastName",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#e0e0e0' },
    headerCellStyle: { padding: '10px', backgroundColor: '#11786B' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Full Name",
    valueGetter: (params) => params.data.firstName + ' ' + params.data.lastName,
    editable: false,
    sortable: true,
    resizable: true,
    filter: true,
    cellClass: styles.cellWithMargin
  },
  {
    headerName: "Password",
    field: "password",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#e0e0e0' },
    headerCellStyle: { padding: '10px', backgroundColor: '#11786B' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Email",
    field: "email",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#e0e0e0' },
    headerCellStyle: { padding: '10px', backgroundColor: '#11786B' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Mobile Number",
    field: "mobileNumber",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#e0e0e0' },
    headerCellStyle: { padding: '10px', backgroundColor: '#11786B' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Username",
    field: "userName",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#e0e0e0' },
    headerCellStyle: { padding: '10px', backgroundColor: '#11786B' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: "Role",
    field: "role",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#e0e0e0' },
    headerCellStyle: { padding: '10px', backgroundColor: '#11786B' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: 'Actions',
    field: 'actions',
    cellRenderer: (params) => `<button onclick="deleteUser(${params.data.id})">Delete</button>`
  }
];

export default columnDefs;
