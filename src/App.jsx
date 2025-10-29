//--------------------|📝 : Imports

import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import "./assets/styles/main.scss";

//--------------------|📝 : App

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
