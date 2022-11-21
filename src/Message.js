import { useSelector, useDispatch } from "react-redux";

import { messageActions } from "./store/message";

const Message = () => {
  const dispatch = useDispatch();
  const message = useSelector(state => state.message);

  const addWordHandler = async () => {
    const response = await fetch("https://api.api-ninjas.com/v1/randomword");
    const data = await response.json();
    dispatch(messageActions.addWord(data.word));
  };
  const removeLastWordHandler = () => {
    dispatch(messageActions.removeWord());
  };
  const resetMessageHandler = () => {
    dispatch(messageActions.reset());
  };

  return (
    <main>
      <h1>React Redux Message Builder</h1>
      <p>{message}</p>
      <div>
        <button onClick={addWordHandler}>Add new word</button>
        <button onClick={removeLastWordHandler}>Remove last word</button>
        <button onClick={resetMessageHandler}>Reset</button>
      </div>
    </main>
  );
};

export default Message;
