import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: ["bold", "italic", "underline"] }],
    [{ align: ["center", "right"] }],
    [{ list: "ordered" }, { list: "bullet" }],
    ["image", "link", "video"],
    ["clean"],
  ],
};

const ReactQuillTextEditor = () => {
  const [content, setContent] = useState("");

  return (
    <>
      <h3>ReactQuill Text Editor</h3>
      <ReactQuill
        theme="snow"
        value={content}
        onChange={(newContent) => setContent(newContent)}
        style={styles.editor}
        modules={modules}
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

export default ReactQuillTextEditor;
