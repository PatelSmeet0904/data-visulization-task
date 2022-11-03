import BarPlot from "./components/BarPlot";
import Header from "./components/Header";
import ScatterPlot from "./components/ScatterPlot";

const App = ()=> {
  return (
    <div className="App">
      <Header />
      <div className="plotContainer">
        <BarPlot />
        <ScatterPlot />
      </div>
    </div>
  );
}

export default App;
