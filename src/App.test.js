import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";
import App from "./App";
import reducers from "./reducers";

test("renders few records", () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(document.querySelector(".campaign-data-tbl")).toBeInstanceOf(
    HTMLElement
  );
});
