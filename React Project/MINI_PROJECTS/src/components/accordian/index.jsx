import { useState } from "react";
import data from "./data";
import "./style.css";

export default function Accordian() {
  const [text, setText] = useState("Enable MultiSelection");
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  // Single selection function
  function handleSingleSelection(getCurrentId) {
    setSelected(selected === getCurrentId ? null : getCurrentId);
    console.log(getCurrentId);
  }

  // Multi selection function
  function handleMultipleSelection(getCurrentId) {
    let copy = [...multiple];
    const findIndexOfCurrentId = copy.indexOf(getCurrentId);
    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId == -1) {
      copy.push(getCurrentId);
    } else {
      copy.splice(findIndexOfCurrentId, 1);
    }
    setMultiple(copy);
    console.log(multiple);
  }
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => {
            let first = "Disable MultiSelection";
            let second = "Enable MultiSelection";
            setEnableMultiSelection(!enableMultiSelection);
            if (enableMultiSelection) {
              setText(second);
              setMultiple([]);
            } else {
              setText(first);
              setSelected(null);
            }
          }}
        >
          {text} {enableMultiSelection}
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMultiSelection
                      ? () => handleMultipleSelection(dataItem.id)
                      : () => handleSingleSelection(dataItem.id)
                  }
                  className="title"
                  x
                >
                  <h3>{dataItem.question}</h3>
                  <div>
                    {selected === dataItem.id ||
                    (enableMultiSelection &&
                      multiple.indexOf(dataItem.id) != -1) ? (
                      <div className="content">{dataItem.answer}</div>
                    ) : null}
                  </div>
                  <span>+</span>
                </div>
              </div>
            ))
          ) : (
            <div>NO Data Found</div>
          )}
        </div>
      </div>
    </>
  );
}
