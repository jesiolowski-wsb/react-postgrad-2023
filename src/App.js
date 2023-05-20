import "./App.css";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import { useState } from "react";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 3 },
    { id: 2, value: 4 },
    { id: 3, value: 33 },
    { id: 4, value: 0 },
  ]);

  const handleDelete = (counterId) => {
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  const handleIncrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value++;
    setCounters(countersUpdated);
  };

  const handleDecrement = (counter) => {
    const countersUpdated = [...counters];
    const index = countersUpdated.indexOf(counter);
    countersUpdated[index] = { ...counter };
    countersUpdated[index].value--;
    setCounters(countersUpdated);
  };

  const handleReset = () => {
    const countersReset = counters.map((c) => {
      c.value = 0;
      return c;
    });
    setCounters(countersReset);
  };

  return (
    <div className="App">
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <main className="container" role="main">
        <Counters
          counters={counters}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onReset={handleReset}
        />
      </main>
    </div>
  );
}

export default App;
