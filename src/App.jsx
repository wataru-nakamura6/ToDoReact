import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputText } from "./components/InputText";
import { YetClear } from "./components/YetClear";
import { AlreadyClear } from "./components/AlreadyClear";

export const App = () => {
  const [text, setText] = useState("");
  const [yetClear, setYetClear] = useState([]);
  const [clear, setClear] = useState([]);

  const onChangeText = (event) => {
    setText(event.target.value);
  };

  const onAdd = () => {
    if (text === "") return;
    const newText = [...yetClear, text];
    setYetClear(newText);
    setText("");
  };

  const onDelete = (index) => {
    const deletes = [...yetClear];
    deletes.splice(index, 1);
    setYetClear(deletes);
  };

  const onClear = (index) => {
    const deletes = [...yetClear];
    const clears = [...clear, deletes[index]];
    deletes.splice(index, 1);
    setClear(clears);
    setYetClear(deletes);
  };

  const onBack = (index) => {
    const clears = [...clear];
    const yets = [...yetClear, clears[index]];
    clears.splice(index, 1);
    setClear(clears);
    setYetClear(yets);
  };

  useEffect(() => {}, []);

  return (
    <>
      <InputText text={text} onChange={onChangeText} onClick={onAdd} />
      <YetClear yetClear={yetClear} onClear={onClear} onDelete={onDelete} />
      <AlreadyClear clear={clear} onBack={onBack} />
    </>
  );
};
