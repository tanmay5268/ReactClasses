import "./App.css";
//what is props drilling?
//higher order components.
import PropComponent from "./components/PropComponent";
function App() {
  //owns the data
  return (
    <div style={{backgroundColor:"white",height:'100vh'}}>
      <PropComponent></PropComponent>
    </div>
  );
}

export default App;
