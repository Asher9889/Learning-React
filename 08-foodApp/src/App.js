
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";


const App = () => {
  return (
    <Provider store={appStore}>
    <div className="w-full">
      <Header />
      <Outlet />
    </div> 
    </Provider>
  )
};

export default App;
