import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/app";
import "./app/styles/index.scss";
import store from "./shared/store/store";
import {BrowserRouter} from "react-router-dom";

import './i18n'

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
          <BrowserRouter>
              <Provider store={store}>
                  <App />
              </Provider>
          </BrowserRouter>

  // </React.StrictMode>
);
