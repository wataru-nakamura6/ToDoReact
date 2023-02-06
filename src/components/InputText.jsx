import React from "react";

export const InputText = (props) => {
  const { text, onChange, onClick } = props;
  return (
    <div className="container_wrap input_area">
      <input
        id="add_text"
        value={text}
        placeholder="TODOを入力"
        type="text"
        onChange={onChange}
      />
      <button onClick={onClick}>追加</button>
    </div>
  );
};
