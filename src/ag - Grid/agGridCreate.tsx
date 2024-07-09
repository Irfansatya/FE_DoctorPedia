import { createSignal, onCleanup, onMount } from 'solid-js';
import AgGridSolid from "ag-grid-solid";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const App = () => {
  const initialData = JSON.parse(localStorage.getItem('rowData')) || [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ];

  const [rowData, setRowData] = createSignal(initialData);
  const [newUser, setNewUser] = createSignal({ name: '', email: '' });
  let nextId = initialData.length ? Math.max(...initialData.map(user => user.id)) + 1 : 1;

  const columnDefs = [
    { headerName: 'ID', field: 'id', editable: false },
    { headerName: 'Name', field: 'name', editable: true },
    { headerName: 'Email', field: 'email', editable: true },
    {
      headerName: 'Actions',
      field: 'actions',
      cellRendererFramework: (params) => (
        <button onClick={() => deleteUser(params.data.id)}>Delete</button>
      )
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const addUser = () => {
    if (newUser().name && newUser().email) {
      const updatedRowData = [...rowData(), { id: nextId, name: newUser().name, email: newUser().email }];
      nextId += 1;
      setRowData(updatedRowData);
      localStorage.setItem('rowData', JSON.stringify(updatedRowData));
      setNewUser({ name: '', email: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  const onCellValueChanged = (params) => {
    const updatedRowData = rowData().map(row =>
      row.id === params.data.id ? { ...row, ...params.data } : row
    );
    setRowData(updatedRowData);
    localStorage.setItem('rowData', JSON.stringify(updatedRowData));
  };

  const deleteUser = (id) => {
    const updatedRowData = rowData().filter(user => user.id !== id);
    setRowData(updatedRowData);
    localStorage.setItem('rowData', JSON.stringify(updatedRowData));
  };

  return (
    <div>
      <input name="name" placeholder="Name" value={newUser().name} onInput={handleChange} />
      <input name="email" placeholder="Email" value={newUser().email} onInput={handleChange} />
      <button onClick={addUser}>Add User</button>

      <div class="ag-theme-alpine" style={{ height: '400px', width: '600px' }}>
        <AgGridSolid
          rowData={rowData()}
          columnDefs={columnDefs}
          onCellValueChanged={onCellValueChanged}
        ></AgGridSolid>
      </div>
    </div>
  );
};

export default App;
