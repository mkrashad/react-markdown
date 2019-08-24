import React from "react";

const Editor = props => {
  const myWidth = props.width - 6;

  const myStyle = {
    width: myWidth
  };

  return (
      <textarea
        id="editor"
        value={props.markdown}
        onChange={props.onChange}
        type="text"
        style={myStyle}
      />
  );
};

export default Editor;
