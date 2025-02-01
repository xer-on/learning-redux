"use client";
import store from "@/redux/store";
import { Provider } from "react-redux";
import Counter from "./counter";

export default function Home() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
