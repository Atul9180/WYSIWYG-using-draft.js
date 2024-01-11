import { useRef, useState } from "react";
import JoditEditor from "jodit-react";

const JoditTextEditor = () => {
  const editorRef = useRef(null);
  const [content, setContent] = useState("");

  return (
    <>
      <h3>Jodit Text Editor</h3>
      <JoditEditor
        ref={editorRef}
        value={content}
        style={styles.editor}
        onChange={(newContent) => setContent(newContent)}
      />
      <div
        style={styles.previewContainer}
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </>
  );
};

const styles = {
  editor: {
    height: "140px",
    width: "100%",
    color: "black",
  },

  previewContainer: {
    display: "flex",
    marginTop: "50px",
    border: "1px solid red",
    padding: "4px",
    maxHeight: "80px",
    width: "100%",
    overflow: "auto",
  },
};

export default JoditTextEditor;
