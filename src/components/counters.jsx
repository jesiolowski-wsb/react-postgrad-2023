import React from "react";
import Counter from "./counter";

const Counters = (props) => {
  const { onReset, counters, onDelete, onIncrement } = props;

  return (
    <>
      <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
        reset
      </button>
      {counters.map((counter) => (
        <Counter
          counter={counter}
          key={counter.id}
          onDelete={onDelete}
          onIncrement={onIncrement}
        />
      ))}
    </>
  );
};

export default Counters;
