import { configureStore } from "./configureStore";
import { Provider } from "react-redux";
import ComponentOne from "./MyComponents/ComponentOne";
import ComponentTwo from "./MyComponents/ComponentTwo";

const url = "https://gorest.co.in/public/v2/posts";
// const url2 = "https://gorest.co.in/public/v2/users";
function App() {
  window.localStorage.clear(); //clear all localstorage

  return (
    <Provider store={configureStore}>
      <div className="App">
        <ComponentOne url={url} name="title" />
        <ComponentTwo url={url} name="title" />
        {/* <ComponentTwo url={url2} name="name" /> To check if other urls work or not*/}
      </div>
    </Provider>
  );
}

export default App;
