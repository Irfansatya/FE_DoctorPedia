import { createComponent } from 'solid-js';

const DeleteButtonRenderer = (props: any) => {
  const handleClick = () => {
    props.context.deleteAppointment(props.node.data.id);
  };

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButtonRenderer;
