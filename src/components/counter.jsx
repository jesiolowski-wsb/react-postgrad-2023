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
    <div className="row">
      <div className="col-1">
        <span className={getClassNames()}>{formatCount()}</span>
      </div>
      <div className="col d-flex align-items-start">
        <button
          className="btn btn-secondary btn-sm ml-2"
          onClick={() => props.onIncrement(props.counter)}
        >
          +
        </button>
        <button
          onClick={() => props.onDecrement(props.counter)}
          className="btn btn-secondary btn-sm ml-2 mr-2"
          disabled={!props.counter.value}
        >
          -
        </button>
        <button
          onClick={() => props.onDelete(props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
