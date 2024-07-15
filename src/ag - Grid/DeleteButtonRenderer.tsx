import { Component, createSignal } from 'solid-js';
import styles from './agGrid.module.css';

const DeleteButtonRenderer = (props) => {
  const [params, setParams] = createSignal(props);

  const onClick = () => {
    const { id } = params().data;
    params().context.deleteUser(id);
  };

  return (
    <button onClick={onClick} style={styles.buttonDelete}>
      Delete
    </button>
  );
};

export default DeleteButtonRenderer;
