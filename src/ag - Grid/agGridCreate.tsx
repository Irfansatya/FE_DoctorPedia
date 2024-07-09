import { createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const App = () => {
  const initialData = JSON.parse(localStorage.getItem('danaKaget')) || [
    { id: 1, firstName: 'John', lastName: 'Doe', password: 'password123', email: 'john@example.com', mobileNumber: '1234567890', userName: 'john_doe', role: 'User' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', password: 'password123', email: 'jane@example.com', mobileNumber: '0987654321', userName: 'jane_doe', role: 'User' }
  ];

  const [rowData, setRowData] = createSignal(initialData);
  const [newUser, setNewUser] = createSignal({ firstName: '', lastName: '', password: '', email: '', mobileNumber: '', userName: '', role: 'User' });
  let nextId = initialData.length ? Math.max(...initialData.map(user => user.id)) + 1 : 1;

  const columnDefs = [
    { headerName: 'ID', field: 'id', editable: false },
    { headerName: 'First Name', field: 'firstName', editable: true },
    { headerName: 'Last Name', field: 'lastName', editable: true },
    { headerName: 'Password', field: 'password', editable: true },
    { headerName: 'Email', field: 'email', editable: true },
    { headerName: 'Mobile Number', field: 'mobileNumber', editable: true },
    { headerName: 'Username', field: 'userName', editable: true },
    { headerName: 'Role', field: 'role', editable: true },
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
    if (newUser().firstName && newUser().lastName && newUser().password && newUser().email && newUser().mobileNumber && newUser().userName) {
      const updatedRowData = [...rowData(), { id: nextId, ...newUser(), role: 'User' }];
      nextId += 1;
      setRowData(updatedRowData);
      localStorage.setItem('danaKaget', JSON.stringify(updatedRowData));
      setNewUser({ firstName: '', lastName: '', password: '', email: '', mobileNumber: '', userName: '', role: 'User' });
    } else {
      alert('Please fill all fields.');
    }
  };

  const onCellValueChanged = (params) => {
    const updatedRowData = rowData().map(row =>
      row.id === params.data.id ? { ...row, ...params.data } : row
    );
    setRowData(updatedRowData);
    localStorage.setItem('danaKaget', JSON.stringify(updatedRowData));
  };

  const deleteUser = (id) => {
    const updatedRowData = rowData().filter(user => user.id !== id);
    setRowData(updatedRowData);
    localStorage.setItem('danaKaget', JSON.stringify(updatedRowData));
  };

  return (
    <div>
      <input name="firstName" placeholder="First Name" value={newUser().firstName} onInput={handleChange} />
      <input name="lastName" placeholder="Last Name" value={newUser().lastName} onInput={handleChange} />
      <input name="password" placeholder="Password" value={newUser().password} onInput={handleChange} />
      <input name="email" placeholder="Email" value={newUser().email} onInput={handleChange} />
      <input name="mobileNumber" placeholder="Mobile Number" value={newUser().mobileNumber} onInput={handleChange} />
      <input name="userName" placeholder="Username" value={newUser().userName} onInput={handleChange} />
      <button onClick={addUser}>Add User</button>

      <div class="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
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
