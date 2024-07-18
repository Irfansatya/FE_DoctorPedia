import { createMemo } from "solid-js";

const ImageRenderer = ({ value }) => {
  const imageUrl = createMemo(() => value);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={imageUrl()} alt="Image" style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "50%" }} />
    </div>
  );
};

export default ImageRenderer;
