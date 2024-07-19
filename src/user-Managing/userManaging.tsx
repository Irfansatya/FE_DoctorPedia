import { createSignal } from 'solid-js';
import AgGridSolid from 'ag-grid-solid';
import styles from './userManaging.module.css'; // Adjust the import if the file location is different
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Link } from '@solidjs/router';
import { columnDefs } from './columnDefs';
import DeleteButtonRenderer from './DeleteButtonRenderer';

const App = () => {
  const initialData = JSON.parse(localStorage.getItem('danaKaget')) || [
    { id: 1, firstName: 'John', lastName: 'Doe', password: 'password123', email: 'john@example.com', mobileNumber: '1234567890', userName: 'john_doe', role: 'User' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', password: 'password123', email: 'jane@example.com', mobileNumber: '0987654321', userName: 'jane_doe', role: 'User' }
  ];

  const [rowData, setRowData] = createSignal(initialData);
  const [newUser, setNewUser] = createSignal({ firstName: '', lastName: '', password: '', email: '', mobileNumber: '', userName: '', role: 'User' });
  let nextId = initialData.length ? Math.max(...initialData.map(user => user.id)) + 1 : 1;

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
            components={{ deleteButtonRenderer: DeleteButtonRenderer }}
            context={{ deleteUser }}
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
