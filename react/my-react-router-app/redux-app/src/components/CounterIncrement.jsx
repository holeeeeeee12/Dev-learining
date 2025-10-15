import { increment } from "../store/counterSlices";

import { useDispatch } from "react-redux";

export default function CounterIncrement() {
  const dispatch = useDispatch();
  function clickHander() {
    dispatch(increment());
    // const action = increment();
  }
  return (
    <div>
      <button
        onClick={() => {
          clickHander();
        }}
      >
        1 증가
      </button>
    </div>
  );
}
