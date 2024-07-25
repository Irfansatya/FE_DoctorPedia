import { createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import styles from './userManaging.module.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Link } from '@solidjs/router';
import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key';

const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, secretKey).toString();
};

const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const isEncrypted = (password) => {
  try {
    decryptPassword(password);
    return true;
  } catch (e) {
    return false;
  }
};

const App = () => {
  const initialData = JSON.parse(localStorage.getItem('danaKaget')) || [
    { id: 1, firstName: 'John', lastName: 'Doe', password: 'password123', email: 'john@example.com', mobileNumber: '1234567890', userName: 'john_doe', role: 'User' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', password: 'password123', email: 'jane@example.com', mobileNumber: '0987654321', userName: 'jane_doe', role: 'User' }
  ];

  const encryptedInitialData = initialData.map(user => {
    if (!isEncrypted(user.password)) {
      return { ...user, password: encryptPassword(user.password) };
    }
    return user;
  });

  const [rowData, setRowData] = createSignal(encryptedInitialData);
  const [newUser, setNewUser] = createSignal({ firstName: '', lastName: '', password: '', email: '', mobileNumber: '', userName: '', role: 'User' });
  const [editingRows, setEditingRows] = createSignal([]);
  let nextId = encryptedInitialData.length ? Math.max(...encryptedInitialData.map(user => user.id)) + 1 : 1;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const addUser = () => {
    if (newUser().firstName && newUser().lastName && newUser().password && newUser().email && newUser().mobileNumber && newUser().userName) {
      const encryptedPassword = encryptPassword(newUser().password);
      const updatedRowData = [...rowData(), { id: nextId, ...newUser(), password: encryptedPassword, role: 'User' }];
      nextId += 1;
      setRowData(updatedRowData);
      localStorage.setItem('danaKaget', JSON.stringify(updatedRowData));
      setNewUser({ firstName: '', lastName: '', password: '', email: '', mobileNumber: '', userName: '', role: 'User' });
      console.log('New User Added:', newUser());
    } else {
      alert('Please fill all fields.');
    }
  };

  const onCellValueChanged = (params) => {
    if (params.column.colId === 'password') {
      // Only encrypt password if it's not in editing mode
      if (!editingRows().includes(params.data.id)) {
        params.data.password = encryptPassword(params.data.password);
      }
    }

    const updatedRowData = rowData().map(row =>
      row.id === params.data.id ? { ...row, ...params.data } : row
    );
    setRowData(updatedRowData);
    localStorage.setItem('danaKaget', JSON.stringify(updatedRowData));
    console.log('Row Data Updated:', params.data);
  };

  const startEditingCallback = (id) => {
    setEditingRows((prev) => [...prev, id]);
  };

  const stopEditingCallback = (id) => {
    setEditingRows((prev) => prev.filter(rowId => rowId !== id));
  };

  const deleteRowCallback = (id) => {
    const updatedRowData = rowData().filter(data => data.id !== id);
    setRowData(updatedRowData);
    localStorage.setItem('danaKaget', JSON.stringify(updatedRowData));
  };

  const columnDefs = [
    { headerName: 'First Name', field: 'firstName', editable: (params) => editingRows().includes(params.data.id) },
    { headerName: 'Last Name', field: 'lastName', editable: (params) => editingRows().includes(params.data.id) },
    { 
      headerName: 'Password', 
      field: 'password', 
      editable: (params) => editingRows().includes(params.data.id),
      cellRenderer: (params) => editingRows().includes(params.data.id) ? params.value : '********'
    },
    { headerName: 'Email', field: 'email', editable: (params) => editingRows().includes(params.data.id) },
    { headerName: 'Mobile Number', field: 'mobileNumber', editable: (params) => editingRows().includes(params.data.id) },
    { headerName: 'Username', field: 'userName', editable: (params) => editingRows().includes(params.data.id) },
    { headerName: 'Role', field: 'role', editable: (params) => editingRows().includes(params.data.id) },
  ];

  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser')) || {};
  const userRole = loggedInUser.role || 'Guest';

  return (
    <div class={`${styles.container} ${styles.homepage}`}>
      <header class={styles.header}>
        <div class={styles.headercontent}>
          <div class={styles.logo}>
            <h1>DocterPedia</h1>
          </div>
          <nav class={styles.nav} data-visible="false">
            <ul class={styles.ul}>
              <li class={styles.li}><Link href="/login">Login</Link></li>
              <li class={styles.li}><Link href="/new">Jadwal</Link></li>
              {userRole === "Admin" && (
                <li class={styles.li}><Link href="/account-manage">Akun</Link></li>
              )}
            </ul>
          </nav>
        </div>
        <button aria-expanded="false" class={styles.mobile_navigation} aria-label="open"></button>
      </header>

      <div class={`${styles.AccountManaging}`}>
        <div>
          <div class={`${styles.InputDiv}`}>
            <div class={`${styles.InputDivColumn}`}>
              <p class={styles.p}>First Name</p>
              <input
                class={styles.input}
                type="text"
                name="firstName"
                placeholder="Masukkan nama depan..."
                value={newUser().firstName}
                onInput={handleChange}
              />
              <p class={styles.p}>Last Name</p>
              <input
                class={styles.input}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={newUser().lastName}
                onInput={handleChange}
              />
              <p class={styles.p}>Password</p>
              <input
                class={styles.input}
                type="password"
                name="password"
                placeholder="Password"
                value={newUser().password}
                onInput={handleChange}
              />
            </div>
            <div class={`${styles.InputDivColumn}`}>
              <p class={styles.p}>E-Mail</p>
              <input
                class={styles.input}
                type="email"
                name="email"
                placeholder="Email"
                value={newUser().email}
                onInput={handleChange}
              />
              <p class={styles.p}>Mobile Number</p>
              <input
                class={styles.input}
                type="tel"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={newUser().mobileNumber}
                onInput={handleChange}
              />
              <p class={styles.p}>Username</p>
              <input
                class={styles.input}
                type="text"
                name="userName"
                placeholder="Username"
                value={newUser().userName}
                onInput={handleChange}
              />
            </div>
          </div>

          <button class={styles.button} onClick={addUser}>Add User</button>
        </div>
        
        <div class="ag-theme-alpine custom-ag-theme" style={{ height: '800px', width: '80%' }}>
          <AgGridSolid
            rowData={rowData()}
            columnDefs={columnDefs}
            animateRows={true}
            rowSelection="multiple"
            onCellValueChanged={onCellValueChanged}
          />
        </div>
      </div>

      <footer class={`${styles.attribution}`}>
        {/* <p>
          Dibuat oleh <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">EJBFSUE</a>.
          WFEHIEWF <a href="#">HOME</a>.
        </p> */}
      </footer>
    </div>
  );
};

export default App;
