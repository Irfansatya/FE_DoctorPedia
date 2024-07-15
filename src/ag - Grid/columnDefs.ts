import styles from './agGrid.module.css';

const columnDefs = [
  {
    headerName: "First Name",
    field: "firstName",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
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
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
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
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' }
  },
  {
    headerName: "Password",
    field: "password",
    cellClass: styles.cellWithMargin,
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
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
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
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
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
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
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
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
    cellStyle: { padding: '0px', backgroundColor: '#f1f1f1', color: '#11786B' },
    headerCellStyle: { padding: '10px', backgroundColor: '#52B7D7', color: '#f5f5f5' },
    width: 200,
    minWidth: 150,
    maxWidth: 250,
    editable: true,
    sortable: true,
    resizable: true,
    filter: true
  },
  {
    headerName: 'Delete',
    cellStyle: { padding: '0px', textAlign: 'center', backgroundColor: '#EE879d', color: '#f1f1f1' },
    cellRenderer: 'deleteRenderer',
    width: 100,
    minWidth: 80,
    maxWidth: 120
  }
];

export { columnDefs };
