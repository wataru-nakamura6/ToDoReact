import React from "react";

export const YetClear = (props) => {
  const { yetClear, onClear, onDelete } = props;
  return (
    <div className="container_wrap yet_clear">
      <p>未完了のtodo</p>
      <ul id="yet_ul">
        {yetClear.map((todo, index) => {
          return (
            <li key={todo}>
              <div>
                <p>{todo}</p>
                <button onClick={() => onClear(index)}>完了</button>
                <button onClick={() => onDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
