import { useEffect } from "react";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log("count:", count);
}

const setCount = () => {
  useCounterStore.setState({ count: 525 });
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore(state => state.increment);
  const incrementAsync = useCounterStore(state => state.incrementAsync);
  const decrement = useCounterStore(state => state.decrement);
  const incrementBy = useCounterStore(state => state.incrementBy);
  useEffect(() => {
    logCount();
    setCount();
  }, []);
  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment Async</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>incrementBy(5)}>Increment by 5</button>
    </div>
  )
}

const App = () => {
  const count = useCounterStore(state => state.count)
  return (
    <div>
      <OtherComponent count={count} />
    </div>
  )
}

export default App