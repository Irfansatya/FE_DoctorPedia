import { Component } from "solid-js";
import { ICellRendererParams } from "ag-grid-community";

// Define the types for the props
interface DeleteButtonRendererProps extends ICellRendererParams {
  context: {
    deleteAppointment: (id: number) => void;
  };
}

// Define the DeleteButtonRenderer component
const DeleteButtonRenderer: Component<DeleteButtonRendererProps> = (props) => {
  const handleClick = () => {
    const id = props.node.data.id;
    props.context.deleteAppointment(id);
  };

  return (
    <button onClick={handleClick}>
      Delete
    </button>
  );
};

export default DeleteButtonRenderer;
