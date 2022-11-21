import { Provider } from "react-redux";

import store from "./store/index";
import Message from "./Message";

function App() {
  return (
    <Provider store={store}>
      <div>
        <header>
          <h1>React Redux Intro</h1>
        </header>
        <Message />
      </div>
    </Provider>
  );
}

export default App;
