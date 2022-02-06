import { configureStore } from "./configureStore";
import { Provider } from "react-redux";
import ComponentOne from "./MyComponents/ComponentOne";
import ComponentTwo from "./MyComponents/ComponentTwo";

const url = "https://gorest.co.in/public/v2/posts" ;
function App() {
  const store = configureStore;
  window.localStorage.clear(); //clear all localstorage
  // const renderLate =()=>{
  //   setTimeout(()=>{
  //     return 
  //   },2000)
  // }
  return (
    <Provider store={store}>
      <div className="App">
        <ComponentOne url={url}/>
        <ComponentTwo url={url}/>
        <ComponentTwo url={"www.google.com"}/>
      </div>
    </Provider>
  );
}

export default App;
