import React, { useState } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from "draft-js";
import "draft-js/dist/Draft.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const customStyleMap = {
    HIGHLIGHT: {
      backgroundColor: "yellow",
    },
  };

  const handleHighlightClick = () => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, "HIGHLIGHT"));
  };


  const saveContent = () => {
    const contentState = editorState.getCurrentContent();
    const rawContent = convertToRaw(contentState);
    console.log("Saved Content:", JSON.stringify(rawContent));
  };

  return (
    <div>
      <button onClick={saveContent}>Save Content</button>
      <button onClick={handleHighlightClick}>Highlight</button>
      <div style={{ border: "1px solid #ccc", padding: "10px" }}>
        <Editor
          editorState={editorState}
          onChange={handleEditorChange}
          customStyleMap={customStyleMap}
        />
      </div>
    </div>
  );
};

export default RichTextEditor;