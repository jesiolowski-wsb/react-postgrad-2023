import React from "react";

const Counter = (props) => {
  const formatCount = () =>
    props.counter.value === 0 ? <span>Zero</span> : props.counter.value;

  const getClassNames = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <>
      <span className={getClassNames()}>{formatCount()}</span>
      <button className="btn" onClick={() => props.onIncrement(props.counter)}>
        +
      </button>
      <button
        onClick={() => props.onDelete(props.counter.id)}
        className="btn btn-danger btn-sm m-2"
      >
        delete
      </button>
    </>
  );
};

export default Counter;
