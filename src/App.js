import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [myNumber, setMyNumber] = useState(0);
  const selectedNumber = useRef();

  useEffect(() => {
    // console.log(myNumber);
  }, [myNumber]);

  return (
    <div className="app">
      <p>{myNumber}</p>
      <button onClick={() => setMyNumber(Number(myNumber) + 1)}>
        Incrémenter +1
      </button>
      <label htmlFor="">Numéro de départ</label>
      <input
        type="number"
        defaultValue={0}
        ref={selectedNumber}
        onChange={() => setMyNumber(selectedNumber.current.value)}
      />
    </div>
  );
};

export default App;
