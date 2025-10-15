import { useState } from "react";

import { useDispatch } from "react-redux";
import { incrementByAmount, reset } from "../store/counterSlices";

export default function CounterIncrementByAmount() {
  const dispatch = useDispatch();
  const [payload, setPayload] = useState(0);

  return (
    <div>
      <input
        type="number"
        value={payload}
        onChange={(e) => {
          setPayload(e.target.value);
        }}
      />

      <button
        onClick={() => {
          dispatch(incrementByAmount(payload));
        }}
      >
        증가
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        리셋
      </button>
    </div>
  );
}
