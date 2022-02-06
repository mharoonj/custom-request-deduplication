import { configureStore } from "./configureStore";
import { Provider } from "react-redux";
import ComponentOne from "./MyComponents/ComponentOne";
import ComponentTwo from "./MyComponents/ComponentTwo";

const url = "https://gorest.co.in/public/v2/posts" ;
function App() {
  const store = configureStore;
  window.localStorage.clear(); //clear all localstorage
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentOne url={url}/>
        <ComponentTwo url={url}/>
      </div>
    </Provider>
  );
}

export default App;
