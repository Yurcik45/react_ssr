import * as React from "react";
import Test from './components/Test'

export default function App() {
  const [times, setTimes] = React.useState(0);
  return (
    <div>
      <h1>Hello {times}</h1>
      <Test />
      <button onClick={() => setTimes((times) => times + 1)}>ADD</button>
    </div>
  );
}
