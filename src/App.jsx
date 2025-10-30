//--------------------|📝 : Imports

import Content from "./layout/Content";
import Sidebar from "./layout/Sidebar";
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
