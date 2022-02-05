import { configureStore } from "./configureStore";
import { Provider } from "react-redux";
import ComponentOne from "./MyComponents/ComponentOne";
import ComponentTwo from "./MyComponents/ComponentTwo";
function App() {
  const store = configureStore;
  window.localStorage.clear(); //clear all localstorage
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentTwo />
        <ComponentOne />
      </div>
    </Provider>
  );
}

export default App;
