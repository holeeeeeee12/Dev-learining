import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state["count"] = state["count"] + 1;
    },
    // 상태 count를 특정 값(외부에서 인자로 전달한)만큼 증가시키는 리듀서와 액션
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});
