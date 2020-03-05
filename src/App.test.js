import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { render, mount, findByLabelText } from "@testing-library/react";
import App from "./App";
import reducers from "./reducers";
import SearchCampaign from "./containers/SearchCampaign";

test("renders few records", () => {
  const store = createStore(reducers, applyMiddleware(thunk));
  const wrapper = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(document.querySelector(".campaign-data-tbl")).toBeInstanceOf(
    HTMLElement
  );
});
