import React from "react";

export const AlreadyClear = (props) => {
  const { clear, onBack } = props;
  return (
    <div className="container_wrap already_clear">
      <p>完了済みのtodo</p>
      <ul id="clear_ul">
        {clear.map((cleartodo, index) => {
          return (
            <li key={cleartodo}>
              <div>
                <p>{cleartodo}</p>
                <button onClick={() => onBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
