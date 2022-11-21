import { Provider } from "react-redux";

import store from "./store/index";
import Message from "./Message";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Message />
      </div>
    </Provider>
  );
}

export default App;
