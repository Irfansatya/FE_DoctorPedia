import { createSignal } from 'solid-js';
import  AgGridSolid  from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
  const [rowData, setRowData] = createSignal([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' }
  ]);

  const [newUser, setNewUser] = createSignal({ id: '', name: '', email: '' });

  const columnDefs = [
    { headerName: 'ID', field: 'id', editable: true },
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
    if (newUser().id && newUser().name && newUser().email) {
      setRowData(prev => [...prev, { id: Number(newUser().id), name: newUser().name, email: newUser().email }]);
      setNewUser({ id: '', name: '', email: '' });
    } else {
      alert('Please fill all fields.');
    }
  };

  const onCellValueChanged = (params) => {
    const updatedRowData = rowData().map(row =>
      row.id === params.data.id ? { ...row, ...params.data } : row
    );
    setRowData(updatedRowData);
  };

  const deleteUser = (id) => {
    setRowData(prev => prev.filter(user => user.id !== id));
  };

  return (
    <div>
      <input name="id" placeholder="ID" value={newUser().id} onInput={handleChange} />
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
