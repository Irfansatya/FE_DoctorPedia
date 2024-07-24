import { createSignal } from 'solid-js';
import CryptoJS from 'crypto-js';

const secretKey = 'your-secret-key';

const encryptPassword = (password) => {
  return CryptoJS.AES.encrypt(password, secretKey).toString();
};

const decryptPassword = (encryptedPassword) => {
  const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
};

const ActionButtonRenderer = (props) => {
  const [isEditing, setIsEditing] = createSignal(false);

  const startEditing = () => {
    setIsEditing(true);
    props.api.startEditingCell({
      rowIndex: props.rowIndex,
      colKey: props.column.getColId(),
    });

    if (props.column.colId === 'password') {
      // Decrypt password for editing
      const decryptedPassword = decryptPassword(props.node.data.password);
      props.api.applyTransaction({
        update: [{ ...props.node.data, password: decryptedPassword }]
      });
    }

    props.startEditingCallback(props.node.data.id);
  };

  const stopEditing = () => {
    setIsEditing(false);
    props.api.stopEditing();

    if (props.column.colId === 'password') {
      // Encrypt password before saving
      const updatedData = props.node.data;
      updatedData.password = encryptPassword(updatedData.password);
      props.api.applyTransaction({
        update: [updatedData]
      });
    }

    props.stopEditingCallback(props.node.data.id);
  };

  const deleteRow = () => {
    props.api.applyTransaction({ remove: [props.node.data] });
    props.deleteRowCallback(props.node.data.id);
  };

  return (
    <div>
      {!isEditing() && <button onClick={startEditing}>Edit</button>}
      {isEditing() && <button onClick={stopEditing}>Save</button>}
      <button onClick={deleteRow}>Delete</button>
    </div>
  );
};

export default ActionButtonRenderer;
